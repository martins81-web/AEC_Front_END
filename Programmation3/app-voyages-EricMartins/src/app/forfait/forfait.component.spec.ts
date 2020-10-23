import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitComponent } from './forfait.component';

describe('ForfaitComponent', () => {
  let component: ForfaitComponent;
  let fixture: ComponentFixture<ForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
