import {  DetailsProducts } from 'pages/details';
import { Cart } from 'pages/cart';
import { Home } from 'pages/home';
import { Route, Routes } from 'react-router-dom';

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/detail/:id' element={<DetailsProducts />}/>
      </Routes>
    </>
  );
};
