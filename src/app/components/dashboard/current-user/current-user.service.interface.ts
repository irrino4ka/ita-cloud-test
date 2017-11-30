import { CurrentUser } from './current-user.model';
import { Observable } from 'rxjs/Observable';

export interface CurrentUserService {
    getUser(): Observable<CurrentUser[]>;
    getUserData(): CurrentUser;
    setUserData(currentUser: CurrentUser): void;
    update(user: CurrentUser): void;
}
