import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {

  mesForfaits: Array<Forfait> = forfaits;

  constructor() { }

  ngOnInit(): void {
    console.log('Mes forfaits',this.mesForfaits);
  }

}
 