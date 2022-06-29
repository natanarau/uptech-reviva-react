import { useContext } from "react";
import { ContextDataCart } from "context/ContextDataCart";

export const useContextDataCart = () => {
  const context = useContext(ContextDataCart);
  return context;
}
