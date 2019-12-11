import { Component, OnInit } from '@angular/core';
import {Squadra} from '../objects/squadra';
import {MatTableDataSource} from '@angular/material';
import {PartiteService} from '../partite.service';
import {Partita} from '../objects/partita';
import {Gruppo} from '../objects/gruppo';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit {
  displayedColumns: string[] = ['squadra', 'pg', 'v', 'p', 's', 'gf', 'gs', 'dg', 'pt', 'ultime'];
  public gironeA: MatTableDataSource<Squadra>;
  public gironeC: MatTableDataSource<Squadra>;
  public gironeB: MatTableDataSource<Squadra>;
  public gironeAF: MatTableDataSource<Squadra>;
  public gironeBF: MatTableDataSource<Squadra>;
  public gruppi: Gruppo[];

  constructor(private partiteService: PartiteService) {
    this.initDatasources();
    this.partiteService.getGruppi()
      .subscribe((array: Gruppo[]) => {
        this.gruppi = array;
        const dataA = this.gironeA.data;
        const dataB = this.gironeB.data;
        const dataC = this.gironeC.data;
        const dataAF = this.gironeAF.data;
        const dataBF = this.gironeBF.data;
        for (const gruppo of array) {
          const squadra: Squadra = {
            nome: gruppo.nome,
            logo: gruppo.logo,
            girone: gruppo.girone,
            pg: 0,
            v: 0,
            p: 0,
            s: 0,
            gf: 0,
            gs: 0,
            pt: 0,
            ultime: []
          };
          switch (gruppo.girone) {
            case 'a':
              dataA.push(squadra);
              break;
            case 'b':
              dataB.push(squadra);
              break;
            case 'c':
              dataC.push(squadra);
              break;
            case 'af':
              dataAF.push(squadra);
              break;
            case 'bf':
              dataBF.push(squadra);
              break;
          }
        }
        this.gironeA.data = dataA;
        this.gironeB.data = dataB;
        this.gironeC.data = dataC;
        this.gironeAF.data = dataAF;
        this.gironeBF.data = dataBF;
      });
    this.partiteService.getPartite()
      .subscribe((array: Partita[]) => {
        for (const partita of array) {
        }
      });

  }

  private updateDatasources() {
    this.gironeA.connect();
  }

  private initDatasources() {
    this.gironeA = new MatTableDataSource<Squadra>();
    this.gironeB = new MatTableDataSource<Squadra>();
    this.gironeC = new MatTableDataSource<Squadra>();
    this.gironeAF = new MatTableDataSource<Squadra>();
    this.gironeBF = new MatTableDataSource<Squadra>();
  }

  ngOnInit() {
  }

}
