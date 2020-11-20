import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css']
})
export class Hero2Component implements OnInit {
  @Input() mot:string; 

  constructor() { }

  ngOnInit(): void {
  }

}
