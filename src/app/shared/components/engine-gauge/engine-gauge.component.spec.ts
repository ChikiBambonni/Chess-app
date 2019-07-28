import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineGaugeComponent } from './engine-gauge.component';

describe('EngineGaugeComponent', () => {
  let component: EngineGaugeComponent;
  let fixture: ComponentFixture<EngineGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
