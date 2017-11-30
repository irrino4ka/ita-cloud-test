import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDialogComponent } from './add-dialog.component';
import { MatDialogRef } from '@angular/material';
import { DataServiceStub } from '../data.service.stub';
import { UserRoleService } from '../user-role.service';
import { Router } from '@angular/router';
import { TABLE_CONST, tableConst } from '../table.const';
import { TableConst } from '../table.const.interface';
import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';

describe('AddDialogComponent', () => {
  let component: AddDialogComponent;
  let fixture: ComponentFixture<AddDialogComponent>;
  let service: DataServiceStub;
  let dialogRef: any;

  beforeEach(async(() => {
    service = new DataServiceStub();
    dialogRef = {};
    dialogRef.close = jasmine.createSpy(name);

    TestBed.configureTestingModule({
      imports: [CustomMaterialsModule],
      declarations: [AddDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogRef
        },
        {
          provide: UserRoleService,
          useValue: service
        },
        {
          provide: TABLE_CONST,
          useValue: tableConst
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create add dialog', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form', () => {
    spyOn(service, 'add');
    component.addForm.controls['user'].setValue('test user');

    component.onSubmit('123');
    expect(service.add).toHaveBeenCalledTimes(1);
    expect(dialogRef.close).toHaveBeenCalledTimes(1);
  });

  it('should check form validity', () => {
    expect(component.addForm.valid).toBeFalsy();
    const user = component.addForm.controls['user'];
    expect(user.errors['required']).toBeTruthy();

    user.setValue('@ny');
    expect(user.errors['pattern']).toBeTruthy();
    expect(user.errors['minlength']).toBeTruthy();
    expect(user.valid).toBeFalsy();

  });

  it('should check if form is valis', () => {
    expect(component.addForm.valid).toBeFalsy();
    const newUser = component.addForm.controls['user'];
    newUser.setValue('New User 1');

    const errors = newUser.errors || {};
    expect(errors['pattern']).toBeFalsy();
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(newUser.valid).toBeTruthy();

  });

  it('should convert image to 64base string', () => {
    window['FileReader'] = FileReaderStub;

    const event = {
      target: {
        files: [
          new Blob(['img'])
        ]
      }
    };

    expect(component.imageSrc).toBeUndefined();

    component.onChangeFile(event);

    expect(component.imageSrc).toBeDefined();
    expect(component.imageSrc).toEqual(jasmine.any(String));
  });
});

class FileReaderStub {
  public result: string;

  public readAsDataURL(blob: Blob) {
    this.result = 'data:image/png;base64,iVBORw0K';
    this.onload(new Event('load'));
  }

  public onload(event: Event) {
    //
  }
}
