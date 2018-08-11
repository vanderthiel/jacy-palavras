import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {General} from '../dto/general';
import {Collection} from '../dto/collection';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private url: string = '/data/general.json';

  constructor(private http: Http) { }

  get(): Observable<Collection<General>> {
    return this.http
      .get(this.url)
      .pipe(map((res:Response) => res.json()));
  }
}
