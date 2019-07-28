import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsMtComponent } from './openings-mt.component';

describe('OpeningsMtComponent', () => {
  let component: OpeningsMtComponent;
  let fixture: ComponentFixture<OpeningsMtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsMtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
