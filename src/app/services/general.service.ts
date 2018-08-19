import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {General} from '../dto/general';
import {Collection} from '../dto/collection';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private url: string = '/data/general.json';
  private data: Array<Collection<General>>;

  constructor(private http: Http) { }

  get(): Observable<Array<Collection<General>>> {
    if(!this.data){
      let promise:Observable<Array<Collection<General>>> = this.http.get(this.url).pipe(map((res:Response) => res.json()));
      promise.subscribe(res => this.data = res);

      return promise;
    }
    return of(this.data);
  }
}
