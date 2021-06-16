import {
  createSelector,
  createFeatureSelector,
  Action,
  ActionReducerMap,
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromAuth from '@root/auth/login/store/reducer';
import * as fromRequest from '@root/main/requests/store/reducer';
import * as fromUser from '@root/components/user-management/store/user-management.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  auth: fromAuth.State;
  request: fromRequest.State;
  user: fromUser.State;
  // orders: fromOrders.State;
  // vendor: fromVendor.State;
  // product: fromProduct.State
}
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    auth: fromAuth.reducer,
    request: fromRequest.reducer,
    user: fromUser.reducer,
  }),
});

// ================[AUTENTICACION]======================================\\
//#region Auntentication
export const getAuthState =
  createFeatureSelector<State, fromAuth.State>('auth');

export const getLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);

export const getAuthUser = createSelector(getAuthState, fromAuth.getAuthUser);

export const getLoginError = createSelector(
  getAuthState,
  fromAuth.getLoginError
);
export const getAuthLoading = createSelector(
  getAuthState,
  fromAuth.getAuthLoading
);
//#endregion

// ================[Request]==============================================\\
//#region Request
export const getRequestState =
  createFeatureSelector<State, fromRequest.State>('request');
export const getCurrentRequest = createSelector(
  getRequestState,
  fromRequest.getRequest
);

export const getRequestAll = createSelector(
  getRequestState,
  fromRequest.getRequestAll
);
export const getRequestError = createSelector(
  getRequestState,
  fromRequest.getRequestError
);
export const getRequestMessage = createSelector(
  getRequestState,
  fromRequest.getRequestMessage
);
export const getRequestLoading = createSelector(
  getRequestState,
  fromRequest.getRequestLoading
);
//#endregion

// ================[USER]======================================\\
//#region User
export const getUserState =
  createFeatureSelector<State, fromUser.State>('user');
export const getUser = createSelector(getUserState, fromUser.getUser);
export const getUserAll = createSelector(getUserState, fromUser.getUserAll);
export const getUserLoading = createSelector(getUserState, fromUser.getUserLoading);
export const getUserError = createSelector(getUserState, fromUser.getUserError);
export const getUserMessage = createSelector(getUserState, fromUser.getUserMessage);
//#endregion
