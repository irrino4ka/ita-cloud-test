import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ItaHeaderComponent } from './ita-header.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ItaHeaderComponent', () => {
  let component: ItaHeaderComponent;
  let fixture: ComponentFixture<ItaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaHeaderComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
