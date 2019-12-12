import { Component } from '@angular/core';
import {PartiteService} from './partite.service';
import {Observable} from 'rxjs';
import {Partita} from './objects/partita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    { label: 'Partite', path: '/partite' },
    { label: 'Classifica', path: '/classifica' },
    { label: 'Statistiche', path: '/statistica' }
  ];
}
