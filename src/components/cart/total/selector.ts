import { selector } from "recoil";
import { updateQuantityProductCart } from "../state";

export const stateUpdate = selector({
  key: 'stateUpdate',
  get: ({get}) => {
    const state = get(updateQuantityProductCart)
    return state
  }
})