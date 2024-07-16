import { Component , OnDestroy, OnInit} from '@angular/core';
import { OrderService } from './order.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { Order } from './models/order.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit , OnDestroy {

  constructor(private orderService: OrderService) { }

  private orderSub!: Subscription;

  public orders!:Order[];


  ngOnInit() {


    this.orderSub = timer(0, 30000).pipe(
      switchMap(x => this.orderService.getOrders())
    ).subscribe((response: Order[]) => {
      this.orders=response;
    });


  }


  ngOnDestroy(){

    if (this.orderSub) {
      this.orderSub.unsubscribe();
    }

  }


}
