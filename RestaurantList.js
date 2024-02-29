import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList() {
  // Fetch restaurant data from backend and map to RestaurantCard components
  return (
    <div>
      {/* Map through restaurant data and render RestaurantCard components */}
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
}