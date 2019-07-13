import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsTableComponent } from './openings-table.component';

describe('OpeningsTableComponent', () => {
  let component: OpeningsTableComponent;
  let fixture: ComponentFixture<OpeningsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
