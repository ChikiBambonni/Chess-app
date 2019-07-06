import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListCardComponent } from './friend-list-card.component';

describe('FriendListCardComponent', () => {
  let component: FriendListCardComponent;
  let fixture: ComponentFixture<FriendListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
