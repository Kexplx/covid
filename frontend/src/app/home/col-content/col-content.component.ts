import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-col-content',
  templateUrl: './col-content.component.html',
  styleUrls: ['./col-content.component.css'],
})
export class ColContentComponent {
  @ContentChild('title') title!: TemplateRef<unknown>;
  @ContentChild('desc') desc: TemplateRef<unknown> | undefined;

  isExpanded = false;
}
