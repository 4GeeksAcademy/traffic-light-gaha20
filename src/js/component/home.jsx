import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Light from "./light";


//create your first component
const Home = () => {
  return (
		<div className="container text-center align-content-center justify-content-center p-5">
		  < Light/>
		  <div class="stick"></div>
      <div class="floor"></div>
    </div>
  );
};

export default Home
