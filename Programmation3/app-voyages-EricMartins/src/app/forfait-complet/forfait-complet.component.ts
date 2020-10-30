import { Component, OnInit, Input  } from '@angular/core';
import { Forfait } from '../forfait';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})



export class ForfaitCompletComponent implements OnInit {
  @Input() forfait: Forfait;

  constructor() { }

  ngOnInit(): void {
        console.log('Forfait:', this.forfait );

  }

}
