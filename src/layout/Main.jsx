import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navbar/NavBar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  return (
    <div>
      {noHeaderFooter || <NavBar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
