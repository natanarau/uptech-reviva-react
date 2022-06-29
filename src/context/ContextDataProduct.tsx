import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductTypes, dataProduct } from "../data/dataProduct";

interface ContextDataProductProviderProps {
  dataProductValue: ProductTypes[];
  setDataProductValue: React.Dispatch<React.SetStateAction<ProductTypes[]>>;
}

interface ChildrenProps {
  children: ReactNode
}

export const ContextDataProduct = createContext({} as ContextDataProductProviderProps);

export const ContextDataProductProvider = ({children}:ChildrenProps) => {
  const [dataProductValue, setDataProductValue] = useState(dataProduct);
  
  useEffect(() => {
    setDataProductValue(dataProduct);
  }, []);

  return (
    <ContextDataProduct.Provider value={{dataProductValue, setDataProductValue}}>
      {children}
    </ContextDataProduct.Provider>
  );
};