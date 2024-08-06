import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserPerformance } from './models/userperformance.model';

import { environment } from '../../environments/environment';

import { TypewiseTotals } from './models/typewisetotals.model';

import { SummaryTotals } from './models/summarytotals.model';

const BackendURL = environment.API_Prefix ;

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient ) { }

  getUserPerformance() {
    return (this.http
      .get<UserPerformance[]>(
        BackendURL + 'invoice/userperformance'));
  }

  getTypewiseTotals() {
    return (this.http
        .get<TypewiseTotals[]>(
          BackendURL + 'invoice/typewisetotals'));
  }

  getSummaryTotals() {
    return (this.http
        .get<SummaryTotals[]>(
          BackendURL + 'invoice/summarytotals'));
  }

}
