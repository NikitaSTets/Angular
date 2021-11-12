import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { EventEmitter } from '@angular/core';
import { ISession } from ".";
import { IEvent } from "./event.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {

  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handeleError<IEvent[]>('getEvents', [])))
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id)
      .pipe(catchError(this.handeleError<IEvent>('getEvent')))
  }

  saveEvent(event: any) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    return this.http.post<IEvent>('api/events', event, options)
      .pipe(catchError(this.handeleError<IEvent>('saveEvent')))
  }

  searchSessions(seatchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + seatchTerm)
      .pipe(catchError(this.handeleError<ISession[]>('searchSessions')))
  }


  private handeleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T)
    }
  }
}