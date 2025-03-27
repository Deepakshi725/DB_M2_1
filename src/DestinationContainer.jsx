//eslint-disable-next-line
import React, { useState } from "react";
import PropTypes from "prop-types";


// DestinationCard Component
const DestinationCard = ({ destination }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-4 max-w-sm">

<img
  src={destination.image}
  alt={destination.name}
  className="w-full max-w-[300px] h-32 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 mx-auto"
/>


      <div className="mt-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-500">{destination.location}</p>
        <p className="text-gray-700 mt-2">
          {showMore ? destination.description : `${destination.description.substring(0, 50)}...`}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-500 mt-2"
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
        <p className="text-lg font-semibold text-blue-600 mt-2">
          {destination.price}
        </p>
      </div>
    </div>
  );
};

// PropTypes validation
DestinationCard.propTypes = {
    destination: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };
  

// DestinationContainer Component
const DestinationContainer = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description: "Tropical paradise with beautiful beaches and vibrant culture",
      price: "$1,200",
    },
    {
      id: 2,
      name: "Paris",
      location: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "City of love, art, and exquisite cuisine",
      price: "$1,500",
    },
    {
      id: 3,
      name: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      description: "Stunning sunsets and white-washed architecture",
      price: "$1,800",
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      description: "Modern city with rich traditions and amazing food",
      price: "$2,000",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationContainer;
