import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",

  styles: [],
})
export class ProductsHeaderComponent {
  @Output() columnCountChange = new EventEmitter<number>();

  sort = "desc";
  itemsShowCount = 12;

  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnUpdated(colsNumb: number): void {
    this.columnCountChange.emit(colsNumb);
  }
}
