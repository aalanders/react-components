import React from "react";
import "./CarouselCard.css";

export default function Card({ card }) {
  const {
    first_name,
    last_name,
    bio: { pic, credentials },
    rating,
  } = card;

  return (
    <div className="card">
      <img className="card__img" alt="img" src={pic} />
      <h2>
        {credentials === "MD" ? "Dr." : ""} {first_name} {last_name}
      </h2>
      Rating: {rating}/5
    </div>
  );
}
