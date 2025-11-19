import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { firebaseProviders } from '../app/auth/config/firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ...firebaseProviders
  ]
};
