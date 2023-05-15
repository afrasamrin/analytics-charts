import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8080/api/charts';
  private timeoutMs = 1000000; // Set timeout to -- seconds

  // linex : any = [];
  // liney : any = [];
  
    
  // public _linex = new BehaviorSubject<any>(this.linex) ;
  // newlinex = this._linex.asObservable();

  // public _liney = new BehaviorSubject<any>(this.liney) ;
  // newliney = this._liney.asObservable();

 
  public Subject = new Subject<any>();

  constructor(private http: HttpClient) { }

//   getCharts(){
//     let option = {};
//     return this.http.get('https://localhost:8080/api/charts',option);
// }

//  changelinex(a:any){
//       this._linex.next(a);
//     }

//     changeliney(a:any){
//       this._liney.next(a);
//     }
    
getCharts(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        timeout(this.timeoutMs),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            return throwError('Request timed out');
          }
          return throwError('Something went wrong');
        })
      );
  }


}