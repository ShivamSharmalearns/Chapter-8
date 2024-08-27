//importing Restaurant card in body but not in APP.JS bcz in the body only , we have to olace our cards
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; //named export
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //This is Local state variable which uses USESTATE()
  const [listOfRestaurant, setListOfRestaurant] = useState([]); //[] is used when there is no data as we removed restaurantList which was our mock data
  const [filteredRestaurant, setFilterdRestaurant] = useState([]); //for filtered restaurant that are fiktered after search
  const [searchText, setSearchText] = useState("");

  //useEffect
  useEffect(() => {
    fetchData();
    // console.log("useEffect called")
  }, []);
  // console.log("Body Rendered")
  //firstly "Body Rendered" will render in console then "useEffect called" will render.

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // Update the state with the new data after fetching from the API
    setListOfRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  /*
//conditional rendring
if(listOfRestaurant.length == 0){  //LOADING... when there is no data in listOfRestaurant(empty mock data)
  return <ShimmerCard/>
  //<h1>Loading...</h1>
} 
  else neeche wali return*/

  //merge above code - page 83
  //The line return listOfRestaurant.length == 0 ? <ShimmerCard/> : ( ... ) returns the <ShimmerCard /> component if listOfRestaurant is empty; otherwise, it returns else statement (neeche wali).
  //below is ternary operator and basically it is IF-ELSE statement short form
  //condition ? expressionIfTrue : expressionIfFalse
  return listOfRestaurant.length == 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          {/*The onChange event updates searchText as the user types, making the input box display the latest value. This keeps the input synced with the component's state in real-time. */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //searchText
              console.log(searchText);

              //maps, filter video on yt
              const filteredlist = listOfRestaurant.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()) //cnot case sensitive now
                //filter those restaurant jo INCLUDES search kia hua text i.e. .includes (searchText)
              );
              //When you call setListOfRestaurant(filteredRestaurant), you replace the current value of listOfRestaurant with the filteredRestaurant array.
              //means - on clicking search and typing it, setListofRestaurant updates the listofRestaurant(jo uper const[listofRestaurant , ...] mai hai) with the filteredRestaurant i.e. show only fitered list
              // setListOfRestaurant(filteredlist)
              setFilterdRestaurant(filteredlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            //setlistofrestaurant is used here to update the above list of retaurant which has data like dominos,kunnur etc
            //It is updating the FILTEREDLIST
            setListOfRestaurant(FilteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
