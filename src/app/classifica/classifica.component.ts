import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
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
  public gironeA: MatTableDataSource<Gruppo>;
  public gironeC: MatTableDataSource<Gruppo>;
  public gironeB: MatTableDataSource<Gruppo>;
  public gironeAF: MatTableDataSource<Gruppo>;
  public gironeBF: MatTableDataSource<Gruppo>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private partiteService: PartiteService) {
    this.initDatasources();
    partiteService.getGruppiPerGirone('a')
      .subscribe((array: Gruppo[]) => {
        this.gironeA.data = array;
      });

    partiteService.getGruppiPerGirone('b')
      .subscribe((array: Gruppo[]) => {
        this.gironeB.data = array;
      });

    partiteService.getGruppiPerGirone('c')
      .subscribe((array: Gruppo[]) => {
        this.gironeC.data = array;
      });

    partiteService.getGruppiPerGirone('af')
      .subscribe((array: Gruppo[]) => {
        this.gironeAF.data = array;
      });

    partiteService.getGruppiPerGirone('bf')
      .subscribe((array: Gruppo[]) => {
        this.gironeBF.data = array;
      });
  }

  private updateDatasources() {
  }

  private initDatasources() {
    this.gironeA = new MatTableDataSource<Gruppo>();
    this.gironeB = new MatTableDataSource<Gruppo>();
    this.gironeC = new MatTableDataSource<Gruppo>();
    this.gironeAF = new MatTableDataSource<Gruppo>();
    this.gironeBF = new MatTableDataSource<Gruppo>();
  }

  ngOnInit() {
    this.gironeA.sort = this.sort;
    this.gironeB.sort = this.sort;
    this.gironeC.sort = this.sort;
    this.gironeAF.sort = this.sort;
    this.gironeBF.sort = this.sort;
  }

}
