import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styles: [],
})
export class FiltersComponent implements OnInit {
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

  filterByCategory(category: string) {
    this.categories = this.categories.filter((cat) => cat !== category);
  }
}
