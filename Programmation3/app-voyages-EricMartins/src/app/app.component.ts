import { Component, Input } from '@angular/core';

import { Forfait } from './forfait';
import { forfaits } from './mock-forfaits';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-EricMartins';
  mesForfaits: Array<Forfait> = forfaits;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  ngOnInit(): void {
    console.log('Mes forfaits',this.mesForfaits);
  }

}
