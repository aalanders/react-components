import React, { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import "./Carousel.css";

const MOCK = [
  {
    id: 1,
    first_name: "John",
    last_name: "Dorian",
    bio: {
      credentials: "MD",
      pic: "https://m.media-amazon.com/images/M/MV5BMTg3MDQzMTI1OF5BMl5BanBnXkFtZTYwMDM2MDM4._V1_FMjpg_UX360_.jpg",
      licenses: ["NY", "CA"],
    },
    rating: 5,
    status: "LIVE",
  },
  {
    id: 2,
    first_name: "Christopher",
    last_name: "Turk",
    bio: {
      credentials: "MD",
      pic: "https://m.media-amazon.com/images/M/MV5BODU5MDcxNTE3OV5BMl5BanBnXkFtZTgwMDQ3MDgzMjE@._V1_FMjpg_UX500_.jpg",
      licenses: ["CA"],
    },
    rating: 4,
    status: "LIVE",
  },
  {
    id: 3,
    first_name: "Elliot",
    last_name: "Reid",
    bio: {
      credentials: "MD",
      pic: "https://m.media-amazon.com/images/M/MV5BMTc5MDEzMzQ3MF5BMl5BanBnXkFtZTgwNzIzMzgzMjE@._V1_FMjpg_UX500_.jpg",
      licenses: ["UT"],
    },
    rating: 5,
    status: "LIVE",
  },
  {
    id: 4,
    first_name: "Perry",
    last_name: "Cox",
    bio: {
      credentials: "MD",
      pic: "https://m.media-amazon.com/images/M/MV5BMTcxNzI2NDk1MF5BMl5BanBnXkFtZTgwOTg5NTczMjE@._V1_FMjpg_UX500_.jpg",
      licenses: ["NY", "PA", "MD"],
    },
    rating: 2,
    status: "LIVE",
  },
  {
    id: 4,
    first_name: "Bob",
    last_name: "Kelso",
    bio: {
      credentials: "MD",
      pic: "https://m.media-amazon.com/images/M/MV5BMjIzMjkyNTQ3OV5BMl5BanBnXkFtZTgwNTg5NTczMjE@._V1_FMjpg_UX500_.jpg",
      licenses: [],
    },
    rating: null,
    status: "TERMED",
  },
  {
    id: 5,
    first_name: "Carla",
    last_name: "Espinosa",
    bio: {
      credentials: "FNP",
      pic: "https://m.media-amazon.com/images/M/MV5BMTAwOTQ5MzM0MzdeQTJeQWpwZ15BbWU4MDk3OTU3MzIx._V1_FMjpg_UX500_.jpg",
      licenses: ["CA"],
    },
    rating: 5,
    status: "LIVE",
  },
];

export default function Carousel() {
  const [cards, setCards] = useState([]);
  const [indexVisibleCards, setIndexVisibleCards] = useState(0);

  const filteredCards = (cards, index) => {
    return cards.slice(index, index + 3);
  };

  const visibleCards = filteredCards(cards, indexVisibleCards);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(
      //   `https://xeonxavyjpglosvu3jp4mbw3v40poufn.lambda-url.us-west-2.on.aws/`
      // );
      // const newData = await response.json();

      setCards(MOCK);
    };

    fetchData();
  }, [setCards]);

  return (
    <div className="carousel__container">
      <button
        type="button"
        title="button"
        onClick={() => setIndexVisibleCards(indexVisibleCards - 1)}
      >
        Previous
      </button>
      <div className="carousel">
        {visibleCards &&
          visibleCards.map((card, index) => (
            <CarouselCard key={index} card={card} />
          ))}
      </div>
      <button
        type="button"
        title="button"
        onClick={() => setIndexVisibleCards(indexVisibleCards + 1)}
      >
        Next
      </button>
    </div>
  );
}
