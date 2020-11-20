import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() Heros: Hero;

  constructor() { }

  
  ngOnInit(): void {
    console.log('Composant hero:', this.Heros );
  }
  unsorted() { }
}
