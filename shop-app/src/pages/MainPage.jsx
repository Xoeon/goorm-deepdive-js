import { useQuery } from 'react-query';
import ProductCard from '../components/ProductCard';
import ProductCategory from '../components/ProductCategory';
import fetchProducts from '../apis/fetchProducts';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { initializeCart } from '../cartSlice';

const MainPage = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);
  const [selectedCategory, setSelectedCategory] = useState('all clothing');

  const userId = auth.currentUser?.uid;
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    if (userId) {
      dispatch(initializeCart({ userId }));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (location.state?.showToast) {
      toast('이미 로그인하셨습니다.');
    }
  }, [location]);

  const handleCategory = (category) => {
    setSelectedCategory(category.value);
  };

  return (
    <>
      <nav>
        <ProductCategory
          selectedCategory={selectedCategory}
          handleCategory={handleCategory}
        />
      </nav>
      <section className="grid grid-cols-2 gap-5">
        {data
          ?.filter((product) =>
            selectedCategory === 'all clothing'
              ? true
              : product.category === selectedCategory
          )
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </>
  );
};

export default MainPage;
