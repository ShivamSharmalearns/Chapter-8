import { useEffect, useState } from "react"; // hooks
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../Utils.js/contents";

const ResaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=393840&catalog_qa=undefined"
    );
    const json = await data.json();
    console.log(json.data); // Log to verify structure
    setResInfo(json.data);
  };

  if (resInfo == null) return <ShimmerCard />;

  // Extracting restaurant details
  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card?.card?.info || {};

  //Items in menu
  const menuItems =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(menuItems);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((itemCards, index) => (
          <li key={index}>{itemCards?.card?.info?.name || "Unknown Item"}</li>
        ))}
        {/* <li>{menuItems[1].card.info.name}</li>
        <li>{menuItems[2].card.info.name}</li>
        <li>{menuItems[3].card.info.name}</li>
        <li>{menuItems[4].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default ResaurantMenu;
