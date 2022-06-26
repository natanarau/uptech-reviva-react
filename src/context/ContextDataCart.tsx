import { createContext, ReactNode, useEffect, useState } from "react";
import { CartType, dataCart } from "../data/dataCart";

interface ContextDataCartProviderProps {
  dataCartState: CartType[];
  setDataCartState: React.Dispatch<React.SetStateAction<CartType[]>>;
}

export const ContextDataCart = createContext(
  {} as ContextDataCartProviderProps
);

export const ContextDataCartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dataCartState, setDataCartState] = useState(dataCart);
  
  const productLocal = localStorage.getItem('cart')

  if(!productLocal) {
    localStorage.setItem('cart', JSON.stringify(dataCartState))
  }

  useEffect(() => {
    setDataCartState(dataCart);
  }, []);

  return (
    <ContextDataCart.Provider
      value={{
        dataCartState,
        setDataCartState,
      }}
    >
      {children}
    </ContextDataCart.Provider>
  );
};