import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Partita} from './objects/partita';
import {Observable} from 'rxjs';
import {Gruppo} from './objects/gruppo';
import {Marcatore} from './objects/marcatore';

const apiUrl = 'https://dariocast.altervista.org/fantazama/api/partita/getAll.php';
const gruppiUrl = 'https://dariocast.altervista.org/fantazama/api/gruppo/getGruppi.php';
const gironiUrl = 'https://dariocast.altervista.org/fantazama/api/gruppo/getGruppiGirone.php';
const giocatoriUrl = 'https://dariocast.altervista.org/fantazama/api/admin/getMarcatori.php';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  }),
};

@Injectable({providedIn: 'root'})
export class PartiteService {

  constructor(private http: HttpClient) {
  }

  getMarcatori() {
    return this.http.get<Marcatore[]>(giocatoriUrl, httpOptions);
  }

  getPartite() {
    return this.http.get<Partita[]>(apiUrl, httpOptions);
  }

  getGruppi() {
    return this.http.get<Gruppo[]>(gruppiUrl, httpOptions);
  }

  getGruppiPerGirone(girone: string) {
    const params = new URLSearchParams();
    params.append('girone', girone);
    const headers = new HttpHeaders({
      'Content-Type':  'text/plain'
    });
    return this.http.get<Gruppo[]>(gironiUrl, {headers, params: {girone}});
  }
}
