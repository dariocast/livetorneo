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

  partite: Observable<Partita[]>;
  private selezionata: Partita;

  constructor(public partiteService: PartiteService) {
    this.partite = partiteService.getPartite();
  }
  ngOnInit() {
  }

  onSelect(partita: Partita) {
    this.selezionata = partita;

  }
}
