import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <h1 className="hometitle">Welcome to Juicebox</h1>
        <h3 className="hometitle">
          Where the content is hot, and the juice stays cold
        </h3>
        <Link to="/posts">
          <div className="buttondiv">
            <button className="thirsty">Thirsty?</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
