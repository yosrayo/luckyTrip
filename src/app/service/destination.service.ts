
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private luckyTripApi_1 = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations';
  private luckyTripApi_2 = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destination';
  constructor(private http: HttpClient) { }


getAllDestination(){
  return this.http.get(this.luckyTripApi_1);
}

  searchDestination(city:String){
    return this.http.get(this.luckyTripApi_1+'?search_type=city_or_country&search_value='+city);
  }

  getDestinationById(id:number){
    return this.http.get(this.luckyTripApi_2+'?id='+id);
  }
}
