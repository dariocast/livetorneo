import {Giocatore} from './giocatore';

export interface Partita {
  _id: number;
  squadraUno: string;
  squadraDue: string;
  golSquadraUno: number;
  golSquadraDue: number;
  marcatori: Giocatore[];
  ammoniti: Giocatore[];
  espulsi: Giocatore[];
  data: number;
}
