import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from '../pages/MainPage';
import ClothBottomSheet from '../components/ClothBottomSheet';
import CartPage from '../pages/CartPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>
    </Routes>
    <ClothBottomSheet />
  </BrowserRouter>
);

export default Router;
