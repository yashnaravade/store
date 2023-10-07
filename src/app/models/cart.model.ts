export interface CartItem {

  id: number;
  product: string;
  name: string;
  quantity: number;
  price: number;

}

export interface Cart {
  
  items: Array<CartItem>;
}
