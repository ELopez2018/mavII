import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '@models/user.model';

import { environment } from '@environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthenticateModel } from '@models/security/authenticate.model';
import { RequestModel } from '@models/request.model';
import { PersonalDataModel } from '@models/personal-data.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlApi: string = environment.API_URL;
  constructor(private http: HttpClient) {}

  createUser$(User: PersonalDataModel ): Observable<PersonalDataModel> {
    return this.http.post<PersonalDataModel>(this.urlApi + `users/fulldata`, User).pipe(
      tap((resp) => {
        console.log('CreateUserService: ', resp);
        return resp;
      }),
      map( (resp: any) => resp.data )
    );
  }
}
