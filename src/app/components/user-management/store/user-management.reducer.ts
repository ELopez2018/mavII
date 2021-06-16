import { PersonalDataModel } from '@models/personal-data.model';
import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from '@root/core/store/actions.index';

export interface State {
  user: PersonalDataModel | null;
  userAll: PersonalDataModel[];
  error: any | null;
  loading: boolean;
  message: string | null;
}

export const initialState: State = {
  user: null,
  userAll: [],
  error: null,
  loading: false,
  message: null,
};

const userReducer = createReducer(
  initialState,
  on(UserActions.createUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(UserActions.createUserSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null,
    message: user.name ? "Usuario Registrado." : null,
  })),
  on(UserActions.getUserById, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    message: null,
  })),
  on(UserActions.getUserByIdSuccess, (state, { User }) => ({
    ...state,
    User,
    isLoading: false,
    error: null,
    message: null,
  })),
  on(UserActions.userError, (state, { error }) => {
    console.log(error);
    return ({
      ...state,
      isLoading: false,
      error: error.error.message,
      message: null,
    })
  } )
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
export const getUserError = (state: State) => state.error;
export const getUserLoading = (state: State) => state.loading;
export const getUserMessage = (state: State) => state.message;

export const getUser = (state: State) => state.user;
export const getUserAll = (state: State) => state.userAll;
