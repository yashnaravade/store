import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  sideBarToggle: boolean = true;

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      quantity: 1,
      name: product.title,
      price: product.price,
      id: product.id,
    });
  }
}
