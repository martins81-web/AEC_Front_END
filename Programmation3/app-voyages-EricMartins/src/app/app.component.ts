import { Component, Input } from '@angular/core';

import { Forfait } from './forfait';
import { forfaits } from './mock-forfaits';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-EricMartins';
  mesForfaits: Array<Forfait> = forfaits;
  ngOnInit(): void {
    console.log('Mes forfaits',this.mesForfaits);
  }

}
