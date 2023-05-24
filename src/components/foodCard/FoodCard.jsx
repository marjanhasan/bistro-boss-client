const FoodCard = ({ item }) => {
  const { name, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/src/assets/home/01.jpg" alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 mt-4 border-b-4">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
