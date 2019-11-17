import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsPanedComponent } from './birds-paned.component';

describe('BirdsPanedComponent', () => {
  let component: BirdsPanedComponent;
  let fixture: ComponentFixture<BirdsPanedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsPanedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsPanedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
