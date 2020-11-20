import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  produit1: Produit ={
    id : '1',
    nom : 'produit #1',
    description:'description#1',
    prix: 50
  }

  produit2: Produit ={
    id : '2',
    nom : 'produit #2',
    description:'description #2',
    prix: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
