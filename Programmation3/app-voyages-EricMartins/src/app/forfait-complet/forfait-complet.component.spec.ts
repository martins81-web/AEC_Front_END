import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitCompletComponent } from './forfait-complet.component';

describe('ForfaitCompletComponent', () => {
  let component: ForfaitCompletComponent;
  let fixture: ComponentFixture<ForfaitCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitCompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
