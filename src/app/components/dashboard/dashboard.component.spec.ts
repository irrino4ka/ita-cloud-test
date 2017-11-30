import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsModule } from '../commons/commons.module';
import { ComponentsModule } from '../components.module';
import { DashboardModule } from './dashboard.module';

import { DashboardComponent } from './dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        CommonsModule,
        DashboardModule,
        TranslateModule.forRoot()
      ],
      declarations: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
