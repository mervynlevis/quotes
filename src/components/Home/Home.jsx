import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="homeOptions">
        <a href="/quotes/kanye">
          {" "}
          <div className="homeLeft"></div>
        </a>

        <a href="/quotes/swanson">
          {" "}
          <div className="homeRight"></div>
        </a>
      </div>
    </div>
  );
}

export default Home;
