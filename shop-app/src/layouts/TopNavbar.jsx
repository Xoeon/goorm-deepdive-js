import { NavLink } from 'react-router-dom';

const TopNavbar = () => {
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
      <div className="flex">
        <NavLink to="/cart">
          <img className="w-6 cursor-pointer" src={'/cart2.svg'} alt="cart" />
        </NavLink>
        <NavLink>
          <img
            className="w-6 ml-2 cursor-pointer"
            src={'/profile.svg'}
            alt="profile"
          />
        </NavLink>
        <NavLink>
          <img
            className="w-6 ml-1 cursor-pointer"
            src={'/logout.svg'}
            alt="logout"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default TopNavbar;
