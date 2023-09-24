import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styles: [],
})
export class FiltersComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  categories: string[] = [
    "Shoes",
    "Shirts",
    "Pants",
    "Applicances",
    "Electronics",
    "Furniture",
    "Toys",
  ];

  onShowCategory(category: string): void {
 this.showCategory.emit(category);
  }


}
