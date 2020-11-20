import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nom-produit',
  templateUrl: './nom-produit.component.html',
  styleUrls: ['./nom-produit.component.css']
})
export class NomProduitComponent implements OnInit {
 @Input() name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
