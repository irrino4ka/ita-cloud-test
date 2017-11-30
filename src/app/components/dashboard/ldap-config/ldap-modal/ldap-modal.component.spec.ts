import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';

import { LdapModalComponent } from './ldap-modal.component';

describe('LdapModalComponent', () => {
  let component: LdapModalComponent;
  let fixture: ComponentFixture<LdapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialsModule
      ],
      declarations: [ LdapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
