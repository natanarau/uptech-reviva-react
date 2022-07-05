import { createContext, ReactNode, useState, useEffect } from "react";
import { ProductTypes } from "types";
import { useUpdateEffect } from 'react-use';

interface ContextDataCartProviderProps {
  dataCartValue: ProductTypes[];
  setDataCartValue: React.Dispatch<React.SetStateAction<any>>;
}

interface ChildrenProps {
  children: ReactNode
}

export const ContextDataCart = createContext({} as ContextDataCartProviderProps);

export const ContextDataCartProvider = ({children}:ChildrenProps) => {
  const [dataCartValue, setDataCartValue] = useState([]);

  useUpdateEffect(() => {
    localStorage.setItem('cart', JSON.stringify(dataCartValue))
  }, [dataCartValue])
 
  useEffect(() => {
    const storage = localStorage.getItem('cart')
    const dataLocalStorage = storage && JSON.parse(storage)
    setDataCartValue(dataLocalStorage)
  }, [])
  
  return (
    <ContextDataCart.Provider value={{dataCartValue, setDataCartValue}}>
      {children}
    </ContextDataCart.Provider>
  );
};