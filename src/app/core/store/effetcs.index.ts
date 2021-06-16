import { AuthEffects } from '@root/auth/login/store/effects';
import { UserEffects } from '@root/components/user-management/store/user-management.effects';
import { RequestEffects } from '@root/main/requests/store/effects';


export const effects = [
  AuthEffects,
  RequestEffects,
  UserEffects
];
