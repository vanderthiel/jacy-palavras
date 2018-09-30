import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Collection} from '../dto/collection';
import { Converse } from '../dto/converse';

@Injectable({
  providedIn: 'root'
})
export class ConversesService {
  private url: string = '/data/converse.json';
  private data: Array<Collection<Converse>>;

  constructor(private http: Http) { }

  get(): Observable<Array<Collection<Converse>>> {
    if(!this.data){
      let promise:Observable<Array<Collection<Converse>>> = this.http.get(this.url).pipe(map((res:Response) => res.json()));
      promise.subscribe(res => this.data = res);

      return promise;
    }
    return of(this.data);
  }
}
