import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserPerformance } from './models/userperformance.model';

import { environment } from '../../environments/environment';

import { StatusSummary } from './models/statussummary.model';

import { SummaryTotals } from './models/summarytotals.model';

const BackendURL = environment.API_Prefix ;

@Injectable({
  providedIn: 'root'
})
export class FleetReqService {

  constructor(private http: HttpClient ) { }

  getSummaryTotals() {
    return (this.http
        .get<SummaryTotals[]>(
          BackendURL + 'fleetreq/summarytotals'));
  }

  getStatusSummary() {
    return (this.http
        .get<StatusSummary[]>(
          BackendURL + 'fleetreq/statussummary'));
  }
  
  

}