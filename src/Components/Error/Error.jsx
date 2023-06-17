import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div id="error-page">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_cr9slsdh.json"
          style={{ height: "500px", width: "800px" }}
        ></Player>

        <h1 className="text-red-700 font-extrabold text-3xl">
          {" "}
          <Link to="/"> BACK HOME </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Error;
