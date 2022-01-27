import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install-tutorial',
  templateUrl: './install-tutorial.component.html',
})
export class InstallTutorialComponent implements OnInit {
  browserType = browserType;

  isIos = false;

  ngOnInit(): void {
    if (this.browserType === 'safari') {
      this.isIos = true;
    }
  }
}
