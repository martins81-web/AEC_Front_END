import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  message = {
    mot1: "I",
    mot2: "LIKE",
    mot3: "ANGULAR",
    mot4: "VERY",
    mot5: "MUCH"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
