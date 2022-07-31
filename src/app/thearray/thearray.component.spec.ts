import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThearrayComponent } from './thearray.component';

describe('ThearrayComponent', () => {
  let component: ThearrayComponent;
  let fixture: ComponentFixture<ThearrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThearrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThearrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
