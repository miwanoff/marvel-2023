import React, { useRef } from "react";
import fetchHeroes from "../lib/utils";


const SearchBar = ({ setter }) => {
  
  let input = useRef("");


  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;
    try {
      let heroes = await fetchHeroes(value);
      setter(heroes);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <form>
      <input type="text" placeholder="Search hero..." ref={input} />
      <button onClick={handleClick}>Search Hero</button>
    </form>
  );
};


export default SearchBar;

