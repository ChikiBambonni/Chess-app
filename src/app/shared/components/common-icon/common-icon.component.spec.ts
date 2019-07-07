import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonIconComponent } from './common-icon.component';

describe('CommonIconComponent', () => {
  let component: CommonIconComponent;
  let fixture: ComponentFixture<CommonIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
