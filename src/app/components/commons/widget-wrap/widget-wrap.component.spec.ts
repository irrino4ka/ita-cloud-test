import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWrapComponent } from './widget-wrap.component';

describe('WidgetComponent', () => {
  let component: WidgetWrapComponent;
  let fixture: ComponentFixture<WidgetWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
