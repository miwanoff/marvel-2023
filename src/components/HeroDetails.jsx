import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchHero } from "../lib/utils";

const HeroDetails = () => {
  const [hero, setHero] = useState();
  let { id } = useParams(0);

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data[0]))
      .catch((err) => console.error(err));
  }, []);

  console.log("hero");
  console.log(hero);
  if (!hero) return;

  return <div>HeroDetails {id}</div>;
};

export default HeroDetails;
