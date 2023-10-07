import { Component, OnInit } from "@angular/core";
import { CartService } from "./services/cart/cart.service";
import { Cart } from "./models/cart.model";

@Component({
  selector: "app-root",
  template: ` 
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet> `,
  styles: [],
})
export class AppComponent implements OnInit {
 ngOnInit(): void {
  this.cartService.cart.subscribe((cart) => (this.cart = cart));
 }
 constructor( private cartService: CartService) {}
 cart : Cart = { items: [] };
}
