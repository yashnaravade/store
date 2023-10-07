import { Component, Input } from "@angular/core";
import { MatMenuPanel } from "@angular/material/menu";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart/cart.service";

@Component({
  selector: "app-header",

  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  menu: MatMenuPanel<any> | null = null;

  constructor(private cartService: CartService) {}

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    // this will be called when the cart is updated in the parent component
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);

    // reduce fucntion will add all the quantities of the items in the cart after the map  function is applied to each item to get the quantity of each item
  }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
