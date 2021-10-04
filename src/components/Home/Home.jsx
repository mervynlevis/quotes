import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="homeOptions">
        <a href="/kanye">
          {" "}
          <div className="homeLeft"></div>
        </a>

        <a href="/swanson">
          {" "}
          <div className="homeRight"></div>
        </a>
      </div>
    </div>
  );
}

export default Home;
