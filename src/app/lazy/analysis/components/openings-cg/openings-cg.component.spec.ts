import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsCgComponent } from './openings-cg.component';

describe('OpeningsCgComponent', () => {
  let component: OpeningsCgComponent;
  let fixture: ComponentFixture<OpeningsCgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningsCgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningsCgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
