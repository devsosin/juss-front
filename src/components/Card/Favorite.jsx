import React from "react";

import { FaStar } from "react-icons/fa";

const Favorite = ({ id, isFavorite }) => {
  // onclick -> add/remove favorite
  // isFavorite
  return (
    <div>
      <FaStar color={isFavorite ? "#5C89FF" : "#787878"} size={12} />
    </div>
  );
};

export default Favorite;
