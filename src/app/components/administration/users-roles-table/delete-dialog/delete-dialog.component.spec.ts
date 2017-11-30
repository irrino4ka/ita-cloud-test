import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRoleService } from '../user-role.service';
import { DataServiceStub } from '../data.service.stub';
import { DeleteDialogComponent } from './delete-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomMaterialsModule } from '../../../commons/custom-materials/custom-materials.module';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [CustomMaterialsModule],
      declarations: [DeleteDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            selected: []
          }
        },
        {
          provide: UserRoleService,
          useClass: DataServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create delete dialog', () => {
    expect(component).toBeTruthy();
  });
});
