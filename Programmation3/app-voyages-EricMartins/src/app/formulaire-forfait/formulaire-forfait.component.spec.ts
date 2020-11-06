import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireForfaitComponent } from './formulaire-forfait.component';

describe('FormulaireForfaitComponent', () => {
  let component: FormulaireForfaitComponent;
  let fixture: ComponentFixture<FormulaireForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
