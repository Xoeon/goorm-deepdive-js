import { useQuery } from 'react-query';
import ProductCard from '../components/ProductCard';
import ProductCategory from '../components/ProductCategory';
import fetchProducts from '../apis/fetchProducts';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);
  const [selectedCategory, setSelectedCategory] = useState('all clothing');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 48);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category.value);
  };

  return (
    <>
      <nav
        className={`sticky top-[48px] bg-white ${
          isSticky && 'border-b border-gray-300'
        }`}
      >
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
