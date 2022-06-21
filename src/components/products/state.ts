import { atom } from "recoil";

interface TypeDetailProduct {
  idProduct: number,
  nameProduct: string,
  quantityProduct: number,
  urlImg: string,
  altImg: string,
  valueProduct: string
}

export const setUpdateCart = atom({
  key: 'cart',
  default: 0
})
