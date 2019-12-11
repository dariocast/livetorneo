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
    { label: 'Live', path: '/live' },
    { label: 'Classifica', path: '/classifica' }
  ];
}
