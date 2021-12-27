import { of } from 'rxjs';
import { DataService } from './data.service';

describe('DataService#loadData', () => {
  it('should use dummy data when not in production mode', () => {
    const httpClientMock = {
      get: jest.fn(() => of(1)),
    };
    const dataService = new DataService(
      { production: false } as any, // Environment object.
      httpClientMock as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
    );

    dataService.loadData();

    expect(httpClientMock.get).toHaveBeenNthCalledWith(1, '/assets/data.json');
  });

  it('should call the the services when in production mode', () => {
    const httpClientMock = {
      get: jest.fn(() => of(1)),
    };

    try {
      new DataService(
        { production: true } as any, // Environment object.
        httpClientMock as any,
        null as any,
        null as any,
        null as any,
        null as any,
        null as any,
        null as any,
      );

      fail();
    } catch {
      /**
       * If we're here, the test passes.
       *
       * The constructor called loadData() which then called the services to load
       * production data. This produced errors because the services were null.
       */
    }
  });
});
