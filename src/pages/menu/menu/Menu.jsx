import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} />
      {/* main cover  */}
      <SectionTitle subHeading={"Don't Miss"} heading={"today's offer"} />
      {/* offered manu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items  */}
      <MenuCategory items={desserts} title={"desserts"} img={dessertImg} />
      {/* pizza menu items  */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} />
      {/* pizza menu items  */}
      <MenuCategory items={salad} title={"salads"} img={saladImg} />
      {/* pizza menu items  */}
      <MenuCategory items={soup} title={"soups"} img={soupImg} />
    </div>
  );
};

export default Menu;
