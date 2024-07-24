import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { SummaryTotals } from './models/summarytotals.model';

import { UserPerformance } from './models/userperformance.model';

const BackendURL = environment.API_Prefix ;

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient ) { }

  getServiceAgentSummary() {
    return (this.http
      .get<UserPerformance[]>(
        BackendURL + 'appointment/serviceagentsummary'));
  }

  /*
  getSubjectwiseTotals() {
    return (this.http
        .get<SubjectwiseTotals[]>(
          BackendURL + 'insurance/subjectwisetotals'));
  }*/

  getSummaryTotals() {
    return (this.http
        .get<SummaryTotals[]>(
          BackendURL + 'appointment/summarytotals'));
  }

}
