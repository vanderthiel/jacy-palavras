import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Verbo} from '../dto/verbo';
import {Collection} from '../dto/collection';

@Injectable({
  providedIn: 'root'
})
export class VerbosService {
  private url: string = '/data/verbos.json';
  private data: Array<Collection<Verbo>>;

  constructor(private http: Http) { }

  get(): Observable<Array<Collection<Verbo>>> {
    if(!this.data){
      let promise:Observable<Array<Collection<Verbo>>> = this.http.get(this.url).pipe(map((res:Response) => res.json()));
      promise.subscribe(res => this.data = res);

      return promise;
    }
    return of(this.data);
  }
}
