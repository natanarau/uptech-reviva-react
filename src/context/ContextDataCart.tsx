import { createContext, ReactNode, useEffect, useState } from "react";
import { CartType, dataCart } from "../data/dataCart";

interface ContextDataCartProviderProps {
  dataCartValue: CartType[];
  setDataCartValue: React.Dispatch<React.SetStateAction<CartType[]>>;
}

interface ChildrenProps {
  children: ReactNode
}

export const ContextDataCart = createContext({} as ContextDataCartProviderProps);

export const ContextDataCartProvider = ({children}:ChildrenProps) => {
  const [dataCartValue, setDataCartValue] = useState(dataCart);
  
  useEffect(() => {
    setDataCartValue(dataCart);
  }, []);

  return (
    <ContextDataCart.Provider value={{dataCartValue, setDataCartValue}}>
      {children}
    </ContextDataCart.Provider>
  );
};