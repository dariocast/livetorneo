import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Partita} from '../objects/partita';
import {PartiteService} from '../partite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public partiteService: PartiteService) {
    this.partite = partiteService.getPartite();
  }

  partite: Observable<Partita[]>;
  public selezionata: Partita;

  isToday(someDate: number) {
    const today = new Date();
    const thatDate = new Date(someDate * 1000);
    return thatDate.getDate() == today.getDate() &&
      thatDate.getMonth() == today.getMonth() &&
      thatDate.getFullYear() == today.getFullYear();
  }
  ngOnInit() {
  }

  onSelect(partita: Partita) {
    this.selezionata = partita;
  }

  isPast(data: number) {
    const today = new Date();
    const thatDate = new Date(data * 1000);
    return thatDate.getDate() < today.getDate() ||
      thatDate.getMonth() < today.getMonth() ||
      thatDate.getFullYear() < today.getFullYear();
  }
}
