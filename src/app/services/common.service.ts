import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Common} from '../dto/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url: string = '/data/common.json';
  private data: Common;

  constructor(private http: Http) { }

  get(): Observable<Common> {
    if(!this.data){
      let promise:Observable<Common> = this.http.get(this.url).pipe(map((res:Response) => res.json()));
      promise.subscribe(res => this.data = res);

      return promise;
    } else {
      return of(this.data);
    }
  }
}
