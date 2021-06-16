import { PersonalDataModel } from "@models/personal-data.model";
import { createAction, props } from "@ngrx/store";

export enum UserActionType {
    createUser = "[USER] Create User",
    createUserSuccess = "[USER] Create User Success",
    getUserById = "[USER] Create User",
    getUserByIdSuccess = "[USER] Create User Success",
    getAllUser = "[USER] Create User",
    getAllUserSuccess = "[USER] Create User Success",
    updateUser= "[USER] Update User",
    updateUserSuccess= "[USER] Update User Success",
    deleteUser= "[USER] Delete User",
    deleteUserSuccess= "[USER] Delete User Success",
    userError= "[USER]  Error User",
}


export const createUser = createAction(
    UserActionType.createUser,
    props<{ user: PersonalDataModel }>()
);
export const createUserSuccess = createAction(
    UserActionType.createUserSuccess,
    props<{ user: PersonalDataModel }>()
);

export const getUserById = createAction(
    UserActionType.getUserById,
    props<{ userId: string }>()
);
export const getUserByIdSuccess = createAction(
    UserActionType.getUserByIdSuccess,
    props<{ user: PersonalDataModel }>()
);

export const getAllUser = createAction(
    UserActionType.getAllUser,
);
export const getAllUserSuccess = createAction(
    UserActionType.getAllUserSuccess,
    props<{ userAll: PersonalDataModel[] }>()
);

export const updateUser = createAction(
    UserActionType.updateUser,
    props<{ userId: string }>()
);
export const updateUserSuccess = createAction(
    UserActionType.updateUserSuccess,
    props<{ user: PersonalDataModel }>()
);

export const deleteUser = createAction(
    UserActionType.deleteUser,
    props<{ userId: string }>()
);
export const deleteUserSuccess = createAction(
    UserActionType.deleteUserSuccess,
    props<{ mens: string }>()
);

export const userError = createAction(
    UserActionType.userError,
    props<{ error: any }>()
);