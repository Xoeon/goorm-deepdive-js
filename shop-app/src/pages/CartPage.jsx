import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <main className="p-5">
      <header className="text-center font-bold text-xl mb-5">장바구니</header>
      {items.length > 0 ? (
        <>
          <article>
            {items.map((item) => (
              <ul key={item.id}>
                <CartItem item={item} />
                <hr className="my-5" />
              </ul>
            ))}
          </article>
          <section className="flex justify-end text-sm">{`Total : $${items
            .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
            .toFixed(2)}`}</section>
        </>
      ) : (
        <div className="flex justify-center h-[300px] items-center text-gray-400 text-sm">
          장바구니가 비어 있습니다.
        </div>
      )}
    </main>
  );
};

export default CartPage;
