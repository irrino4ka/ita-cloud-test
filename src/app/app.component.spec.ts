import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Project modles
import { CommonsModule } from './components/commons/commons.module';
import { AdministrationComponent } from './components/administration/administration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        NgbModule.forRoot()
       ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [
        AppComponent,
        AdministrationComponent,
        DashboardComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ITA.Cloud'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ITA.Cloud');
  }));
  it('should render title in header element', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('ITA.Cloud');
  }));
});
