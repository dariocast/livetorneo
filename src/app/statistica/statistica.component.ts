import { Component, OnInit } from '@angular/core';
import {PartiteService} from '../partite.service';
import {Observable} from 'rxjs';
import {Marcatore} from '../objects/marcatore';

@Component({
  selector: 'app-statistica',
  templateUrl: './statistica.component.html',
  styleUrls: ['./statistica.component.css']
})
export class StatisticaComponent implements OnInit {
  marcatori: Observable<Marcatore[]>;

  constructor(private partiteService: PartiteService) {
    this.marcatori = this.partiteService.getMarcatori();
  }

  ngOnInit() {
  }

}
