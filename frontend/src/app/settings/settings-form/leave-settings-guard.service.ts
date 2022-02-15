import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { SettingsComponent } from '../settings.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveSettingsGuardService implements CanDeactivate<SettingsComponent> {
  canDeactivate(
    settingsComponent: SettingsComponent,
    _currentRoute: ActivatedRouteSnapshot,
    _currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): boolean {
    // We access the settingsForm component directly.
    const settingsForm = settingsComponent.settingsForm!;

    if (settingsForm.hasUnsavedChanges() && !settingsForm.isDiscardChangesConfirmed) {
      settingsForm.guardedRoute = nextState?.url;
      settingsForm.isDiscardChangesDialogVisible = true;
      return false;
    }

    return true;
  }
}
