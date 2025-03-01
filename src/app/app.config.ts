import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // interceptor de token y error
    provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor])),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: 'LOCAL_STORAGE',
      useValue: typeof window !== 'undefined' ? localStorage : null,
    },
  ],
};
