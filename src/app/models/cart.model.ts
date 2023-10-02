export interface CartItem {
  // This is an interface. It is a contract that defines the syntax that any entity must adhere to. In this case, the entity must be an object with the properties specified below. It is used to define custom data types. It is a TypeScript feature. It is used here to define the data type of the cart item. It is used in the cart service.
  product: string;
  name: string;
  quantity: number;
  price: number;
  // id: number;
}

export interface Cart {
  // This is an interface. It is a contract that defines the syntax that any entity must adhere to. In this case, the entity must be an object with the properties specified below. It is used to define custom data types. It is a TypeScript feature. It is used here to define the data type of the cart. It is used in the cart service.
  items: Array<CartItem>;
  //   total: number;
}
