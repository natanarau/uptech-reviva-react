import React from "react";
import { ProductTypes } from 'types';

export default function useFetch() {
  const [data, setData] = React.useState<ProductTypes[]>([]);
  const [error, setError] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>();

  const request =  async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (erro) {
      setError('Algo deu errado, tente novamente em alguns minutos.');
      setLoading(false);
    }
  }

  return { data, error, loading, request };
};