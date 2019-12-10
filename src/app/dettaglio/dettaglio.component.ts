import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Partita} from '../objects/partita';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit, OnChanges {

  @Input()  partita: Partita;
  public data: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.partita) {
      const data = new Date(this.partita.data*1000);
      this.data = data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear();
    }
  }

}
