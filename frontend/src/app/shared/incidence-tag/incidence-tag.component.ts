import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-incidence-tag",
  templateUrl: "./incidence-tag.component.html",
  styleUrls: ["./incidence-tag.component.css"],
})
export class IncidenceTagComponent implements OnInit {
  @Input() incidence = 100;
  fontColor = "";
  backgroundColor = "";

  ngOnInit() {
    this.fontColor = this.getColorByIncidence(this.incidence);
    this.backgroundColor = this.fontColor
      .replace(")", ",0.1)")
      .replace("rgb", "rgba");
  }

  getColorByIncidence(incidence: number): string {
    if (incidence <= 100) {
      return "rgb(46, 204, 113)";
    } else if (incidence <= 200) {
      return "rgb(241, 196, 15)";
    } else if (incidence <= 300) {
      return "rgb(243, 156, 18)";
    } else if (incidence <= 400) {
      return "rgb(211, 84, 0)";
    } else if (incidence <= 500) {
      return "rgb(231, 76, 60)";
    } else {
      return "rgb(192, 57, 43)";
    }
  }
}
