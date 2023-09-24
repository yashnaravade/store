import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  cols = 3;
  category: string | undefined;

  ngOnInit(): void {}

  sideBarToggle: boolean = true;

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}

