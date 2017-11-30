import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBasicComponent } from './dropdown-basic.component';
import { TranslateModule } from '@ngx-translate/core';

describe('DropdownBasicComponent', () => {
  let component: DropdownBasicComponent;
  let fixture: ComponentFixture<DropdownBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownBasicComponent ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
