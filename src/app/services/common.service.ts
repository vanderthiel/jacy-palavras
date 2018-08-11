import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Common} from '../dto/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url: string = '/data/common.json';

  constructor(private http: Http) { }

  get(): Observable<Common> {
    return this.http
      .get(this.url)
      .pipe(map((res:Response) => res.json()));
  }
}
