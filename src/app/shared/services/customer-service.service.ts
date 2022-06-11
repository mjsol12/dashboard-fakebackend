import { Injectable } from '@angular/core';
import {Card} from "../models/cards";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      alert(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  GetHeaders() {
    return this.httpClient.get<Card[]>('/headers').pipe(
      tap((data) => { return data }),
      catchError(this.handleError('error on getting header'))
    );
  }

  GetPageModel() {
    return this.httpClient.get<any[]>('/page-model').pipe(
      tap((data) => {return data}),
      catchError(this.handleError('error on getting header'))
    );
  }

  GetData(parameters:any) {
    return this.httpClient.post<Card[]>('/query-data', parameters).pipe(
      tap((data) => {return data}),
      catchError(this.handleError('error on getting header'))
    );
  }
}
