import { useDispatch } from 'react-redux';
import { setSelectedCloth } from '../clothSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleSelectedCloth = () => {
    dispatch(setSelectedCloth(product));
  };

  return (
    <div
      className="flex flex-col aspect-3/4 px-3 cursor-pointer"
      onClick={handleSelectedCloth}
    >
      <div className="w-full mb-3 h-full flex justify-center">
        <img
          className="object-contain h-full"
          src={product.image}
          alt={product.title}
        />
      </div>
      <p className="font-bold text-sm line-clamp-2 leading-4 mb-1">
        {product.title}
      </p>
      <div className="flex flex-row text-xs justify-between">
        <p>{`$${product.price}`}</p>
        <p className="text-gray-600">{`★${product.rating.rate} (${product.rating.count})`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
