import React, { useState } from "react";
import "./App.css";
import { Stack, Autocomplete, TextField, Tooltip } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';

const FoodTruckCard = ({ foodTruck }) => {
  const { name, image, description } = foodTruck;

  return (
    <div className="food-truck-card">
      <img src={image} alt={name} className="food-truck-card__image" />
      <h3 className="food-truck-card__name">{name}</h3>
      <p className="food-truck-card__description">{description}</p>
      <button className="food-truck-card__menu-button">View Menu</button>
    </div>
  );
};

const App = () => {
  const [selectedAddress, setSelectedAddress] = useState('');

  const foodTrucks = [
    {
      address: "Los Jardines del Norte",
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Tasty Bites",
      image: "https://via.placeholder.com/150",
      description: "Delicious street food with a variety of options.",
      menu: [
        { item: "Burger", price: "$5" },
        { item: "Fries", price: "$2" },
        { item: "Soda", price: "$1" },
      ],
    },
    {
      address: "Los Jardines del Norte",
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Street Delights",
      image: "https://via.placeholder.com/150",
      description: "Fresh and tasty dishes prepared daily.",
      menu: [
        { item: "Tacos", price: "$3" },
        { item: "Nachos", price: "$4" },
        { item: "Juice", price: "$2" },
      ],
    },
    {
      address: "Los Jardines del Norte",
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Grill Master",
      image: "https://via.placeholder.com/150",
      description: "The best grilled food in town.",
      menu: [
        { item: "Grilled Chicken", price: "$8" },
        { item: "BBQ Ribs", price: "$10" },
        { item: "Coleslaw", price: "$3" },
      ],
    },
    {
      address: "Los Jardines del Norte",
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Veggie Paradise",
      image: "https://via.placeholder.com/150",
      description: "A haven for vegetarians and vegans.",
      menu: [
        { item: "Veggie Wrap", price: "$7" },
        { item: "Quinoa Salad", price: "$6" },
        { item: "Smoothie", price: "$4" },
      ],
    },
    {
      address: "Los Jardines del Norte",
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "Sweet Tooth",
      image: "https://via.placeholder.com/150",
      description: "Desserts and treats to satisfy your cravings.",
      menu: [
        { item: "Cupcake", price: "$2" },
        { item: "Ice Cream", price: "$3" },
        { item: "Brownie", price: "$2.5" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Urban Eats",
      image: "https://via.placeholder.com/150",
      description: "City-inspired flavors for every taste.",
      menu: [
        { item: "Hot Dog", price: "$4" },
        { item: "Pretzel", price: "$3" },
        { item: "Lemonade", price: "$2" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Nom Nom Bowls",
      image: "https://via.placeholder.com/150",
      description: "Bowls packed with flavors from around the world.",
      menu: [
        { item: "Poke Bowl", price: "$10" },
        { item: "Rice Bowl", price: "$8" },
        { item: "Soup Bowl", price: "$6" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "BBQ Bliss",
      image: "https://via.placeholder.com/150",
      description: "Smoky and savory BBQ delights.",
      menu: [
        { item: "Pulled Pork", price: "$9" },
        { item: "Brisket", price: "$12" },
        { item: "Cornbread", price: "$3" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Sushi on Wheels",
      image: "https://via.placeholder.com/150",
      description: "Fresh sushi made on the go.",
      menu: [
        { item: "California Roll", price: "$8" },
        { item: "Spicy Tuna Roll", price: "$9" },
        { item: "Miso Soup", price: "$3" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Crepe Corner",
      image: "https://via.placeholder.com/150",
      description: "Savory and sweet crepes to brighten your day.",
      menu: [
        { item: "Nutella Crepe", price: "$6" },
        { item: "Ham & Cheese Crepe", price: "$7" },
        { item: "Fruit Crepe", price: "$5" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Crepe Corner",
      image: "https://via.placeholder.com/150",
      description: "Savory and sweet crepes to brighten your day.",
      menu: [
        { item: "Nutella Crepe", price: "$6" },
        { item: "Ham & Cheese Crepe", price: "$7" },
        { item: "Fruit Crepe", price: "$5" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Crepe Corner",
      image: "https://via.placeholder.com/150",
      description: "Savory and sweet crepes to brighten your day.",
      menu: [
        { item: "Nutella Crepe", price: "$6" },
        { item: "Ham & Cheese Crepe", price: "$7" },
        { item: "Fruit Crepe", price: "$5" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Crepe Corner",
      image: "https://via.placeholder.com/150",
      description: "Savory and sweet crepes to brighten your day.",
      menu: [
        { item: "Nutella Crepe", price: "$6" },
        { item: "Ham & Cheese Crepe", price: "$7" },
        { item: "Fruit Crepe", price: "$5" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Crepe Corner",
      image: "https://via.placeholder.com/150",
      description: "Savory and sweet crepes to brighten your day.",
      menu: [
        { item: "Nutella Crepe", price: "$6" },
        { item: "Ham & Cheese Crepe", price: "$7" },
        { item: "Fruit Crepe", price: "$5" },
      ],
    },
    {
      address: "Los Rios",
      placeId: "ChIJN2t_tDeuEmsRUsoyG83frY5",
      name: "Crepe Corner",
      image: "https://via.placeholder.com/150",
      description: "Savory and sweet crepes to brighten your day.",
      menu: [
        { item: "Nutella Crepe", price: "$6" },
        { item: "Ham & Cheese Crepe", price: "$7" },
        { item: "Fruit Crepe", price: "$5" },
      ],
    },

  ];

  const filteredFoodTrucks = selectedAddress
    ? foodTrucks.filter((truck) => truck.address === selectedAddress)
    : foodTrucks;




  const handlePlaceClick = () => {
    const destination = "place_id: ChIJx_BMbwCJr44ReOaLdqWsfV8"; // Replace with your actual destination
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app__header">
        WithoutFoodTruck
      </header>

      {/* Search Bar */}
      <div className="app__search-bar">
        <Stack spacing={1} sx={{ width: 300 }} className="app__search-stack">
          <Autocomplete
            options={Array.from(new Set(foodTrucks.map((truck) => truck.address)))}
            onChange={(event, newValue) => setSelectedAddress(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Select Address" variant="standard" />
            )}
          />
        </Stack>
        <div className="app__place-icon" onClick={handlePlaceClick} style={{ cursor: "pointer" }}>
          <Tooltip title="Ubicación" arrow>
            <PlaceIcon />
          </Tooltip>
        </div>
      </div>

      {/* Body */}
      <main className="app__body">
        {/* Example food truck cards */}
        {filteredFoodTrucks.map((truck, index) => (
          <FoodTruckCard key={index} foodTruck={truck} />
        ))}
      </main>

      {/* Footer */}
      <footer className="app__footer">
        &copy; 2025 WithoutFoodTruck. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

