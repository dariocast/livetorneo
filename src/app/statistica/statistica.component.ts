import { Component, OnInit } from '@angular/core';
import {PartiteService} from '../partite.service';
import {Observable} from 'rxjs';
import {Marcatore} from '../objects/marcatore';
import {MatTableDataSource} from '@angular/material';
import {Gruppo} from '../objects/gruppo';

@Component({
  selector: 'app-statistica',
  templateUrl: './statistica.component.html',
  styleUrls: ['./statistica.component.css']
})
export class StatisticaComponent implements OnInit {
  public marcatoriM: MatTableDataSource<Marcatore>;
  public marcatoriF: MatTableDataSource<Marcatore>;
  displayedColumns: string[] = ['nome', 'gruppo', 'gol'];

  constructor(private partiteService: PartiteService) {
    this.partiteService.getMarcatori()
      .subscribe(array => {
        this.marcatoriM.data = array.filter(giocatore => {
          return giocatore._id < 125;
        });
        this.marcatoriF.data = array.filter(giocatore => {
          return giocatore._id > 125;
        });
      });
  }

  ngOnInit() {
    this.marcatoriM = new MatTableDataSource();
    this.marcatoriF = new MatTableDataSource();
  }


}
