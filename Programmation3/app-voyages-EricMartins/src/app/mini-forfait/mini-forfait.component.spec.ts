import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniForfaitComponent } from './mini-forfait.component';

describe('MiniForfaitComponent', () => {
  let component: MiniForfaitComponent;
  let fixture: ComponentFixture<MiniForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
