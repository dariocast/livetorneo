import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ClassificaComponent } from './classifica/classifica.component';
import { StatisticaComponent } from './statistica/statistica.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/partite', pathMatch: 'full' },
  { path: 'partite', component: HomeComponent },
  { path: 'dettaglio', component: DettaglioComponent },
  { path: 'classifica', component: ClassificaComponent },
  { path: 'statistica', component: StatisticaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettaglioComponent,
    ClassificaComponent,
    StatisticaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
