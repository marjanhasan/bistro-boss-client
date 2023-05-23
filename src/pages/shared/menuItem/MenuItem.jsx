const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(image);
  return (
    <div className="flex space-x-2">
      <div
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] bg-gray-300"
      ></div>
      <div>
        <h3 className="uppercase">{name}-------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
