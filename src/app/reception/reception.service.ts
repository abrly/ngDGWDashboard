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
export class ReceptionService {

  constructor(private http: HttpClient ) { }

  getUserPerformance() {
    return (this.http
      .get<UserPerformance[]>(
        BackendURL + 'reception/userperformance'));
  }

  getSubjectwiseTotals() {
    return (this.http
        .get<SubjectwiseTotals[]>(
          BackendURL + 'reception/subjectwisetotals'));
  }

  getSummaryTotals() {
    return (this.http
        .get<SummaryTotals[]>(
          BackendURL + 'reception/summarytotals'));
  }

}
