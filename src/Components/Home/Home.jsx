import React from "react";
import HomeBanner from "./HomeBanner";
import Chefs from "./ChefSection/Chefs";
import RecepeCategory from "./ChefSection/Recipies/RecepeCategory";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <div className="container mx-auto">
        <RecepeCategory />
        <Chefs></Chefs>
        <About />
      </div>
    </div>
  );
};

export default Home;
