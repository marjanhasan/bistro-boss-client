import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 bg-fixed">
      <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 18, 2027</p>
          <p className="uppercase">where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            vero in veniam qui eaque, aliquid reprehenderit possimus ipsa? Quam
            ipsam molestias expedita. Vero, repellat? Nobis voluptatum qui
            nostrum obcaecati rem, ipsa id porro ducimus. Porro quaerat animi
            ducimus quae illo doloribus voluptatibus ea sit, eligendi ullam
            praesentium repellendus quibusdam nostrum!
          </p>
          <button className="btn btn-outline border-0 mt-4 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
