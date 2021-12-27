import { InjectionToken, Provider } from '@angular/core';
import { environment } from 'src/environments/environment';

// For components and services to use as
// the type of the environment config.
export type Environment = typeof environment;

// For components and services to inject.
export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment injection token');

// For AppModule to provide.
export const environmentProvider: Provider = {
  provide: ENVIRONMENT_TOKEN,
  useValue: environment,
};
