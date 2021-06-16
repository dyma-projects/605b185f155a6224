import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component {
  public valeur: string;

  @ViewChild("moninput") private el: ElementRef<HTMLInputElement>;

  constructor() {}

  setValue(): void {
    this.valeur = this.el.nativeElement.value;
  }
}
