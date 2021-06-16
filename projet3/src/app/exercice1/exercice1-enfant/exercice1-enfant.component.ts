import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() private editC: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public removeCount(): void {
    this.compteur--;
    this.editC.emit(this.compteur);
  }

  public addCount(): void {
    this.compteur++;
    this.editC.emit(this.compteur);
  }
}
