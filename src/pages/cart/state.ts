import { atom } from "recoil";
import { dataCart } from "./dataCart";

export const updateStateCart = atom({
  key: 'updateStateCart',
  default: dataCart
})