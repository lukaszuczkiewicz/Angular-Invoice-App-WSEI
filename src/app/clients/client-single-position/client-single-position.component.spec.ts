import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSinglePositionComponent } from './client-single-position.component';

describe('ClientSinglePositionComponent', () => {
  let component: ClientSinglePositionComponent;
  let fixture: ComponentFixture<ClientSinglePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSinglePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSinglePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
