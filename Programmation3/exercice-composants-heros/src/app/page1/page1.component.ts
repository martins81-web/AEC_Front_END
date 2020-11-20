import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { Heros } from '../herosMock';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})

export class Page1Component implements OnInit {
 
  MyHeros: Hero [] = Heros;


  constructor() { }

  ngOnInit(): void {
    console.log('Composant Page1:', this.MyHeros );
  }
}
