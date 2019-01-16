import MyMean from '../models/mymean.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class MymeanService {

  api_url = 'http://localhost:3000';
  mymeanUrl = `${this.api_url}/api/mymean`;

  constructor(
      private http: HttpClient
      ) { }

  createMymean(mymean: MyMean): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.mymeanUrl}`, mymean);
  }

  getMyMeans(): Observable<MyMean[]>{
    return this.http.get(this.mymeanUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as MyMean[];
    }))
  }

  editMymean(mymean:MyMean){
    let editUrl = `${this.mymeanUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, mymean);
  }

  deleteMymean(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.mymeanUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

}