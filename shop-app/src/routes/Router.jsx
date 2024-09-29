import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage';
import ClothBottomSheet from '../components/ClothBottomSheet';
import CartPage from '../pages/CartPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
    <ClothBottomSheet />
  </BrowserRouter>
);

export default Router;
