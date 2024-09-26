import { useQuery } from 'react-query';
import ProductCard from '../components/ProductCard';
import ProductCategory from '../components/ProductCategory';
import fetchProducts from '../apis/fetchProducts';
import { useState } from 'react';

const MainPage = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);
  const [selectedCategory, setSelectedCategory] = useState('all clothing');

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
