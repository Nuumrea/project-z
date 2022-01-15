import React from "react";

// Component
import LeagueCard from "../components/home/LeagueCard/index";

// Assets
import LeagueData from "../assets/data/LeagueData";

const Home = () => {
  return (
    <>
      <div className="core-wrapper">
        {LeagueData.map((data, index) => {
          return <LeagueCard key={index} data={data} />;
        })}
      </div>
    </>
  );
};

export default Home;
