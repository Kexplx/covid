import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() text = "Default Text";
  @Input() icon?: string;
  @Input() disabled = false;
  @Input() shadow = false;

  @Output() appClick = new EventEmitter();

  onClick() {
    this.appClick.emit();
  }
}
