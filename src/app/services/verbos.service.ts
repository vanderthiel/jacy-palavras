import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Verbo} from '../dto/verbo';
import {Collection} from '../dto/collection';

@Injectable({
  providedIn: 'root'
})
export class VerbosService {
  private url: string = '/data/verbos.json';

  constructor(private http: Http) { }

  get(): Observable<Array<Collection<Verbo>>> {
    return this.http
      .get(this.url)
      .pipe(map((res:Response) => res.json()));
  }
}
