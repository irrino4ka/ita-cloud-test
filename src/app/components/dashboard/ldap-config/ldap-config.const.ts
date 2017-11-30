import { InjectionToken } from '@angular/core';

import { LdapConfigConst } from './ldap-config.const.interface';

export const LDAP_CONFIG_CONST = new InjectionToken<LdapConfigConst>('ldap-config.const');

export const ldapConfigConst: LdapConfigConst = {
    title: 'LDAP Configuration',
    tooltipNameErrorContent: `
            Name should contain only A-z,
            0-9 characters, spaces and can't be empty.
        `,
    tooltipHostsErrorContent: `
            The hosts field should contain hostnames or(and) IP separated by a coma.
            The IP address must be 4 numbers separeted by a period. Each number must
            be a value from 0 to 255. (Example: 192.168.1.1). A hostname is a string
            that must contain at least 2 words separated by a period.
        `,
    ipPattern: `^\\s*(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\s*$`,
    hostPattern: `^\\s*(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])\\s*$`
};
