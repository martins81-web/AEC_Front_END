import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  destinationsControl = new FormControl();
  villesDepartControl = new FormControl();
  filteredDestinations:  Observable<string[]>;
  filteredVillesDepart:  Observable<string[]>;
  villesDepart: string[] = ['Montréal', 'Toronto', 'Québec', 'Ottawa'];
  destinations: string[] = ['Méxique', 'Cuba', 'République dominicaine', 'Costa Rica', 'Guadaloupe', 'Haïti','Jamaïque', 'Martinique','Honduras'];


  ngOnInit() {
    this.filteredDestinations = this.destinationsControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterDestinations(value))
      );
      this.filteredVillesDepart = this.villesDepartControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterVillesDepart(value))
      );
  }

  private filterDestinations(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.destinations.filter(destination => destination.toLowerCase().includes(filterValue));
  }

  private filterVillesDepart(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.villesDepart.filter(ville => ville.toLowerCase().includes(filterValue));
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}