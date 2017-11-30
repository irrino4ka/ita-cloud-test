export interface LdapConfigData {
    ldapName: string;
    hosts: string;
    picture: string;
    authStatus: string;
    authorizationInfo: {
      user: string;
      password: string;
    };
  }
