import { InjectionToken } from '@angular/core';

import { TableConst } from './table.const.interface';

export const TABLE_CONST = new InjectionToken<TableConst>('table.const');

export const tableConst: TableConst = {
    textError: `Please enter valid name with more than 5
    A-Z symbols or numbers.`,
    classActive: 'Active',
    classActiveUser: 'active-user',
    classInactiveUser: 'inactive-user',
    classShow: 'show',
    classHide: 'hide',
    addDialogWidth: '500px',
    addDialogHeight: '500px',
    styleError: 'border-color: red',
    validatorMinLength: 5
};
