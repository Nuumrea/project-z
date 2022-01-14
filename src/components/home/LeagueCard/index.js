import React from "react";

// Assets
import "./index.css";
const LeagueCard = ({ data }) => {
  return (
    <div className="card cursor">
      <span>{data.title}</span>
    </div>
  );
};

export default LeagueCard;
