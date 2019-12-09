import {Component, Input, OnInit} from '@angular/core';
import {Partita} from '../objects/partita';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
  @Input()  partita: Partita;

  constructor() { }

  ngOnInit() {
  }

}
