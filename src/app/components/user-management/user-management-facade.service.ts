import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAppRoot from '@root/core/store/reducer.index';
import { PersonalDataModel } from '@models/personal-data.model';
import { UserActions } from '@root/core/store/actions.index';

@Injectable({
  providedIn: 'root',
})
export class UserFacadeService {
  constructor(private store: Store<fromAppRoot.State>) {}

  createUser(user: PersonalDataModel): void {
    this.store.dispatch(UserActions.createUser({ user }));
  }
  getUser$(): Observable<PersonalDataModel | null> {
    return this.store.select(fromAppRoot.getUser);
  }
  getUserError$(): Observable<string | null> {
    return this.store.select(fromAppRoot.getUserError);
  }
  getUserMessage$(): Observable<string | null> {
    return this.store.select(fromAppRoot.getUserMessage);
  }
  getUserLoading$(): Observable<boolean | null> {
    return this.store.select(fromAppRoot.getUserLoading);
  }
  // searchAdvertisingAll(): void {
  //     this.store.dispatch(advertisingActions.searchAllAdvertisings());
  // }
  // searchAdvertisingAllActive(): void {
  //     this.store.dispatch(advertisingActions.searchAllActiveAdvertisings());
  // }
  // getMessage$(): Observable<string> {
  //     return this.store.select(fromAppRoot.getAddressShippingMessage);
  // }
  // getMessageError$(): Observable<string> {
  //     return this.store.select(fromAppRoot.getAddressShippingError);
  // }
}
