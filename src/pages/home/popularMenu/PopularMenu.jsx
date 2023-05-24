import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle heading="from our menu" subHeading="Popular Items" />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className=" btn btn-outline border-0 mt-4 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
