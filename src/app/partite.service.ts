import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Partita} from './objects/partita';
import {Observable} from 'rxjs';
import {Gruppo} from './objects/gruppo';

const apiUrl = 'https://dariocast.altervista.org/fantazama/api/partita/getAll.php';
const gruppiUrl = 'https://dariocast.altervista.org/fantazama/api/gruppo/getGruppi.php';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};

@Injectable({providedIn: 'root'})
export class PartiteService {
  partiteArray: Observable<Partita[]>;

  constructor(private http: HttpClient) {
  }

  getPartite() {
    return this.http.get<Partita[]>(apiUrl, httpOptions);
  }

  getGruppi() {
    return this.http.get<Gruppo[]>(gruppiUrl, httpOptions);
  }
}
