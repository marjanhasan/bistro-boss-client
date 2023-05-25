import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navbar/NavBar";

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("/login");
  return (
    <div>
      {isLogin || <NavBar />}
      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
