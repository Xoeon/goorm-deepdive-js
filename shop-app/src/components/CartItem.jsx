import { useDispatch } from 'react-redux';
import { updateItemQuantity, removeItemFromCart } from '../cartSlice';
import { useSwipeable } from 'react-swipeable';
import { useSpring, animated } from '@react-spring/web';

const CartItem = ({ item }) => {
  const [style, api] = useSpring(() => ({ x: 0, opacity: 1 }));

  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id, currentQuantity) => {
    dispatch(updateItemQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateItemQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const swipeHandlers = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.deltaX < 0) {
        api.start({ x: eventData.deltaX });
      }
    },
    onSwipedLeft: () => handleRemoveItem(item.id),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 5,
  });

  return (
    <animated.div {...swipeHandlers} style={style} className="flex px-3">
      <img
        className="w-24 h-24 object-contain"
        src={item.image}
        alt={item.title}
      />
      <div className="flex flex-col ml-3 mr-2 justify-center w-full leading-5">
        <p className="text-sm text-gray-500 font-semibold">{item.category}</p>
        <p className="font-semibold">{item.title}</p>
        <p className="text-sm">{`${item.price} x ${item.quantity} = $${(
          item.price * item.quantity
        ).toFixed(2)}`}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
          className="w-4 h-4 text-xs border border-black rounded-full"
        >
          +
        </button>
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="w-5 pt-1 text-center border-gray-400 outline-none"
        />
        <button
          onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
          className="w-4 h-4 text-xs border border-black rounded-full"
        >
          -
        </button>
      </div>
    </animated.div>
  );
};

export default CartItem;
