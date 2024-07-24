import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private appService:AppserviceService){}

  subMenu!: Subscription;
  
  activeMenuDesc!:string;

  ngOnInit(): void {
   
  this.subMenu = this.appService.activeMenu.subscribe((m) => {

    this.activeMenuDesc= m.toString();

   });


 }
  
 

}
