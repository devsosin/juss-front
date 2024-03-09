import axios from "axios";
import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

const Favorite = ({ id, isFavorite }) => {
  const [fav, setFav] = useState(isFavorite);
  const toggleFavorite = (id) => {
    axios({
      url: "http://localhost:8080/api/v1/favorite/" + id,
      method: "put",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => setFav(!fav))
      .catch((e) => {
        alert("오류가 발생했습니다.");
      });
  };

  return (
    <div onClick={() => toggleFavorite(id)}>
      <FaStar color={fav ? "#5C89FF" : "#787878"} size={12} />
    </div>
  );
};

export default Favorite;
