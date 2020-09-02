import React, { useState, useEffect } from "react";

import CardList from "./../components/CardList.js";

const listURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

const PokeList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getListData = () => {
    console.log("fetching data");

    fetch(listURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      })
      .catch((errorMsg) => {
        let errorOutput = `Error: ${errorMsg}`;
        console.log(errorOutput);
        setError(errorOutput);
      });
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <div className="container">
      <div className="list">
        {data
          ? data.map((item) => <CardList key={item.name} data={item} />)
          : null}
        {error ? <div className="poke-error">{error}</div> : null}
      </div>
    </div>
  );
};

export default PokeList;
