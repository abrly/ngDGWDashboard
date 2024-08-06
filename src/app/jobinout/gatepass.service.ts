import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserPerformance } from './gp_models/userperformance.model';

import { environment } from '../../environments/environment';

import { SummaryTotals } from './gp_models/summarytotals.model';

const BackendURL = environment.API_Prefix ;

@Injectable({
  providedIn: 'root'
})
export class GatepassService {

  constructor(private http: HttpClient ) { }

  getUserPerformance() {
    return (this.http
      .get<UserPerformance[]>(
        BackendURL + 'gatepass/userperformance'));
  }


  getSummaryTotals() {
    return (this.http
        .get<SummaryTotals[]>(
          BackendURL + 'gatepass/summarytotals'));
  }

}
