import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { FormsModule } from "@angular/forms";
import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://picsum.photos/150",
        name: "Test 1",
        quantity: 1,
        price: 1,
        id: 1,
      },
      {
        product: "https://picsum.photos/150",
        name: "Test 2",
        quantity: 2,
        price: 2,
        id: 2,
      },
      {
        product: "https://picsum.photos/150",
        name: "Test 3",
        quantity: 3,
        price: 3,
        id: 3,
      },
    ],
  };

  dataSource: Array<CartItem> = [];

  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  clearCart(): void {
    this.cart.items = []; // Clear all items in the cart.
  }

  removeItem(item: CartItem): void {
    const index = this.cart.items.indexOf(item);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
    }
  }

  updateCart(item: CartItem): void {
    // You can implement the logic to update the cart item here.
  }

  getTotal(): number {
    return this.cartService.getTotal(this.cart.items);
  }
}
