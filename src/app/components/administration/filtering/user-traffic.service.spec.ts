import { TestBed, inject } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { FilteringModule } from './filtering.module';
import { AngularFireMock } from './angular-fire.service.mock';
import { UserTrafficService } from './user-traffic.service';
import { User } from './user.interface';
import { SERVICE_CONFIG, serviceConfig } from './service-config.const';
import { ServiceConfig } from './service-config.interface';

describe('UserTrafficService', () => {

    let service: UserTrafficService;
    let af: AngularFireMock;
    const serviceConst: ServiceConfig = serviceConfig;

    beforeEach(() => {
        af = new AngularFireMock();
        service = new UserTrafficService(
            serviceConst as ServiceConfig,
            af as AngularFirestore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
