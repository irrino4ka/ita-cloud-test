import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaFooterComponent } from './ita-footer.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ItaFooterComponent', () => {
  let component: ItaFooterComponent;
  let fixture: ComponentFixture<ItaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaFooterComponent ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
