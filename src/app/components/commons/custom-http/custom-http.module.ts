import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../../../../environments/environment';

export const firebaseConfig = environment.firebaseConfig;

import { CustomHttpService } from './custom-http.service';
@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()],
  providers: [
    CustomHttpService
  ],
  declarations: []
})
export class CustomHttpModule { }
