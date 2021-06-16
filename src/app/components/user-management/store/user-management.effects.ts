import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserActions } from '@root/core/store/actions.index';
import { UserService } from '@services/user.service';

@Injectable()
export class UserEffects {
  constructor(private dataService: UserService, private actions$: Actions) {}

  searchAdvertisingsAllEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      switchMap(({ user }) =>
        this.dataService.createUser$(user).pipe(
          map((user) =>
            UserActions.createUserSuccess({
              user,
            })
          ),
          catchError((error) => of(UserActions.userError({ error })))
        )
      )
    )
  );
}


