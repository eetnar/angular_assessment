import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseflickrComponent } from './parseflickr.component';

describe('ParseflickrComponent', () => {
  let component: ParseflickrComponent;
  let fixture: ComponentFixture<ParseflickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseflickrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseflickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
