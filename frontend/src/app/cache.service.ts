import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, unknown>();

  get<T>(key: string): T | null {
    if (!this.cache.has(key)) {
      return null;
    }

    return this.cache.get(key) as T;
  }

  set(key: string, value: unknown): void {
    this.cache.set(key, value);
  }

  delete(key: string): void {
    this.cache.delete(key);
  }
}
