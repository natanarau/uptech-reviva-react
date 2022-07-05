import React from "react";
import { ProductTypes } from 'types';

export default function useAddCart() {
  const [dataCart, setDataCart] = React.useState<any>([]);
  const [errorCart, setErrorCart] = React.useState<string>('');

  const requestCart =  async (url: string, option: any) => {
    try {
      const response = await fetch(url, option);
      const json = await response.json();
      setDataCart(json);      
    } catch (erro) {
      setErrorCart('Algo deu errado, tente novamente em alguns minutos.');
    }
  }

  return { dataCart, errorCart, requestCart };
};