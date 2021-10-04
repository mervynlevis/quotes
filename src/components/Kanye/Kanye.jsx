import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

import "./kanyeStyles.css";

function Kanye() {
  const [kanyeQuote, setKanyeQuote] = useState("");

  let date = new Date();

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { weekday: "long" });

  let today =
    day + " " + date.getDate() + " " + month + " " + date.getFullYear();

  useEffect(() => {
    axios.get(`https://api.kanye.rest`).then((quote) => {
      setKanyeQuote(quote.data.quote);
    });
  }, []);

  const getQuote = (event) => {
    event.preventDefault();
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((quote) => {
        setKanyeQuote(quote.quote);
      });
  };

  return (
    <div className="kanye card-content">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Kanye quote of the day</h2>
          <h3 className="card-subtitle mb-2 text-muted date-text">{today}</h3>
          <p>{kanyeQuote}</p>
          <Button onClick={getQuote} className="btn">
            <RefreshIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

// href="/quotes/kanye"

export default Kanye;
