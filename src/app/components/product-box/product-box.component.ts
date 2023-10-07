import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",

  styles: [],
})
export class ProductBoxComponent {
  @Input() fullWidthMode: boolean = false;
  product: Product | undefined = {
    id: 1,
    title: "Product 1",
    description: "This is the product description.",
    price: 100,
    image: "https://via.placeholder.com/200x150",
    category: "Category 1",
  };

  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
