import { BottomSheet } from 'react-spring-bottom-sheet';
import { setSelectedCloth } from '../clothSlice';
import { useDispatch, useSelector } from 'react-redux';

const ClothBottomSheet = () => {
  const selectedCloth = useSelector(
    (state) => state.selectedCloth.selectedCloth
  );
  const dispatch = useDispatch();

  const { title, price, image, description, category } = selectedCloth ?? {};

  return (
    <BottomSheet
      open={!!selectedCloth}
      onDismiss={() => dispatch(setSelectedCloth(null))}
    >
      <div className="p-8">
        <p className="text-gray-500 text-lg font-bold mb-3">{category}</p>
        <p className="font-extrabold text-3xl leading-7 mb-3">{title}</p>
        <p>{`$${price}`}</p>
        <div className="flex justify-center mt-3 mb-5">
          <img className="h-60 object-cover" src={image} alt={title} />
        </div>
        <p className="text-gray-500 leading-6 mb-5">{description}</p>
        <button className="w-full border-black border p-3 bg-black text-white">
          장바구니 담기
        </button>
      </div>
    </BottomSheet>
  );
};

export default ClothBottomSheet;
