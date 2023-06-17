import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const RecepeCategory = () => {
  const data = [
    {
      id: 1,
      img: "https://assets2.lottiefiles.com/packages/lf20_jmejybvu.json",
      name: "Delivery Food",
      available: "50+ Delivary Man Available",
    },
    {
      id: 2,
      img: "https://assets5.lottiefiles.com/packages/lf20_HXb1YUQVzS.json",
      name: " Experience Chef   ",
      available: "40 Chef Available",
    },
    {
      id: 3,
      img: "https://assets6.lottiefiles.com/packages/lf20_GUQObWT5Mw.json",
      name: "Good Food",
      available: "100+ Food Available",
    },
    {
      id: 4,
      img: "https://assets4.lottiefiles.com/packages/lf20_bqnjxnmy.json",
      name: "Good Resturent",
      available: "10 Resturent Available",
    },
  ];

  return (
    <div>
      <div>
        <div className="mt-24 text-center ">
          {" "}
          <h3 className="text-4xl text-red-600 font-bold">OUR SERVICE</h3>
          <p className="mt-4 font-bold text-gray-500">
            food, substance consisting essentially of protein, carbohydrate,
            fat, and other nutrients used in the body of an organism to sustain
            growth and vital processes and to
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-10">
          {data.map((d) => (
            <div key={d.id} className="">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
                <div className="flex flex-col items-center ">
                  <Player
                    className="w-10 h-10 mb-3 rounded-full "
                    autoplay
                    loop
                    src={d.img}
                    style={{ height: "200px", width: "200px" }}
                  ></Player>

                  <h5 className="mb-1 text-xl font-medium   text-red-500">
                    {d.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Total {d.available}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecepeCategory;
