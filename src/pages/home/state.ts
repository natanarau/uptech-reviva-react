import { atom } from "recoil";
import { data } from "./data";

export const stateProducts = atom({
  key: 'stateProducts',
  default: data
})