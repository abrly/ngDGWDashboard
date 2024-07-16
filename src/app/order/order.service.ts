import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Order } from './models/order.model';

import { environment } from '../../environments/environment';


const BackendURL = environment.API_Prefix ;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient ) { }

  getOrders() {
    return (this.http
      .get<Order[]>(
        BackendURL + 'orders'));
    }

}
