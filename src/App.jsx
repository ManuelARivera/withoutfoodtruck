import { useState } from "react";
import "./App.css";
import { Stack, Autocomplete, TextField, Tooltip } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';

const FoodTruckCard = ({ foodTruck }) => {
  const { name, image, description, url } = foodTruck;

  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="food-truck-card" onClick={handleCardClick}>
      <img src={image} alt={name} className="food-truck-card__image" />
      <div className="food-truck-card__overlay">
        <span className="food-truck-card__overlay-text">Ver menú</span>
      </div>
      <h3 className="food-truck-card__name">{name}</h3>
      <p className="food-truck-card__description">{description}</p>
    </div>
  );
};

const App = () => {
  const [selectedAddress, setSelectedAddress] = useState('');

  const foodTrucks = {
    "Los Jardines del Norte": {
      latitude: "18.48296,-69.95366",
      trucks: [
        {
          name: "Tasty Bites",
          image: "https://via.placeholder.com/150",
          description: "Delicious street food with a variety of options.",
          url: "https://tastybitesmenu.com",
        },
        {
          name: "Street Delights",
          image: "https://via.placeholder.com/150",
          description: "Fresh and tasty dishes prepared daily.",
          url: "https://streetdelights.com",
        },
        {
          name: "Grill Master",
          image: "https://via.placeholder.com/150",
          description: "The best grilled food in town.",
          url: "https://grillmasterbbq.com",
        },
        {
          name: "Veggie Paradise",
          image: "https://via.placeholder.com/150",
          description: "A haven for vegetarians and vegans.",
          url: "https://veggieparadise.com",
        },
        {
          name: "Sweet Tooth",
          image: "https://via.placeholder.com/150",
          description: "Desserts and treats to satisfy your cravings.",
          url: "https://sweettoothdesserts.com",
        },
      ],
    },
    "Los Rios": {
      latitude: "18.492093,-69.965104",
      trucks: [
        {
          name: "Urban Eats",
          image: "https://via.placeholder.com/150",
          description: "City-inspired flavors for every taste.",
          url: "https://urbaneats.com",
        },
        {
          name: "Nom Nom Bowls",
          image: "https://via.placeholder.com/150",
          description: "Bowls packed with flavors from around the world.",
          url: "https://nomnombowls.com",
        },
        {
          name: "BBQ Bliss",
          image: "https://via.placeholder.com/150",
          description: "Smoky and savory BBQ delights.",
          url: "https://bbqbliss.com",
        },
        {
          name: "Sushi on Wheels",
          image: "https://via.placeholder.com/150",
          description: "Fresh sushi made on the go.",
          url: "https://sushionwheels.com",
        },
        {
          name: "Crepe Corner",
          image: "https://via.placeholder.com/150",
          description: "Savory and sweet crepes to brighten your day.",
          url: "https://crepecorner.com",
        },
      ],
    },
  };

  const filteredFoodTrucks = selectedAddress
    ? foodTrucks[selectedAddress]?.trucks || [] // Camiones en la dirección seleccionada o vacío
    : Object.values(foodTrucks).flatMap((location) => location.trucks); // Todos los camiones combinados

  const handlePlaceClick = () => {
    const destination = foodTrucks[selectedAddress]?.latitude || "18.48296,-69.95366";
    const googleMapsUrl = `https://www.google.com/maps?q=${destination}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app__header">WithoutFoodTruck</header>

      {/* Search Bar */}
      <div className="app__search-bar">
        <Stack spacing={1} sx={{ width: 300 }} className="app__search-stack">
          <Autocomplete
            options={Object.keys(foodTrucks)} // Usar las claves del objeto como opciones
            onChange={(event, newValue) => setSelectedAddress(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Select Address" variant="standard" />
            )}
          />
        </Stack>
        <div
          className="app__place-icon"
          onClick={handlePlaceClick}
          style={{ cursor: "pointer" }}
        >
          <Tooltip title="Ubicación" arrow>
            <PlaceIcon />
          </Tooltip>
        </div>
      </div>

      {/* Body */}
      <main className="app__body">
        {/* Renderizar camiones filtrados */}
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

