import React from "react";
import { Link } from "react-router-dom";

// Assets
import "./index.css";
const LeagueCard = ({ data }) => {
  return (
    <Link className="card cursor yellow bg-black" to="/league">
      <div>
        <span>{data.title}</span>
      </div>
    </Link>
  );
};

export default LeagueCard;
