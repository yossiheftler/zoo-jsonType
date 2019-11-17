import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { wildCardComponent } from './wild-card.component';

describe('WildCardComponent', () => {
  let component: wildCardComponent;
  let fixture: ComponentFixture<wildCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ wildCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(wildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
