import React, { useState, useEffect } from "react";
import axios from "axios";
import RefreshIcon from "@material-ui/icons/Refresh";
import Button from "react-bootstrap/Button";
import "./swansonStyles.css";

function Swanson() {
  const [quote, setQuote] = useState("");

  let date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { weekday: "long" });
  let today =
    day + " " + date.getDate() + " " + month + " " + date.getFullYear();

  useEffect(() => {
    axios
      .get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
      .then((response) => {
        setQuote(response.data);
      });
  }, []);

  const getQuote = (event) => {
    event.preventDefault();
    axios
      .get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
      .then((response) => {
        setQuote(response.data);
      });
  };

  return (
    <div className="swanson card-content">
      <div className="swansonCard card">
        <div className="card-body">
          <h2 className="card-title">Swanson quote of the day</h2>
          <h3 className="card-subtitle mb-2 text-muted date-text">{today}</h3>
          <p>{quote}</p>
          <Button onClick={getQuote} className="btn">
            <RefreshIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Swanson;
