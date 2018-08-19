import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Palavra} from '../dto/palavra';
import {Collection} from '../dto/collection';

@Injectable({
  providedIn: 'root'
})
export class PalavrasService {
  private url: string = '/data/palavras.json';
  private data: Array<Collection<Palavra>>;

  constructor(private http: Http) { }

  get(): Observable<Array<Collection<Palavra>>> {
    if(!this.data){
      let promise:Observable<Array<Collection<Palavra>>> = this.http.get(this.url).pipe(map((res:Response) => res.json()));
      promise.subscribe(res => this.data = res);

      return promise;
    }
    return of(this.data);
  }
}
