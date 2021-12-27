import { Subject } from 'rxjs';
import { AppComponent } from './app.component';

describe('The ngOnInit hook', () => {
  it('should call the loadData method of the DataService.', () => {
    const dataServiceSpy = { loadData: jest.fn(), data$: new Subject() };
    const swipeServiceStub = { swipeLeft$: new Subject(), swipeRight$: new Subject() };
    const updateServiceStub = { hasUpdate$: new Subject() };
    const routerDummy = null;
    const appComponent = new AppComponent(
      dataServiceSpy as any,
      updateServiceStub as any,
      swipeServiceStub as any,
      routerDummy as any,
    );

    appComponent.ngOnInit();

    expect(dataServiceSpy.loadData).toHaveBeenCalledTimes(1);
  });
});
