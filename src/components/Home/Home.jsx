import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <div className="home-container">
        <h1>Select Book</h1>

        <div className="home-box">
          <a href="/firstbook">Mafaheem Book 1</a>
        </div>

        <div className="home-box">
          <a href="/secondbook">Mafaheem Book 2</a>
        </div>

        <div className="home-box">
          <a href="/thirdbook">Mafaheem Book 3</a>
        </div>
      </div>

      <div className="home-container">
        <h1>Recorded Lectures</h1>

        <div className="home-box">
          <a href="/firstbooklectures">Mafaheem Book 1</a>
        </div>

        <div className="home-box">
          <a href="/secondbooklectures">Mafaheem Book 2</a>
        </div>

        <div className="home-box">
          <a href="/thirdbooklectures">Mafaheem Book 3</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
