import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { SubjectwiseTotals } from './models/subjectwisetotals.model';

const BackendURL = environment.API_Prefix ;

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient ) { }

  getStatuswiseTotals() {
    return (this.http
        .get<SubjectwiseTotals[]>(
          BackendURL + 'asset/statuswisetotals'));
  }


  getTypewiseTotals() {
    return (this.http
        .get<SubjectwiseTotals[]>(
          BackendURL + 'asset/typewisetotals'));
  }

 
}
