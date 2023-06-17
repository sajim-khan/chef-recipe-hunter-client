import React, { useEffect, useState } from "react";
import Chef from "./Chef";

const Chefs = () => {
  const [chefs, setChef] = useState();
  // console.log(chefs);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-psi-six.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);

  // const chefs = useLoaderData();
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10   sm:w-full md:w-10/12  mx-auto  mt-40">
        {chefs?.map((chef) => (
          <Chef chef={chef} key={chef._id}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
