import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgbModule, NgbTooltip, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

import { CommonsModule } from '../../commons/commons.module';
import { CustomMaterialsModule } from '../../commons/custom-materials/custom-materials.module';
import { ComponentsModule } from '../../components.module';
import { DashboardModule } from '../dashboard.module';
import { LdapConfigModule } from './ldap-config.module';
import { LdapConfigComponent } from './ldap-config.component';
import { LdapConfigService } from './ldap-config.service';
import { CustomHttpService } from '../../commons/custom-http/custom-http.service';
import { LdapConfigData } from './ldap-config.interface';

describe('LdapConfigComponent', () => {
  let component: LdapConfigComponent;
  let fixture: ComponentFixture<LdapConfigComponent>;
  let ldapConfigService: LdapConfigService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ComponentsModule,
        CommonsModule,
        DashboardModule,
        LdapConfigModule,
        CustomMaterialsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            panelClass: 'modal-window',
            width: '500px',
            height: '600px',
            data: { name: 'test', hosts: 'test' }
        }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { name: 'test', hosts: 'test' }
        },
        {
          provide: CustomHttpService,
          useClass: CustomHttpService
        },
        {
          provide: AngularFirestore,
          useValue: {}
        },
        {
          provide: NgbTooltip,
          useValue: {}
        },
        {
          provide: NgbTooltipConfig,
          useValue: {
            container: 'body',
            triggers: 'manual',
            placement: 'right',
          }
        }
      ],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const mockLdapServer: LdapConfigData = {
      ldapName: '',
      hosts: '',
      picture: '',
      authStatus: '',
      authorizationInfo: {
        user: '',
        password: '',
      }
    };
    fixture = TestBed.createComponent(LdapConfigComponent);
    component = fixture.debugElement.componentInstance;
    ldapConfigService = fixture.debugElement.injector.get(LdapConfigService);
    spyOn(ldapConfigService, 'getUserId').and.returnValue(Observable.of({0 : {uid: 'someId'}}));
    spyOn(ldapConfigService, 'getServerInfo').and.returnValue(Observable.of(mockLdapServer));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if serverName value in form is valid', () => {
    expect(component.ldapConfigForm.valid).toBeFalsy();
    const serverName = component.ldapConfigForm.controls['ldapName'];
    serverName.setValue('Test server');

    const serverNameErrors = serverName.errors || {};
    expect(serverNameErrors['pattern']).toBeFalsy();
    expect(serverNameErrors['required']).toBeFalsy();
    expect(serverName.valid).toBeTruthy();
  });

  it('should check if authStatus value in form is valid', () => {
    expect(component.ldapConfigForm.valid).toBeFalsy();
    const authStatus = component.ldapConfigForm.controls['authStatus'];
    authStatus.setValue(true);

    const authStatusErrors = authStatus.errors || {};
    expect(authStatusErrors['required']).toBeFalsy();
    expect(authStatus.valid).toBeTruthy();

  });

  it('should check if hosts value in form is valid', () => {
    expect(component.ldapConfigForm.valid).toBeFalsy();
    const hosts = component.ldapConfigForm.controls['hosts'];
    hosts.setValue('255.255.255.255, host.com');

    const hostsErrors = hosts.errors || {};
    expect(hostsErrors['HostsValidity']).toBeFalsy();
    expect(hostsErrors['required']).toBeFalsy();
    expect(hosts.valid).toBeTruthy();
  });

});
