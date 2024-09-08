

const FoodCard = ({item}) => {
    const { name, recipe, category, price, image } = item
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image} />
        </figure>
        <p className="bg-gray-600 text-white absolute right-0 rounded-full px-3 mr-5 mt-5 ">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;