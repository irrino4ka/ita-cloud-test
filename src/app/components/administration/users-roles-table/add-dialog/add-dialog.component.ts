import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserRoleService } from '../user-role.service';
import { UserRole } from '../user-role';
import { TABLE_CONST, tableConst } from '../table.const';
import { TableConst } from '../table.const.interface';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  public imageSrc: string;
  public addForm: FormGroup;
  public validatorMinLength: number;

  constructor(private dialogRef: MatDialogRef<AddDialogComponent>,
              private fb: FormBuilder,
              private service: UserRoleService,
              @Inject(TABLE_CONST) public tableRoleConst: TableConst) {

  }

  public ngOnInit() {
    this.validatorMinLength = this.tableRoleConst.validatorMinLength;
    this.addForm = this.fb.group({
      user: ['', [Validators.required, Validators.pattern('[\\w ]+'),
       Validators.minLength(this.validatorMinLength)]],
      role: ['Guest'],
      status: ['Disabled'],
    });
  }

  public onSubmit(formValue: any): void {
    if (this.addForm.valid) {
      this.addUser(this.addForm.value, this.imageSrc);
      this.dialogRef.close();
    }
  }

  public addUser(newUser: UserRole, imgSrc: string) {
    this.service.add({
      user: newUser.user,
      status: newUser.status,
      role: newUser.role,
      image: imgSrc || ''
    },
    );
  }

  public onChangeFile(event) {
    const filesArray: any[] = event.target.files;

    if (filesArray && filesArray.length) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.imageSrc = fileReader.result;
      };
      fileReader.readAsDataURL(filesArray[0]);
    }
  }
}
