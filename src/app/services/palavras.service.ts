import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Palavra} from '../dto/palavra';
import {Collection} from '../dto/collection';

@Injectable({
  providedIn: 'root'
})
export class PalavrasService {
  private url: string = '/data/palavras.json';

  constructor(private http: Http) { }

  get(): Observable<Collection<Palavra>> {
    return this.http
      .get(this.url)
      .pipe(map((res:Response) => res.json()));
  }
}
