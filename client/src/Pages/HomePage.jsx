import React from "react";
import Nav from "../components/utils/Nav";
import FilterCard from "../components/utils/FilterCard";
import JobCard from "../components/utils/JobCard";

function HomePage() {
  return (
    <div>
      <Nav />
      <FilterCard />
      <JobCard />
    </div>
  );
}

export default HomePage;
