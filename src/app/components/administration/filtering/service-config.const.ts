import { InjectionToken } from '@angular/core';

import { ServiceConfig } from './service-config.interface';

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('service.config');

export const serviceConfig: ServiceConfig = {
    collectionName: 'user-traffic',
    queryName: 'date',
    queryGreater: '>=',
    queryLess: '<=',
    queryEqual: '=='
};
