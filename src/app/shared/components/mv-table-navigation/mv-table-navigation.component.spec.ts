import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvTableNavigationComponent } from './mv-table-navigation.component';

describe('MvTableNavigationComponent', () => {
  let component: MvTableNavigationComponent;
  let fixture: ComponentFixture<MvTableNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvTableNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvTableNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
