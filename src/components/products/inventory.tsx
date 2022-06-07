import { data } from '../../pages/home/data'

export default function Inventory(idProduct: number) {
  data.find(e => {    
    if(e.id === idProduct) {
     // FAZER ESQUEMA DE ADICIONAR AO CARRINHO...
     console.log(`FAZER ESQUEMA PARA ADICIONAR PRODUTO DE ID ${e.id} AO CARRINHO NO LOCALSTORAGE`)
    }
  });
}