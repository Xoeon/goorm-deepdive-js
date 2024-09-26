import { Outlet } from 'react-router-dom';
import TopNavbar from './TopNavbar';

const MainLayout = () => {
  return (
    <div className="bg-gray-50">
      <div className="w-full flex flex-col max-w-[400px] mx-auto h-full border-x bg-white pb-8">
        <TopNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
