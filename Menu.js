import React from 'react';
import MenuItem from './MenuItem';

function Menu() {
  // Fetch menu items from backend and map to MenuItem components
  return (
    <div>
      {/* Map through menu items and render MenuItem components */}
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}

export default Menu;