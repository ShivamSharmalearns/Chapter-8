import { CDN_URL } from "../Utils.js/contents";

const RestaurantCard = ({ resData }) => {
    const {
      cloudinaryImageId,
      name,
      cuisines,
      area,
      costForTwoString,
      avgRating,
      slaString,
    } = resData;
  
    return (
      <div className="card">
        <img className="res-logo" 
        src={CDN_URL + cloudinaryImageId} alt={name} />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{slaString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };

  export default RestaurantCard;
  
