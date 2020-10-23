import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeForfaitsComponent } from './liste-forfaits.component';

describe('ListeForfaitsComponent', () => {
  let component: ListeForfaitsComponent;
  let fixture: ComponentFixture<ListeForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
