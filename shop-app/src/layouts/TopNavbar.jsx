import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/authContext';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import LogoutModal from '../components/LogoutModal';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const TopNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const cartItems = useSelector((state) => state.cart.items);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCartClick = () => {
    if (currentUser) {
      navigate('/cart');
    } else {
      toast.error('로그인이 필요합니다.');
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Logged out successfully');
      toast.success('로그아웃되었습니다.');

      setIsModalOpen(false);

      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="flex sticky top-0 p-3 bg-white justify-between items-center">
      <NavLink to="/">
        <img
          className="w-16 cursor-pointer"
          onClick={() => null}
          src="/goorm.svg"
          alt="logo"
        />
      </NavLink>
      <div className="flex gap-2">
        <button className="relative" onClick={handleCartClick}>
          <img className="w-6 cursor-pointer" src={'/cart.svg'} alt="cart" />
          {itemCount > 0 && currentUser && (
            <span className="absolute top-[-5px] right-[-7px] bg-gray-600 text-white text-[8px] rounded-full h-3 w-3 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
        <NavLink to={!currentUser ? '/login' : '#'}>
          <img
            className="w-6 cursor-pointer"
            src={currentUser ? '/logout.svg' : '/login.svg'}
            alt={currentUser ? 'logout' : 'login'}
            onClick={currentUser ? () => setIsModalOpen(true) : null}
          />
        </NavLink>
        <LogoutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleLogout}
        />
      </div>
    </header>
  );
};

export default TopNavbar;
