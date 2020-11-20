import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomProduitComponent } from './nom-produit.component';

describe('NomProduitComponent', () => {
  let component: NomProduitComponent;
  let fixture: ComponentFixture<NomProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
