import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { from, map, Observable, switchMap } from 'rxjs';
import { Environment, ENVIRONMENT_TOKEN } from './environment-provider';

interface Coordinates {
  lat: number;
  lon: number;
}

interface Location {
  districtName: string;
  stateName: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(@Inject(ENVIRONMENT_TOKEN) private environment: Environment, private http: HttpClient) {}

  getLocation(): Observable<Location> {
    // First, we get the user's current coordinates with the built-in geolocation API.
    // Then, we switch map to a http request which responds with a location object.
    return this.getCurrentCoordinates().pipe(
      switchMap(coords => {
        const url = `${this.environment.api}/location`;
        const params = new HttpParams({ fromObject: { ...coords } });

        return this.http.get<Location>(url, { params });
      }),
    );
  }

  private getCurrentCoordinates(): Observable<Coordinates> {
    const positionPromise = new Promise<GeolocationPosition>((res, rej) => {
      // Will ask the user for all necessary tracking permissions.
      navigator.geolocation.getCurrentPosition(res, rej);
    });

    return from(positionPromise).pipe(map(({ coords }) => ({ lat: coords.latitude, lon: coords.longitude })));
  }
}
