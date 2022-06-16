import { atom } from "recoil";
import { dataCart } from "../../pages/cart/dataCart";

export const updateQuantityProductCart = atom({
  key: 'updateQuantityProductCart',
  default: dataCart
})