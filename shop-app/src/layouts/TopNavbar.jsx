import { NavLink, useNavigate } from 'react-router-dom';

const TopNavbar = () => {
  const navigate = useNavigate();

  return (
    <header className="flex p-4 justify-between items-center border-b-[1px] border-gray drop-shadow-sm">
      <NavLink to="/">
        <img
          className="w-16 cursor-pointer"
          onClick={() => null}
          src="/goorm.svg"
          alt="logo"
        />
      </NavLink>
      <div className="flex">
        <NavLink>
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
