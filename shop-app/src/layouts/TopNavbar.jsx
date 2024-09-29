import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/authContext';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import LogoutModal from '../components/LogoutModal';
import toast from 'react-hot-toast';

const TopNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useAuth();
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
        <NavLink to="/cart">
          <img className="w-6 cursor-pointer" src={'/cart2.svg'} alt="cart" />
        </NavLink>
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
