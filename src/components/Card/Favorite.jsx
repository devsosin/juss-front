import React from "react";

import { FaStar } from "react-icons/fa";

const Favorite = ({ id }) => {
  // onclick -> add/remove favorite
  // isFavorite
  return (
    <div>
      <FaStar color="#787878" size={12} />
    </div>
  );
};

export default Favorite;
