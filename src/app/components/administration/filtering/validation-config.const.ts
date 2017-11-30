import { InjectionToken } from '@angular/core';

import { ValidationConfig } from './validation-config.interface';

export const VALIDATION_CONFIG = new InjectionToken<ValidationConfig>('validation.config');

export const validationConfig: ValidationConfig = {
    errorRequired: 'required',
    errorRequiredMessage: 'You must enter a value'
};
