import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserPerformance } from './models/userperformance.model';

import { environment } from '../../environments/environment';

import { SubjectwiseTotals } from './models/subjectwisetotals.model';

import { SummaryTotals } from './models/summarytotals.model';

const BackendURL = environment.API_Prefix ;

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient ) { }

  getUserPerformance() {
    return (this.http
      .get<UserPerformance[]>(
        BackendURL + 'insurance/userperformance'));
  }

  getSubjectwiseTotals() {
    return (this.http
        .get<SubjectwiseTotals[]>(
          BackendURL + 'insurance/subjectwisetotals'));
  }

  getSummaryTotals() {
    return (this.http
        .get<SummaryTotals[]>(
          BackendURL + 'insurance/summarytotals'));
  }

}
