import React, { useState } from "react";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  console.log(recipe);``

  const handleClick = () => {
    // Disable the button
    setButtonDisabled(true);
    toast("recipe is your favorite");
  };


  
  return (
    <div>
      {/* <h1> {recipe.ingredients[1]}</h1> */}

      <div className="mt-10">
        <div className="card flex flex-wrap card-side bg-base-100 shadow-xl items-center ">
          <figure className="sm:w-full md:w-4/12 h-96 mx-auto ">
            <img src={recipe.picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <div>
              <div>
                <h1 className="mb-5 text-2xl bg-blue-600 font-bold  text-white w-72 p-2 rounded-lg mx-auto">
                  {recipe.recipe_name}{" "}
                </h1>

                <div className="flex sm:flex-row-reverse md:flex-nowrap sm:flex-wrap gap-20  sm:w-full md:w-9/12  mx-auto ">
                  <div className="">
                    <div class="w-full mx-auto   max-h-96 sm:flex-row-reverse  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-100 dark:border-gray-100">
                      <h5 class="mb-4 text-xl font-medium text-white-500 dark:text-white-400">
                        COOKING METHOD
                      </h5>
                      <div class="flex items-baseline text-white-900 dark:text-blue-600">
                        <span class="text-3xl font-semibold">💙$</span>
                        <span class="text-5xl font-extrabold tracking-tight">
                          {recipe.rating}
                        </span>
                        <span class="ml-1 text-xl font-normal text-white-500 dark:text-white-400">
                          /Rating
                        </span>
                      </div>

                      <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                          <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Check icon</title>
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="text-base font-normal leading-tight text-white-500 dark:text-white-400">
                            {recipe.cooking_method?.slice(0, 250)}
                          </span>
                        </li>
                      </ul>
                      <button
                        onClick={handleClick}
                        disabled={buttonDisabled}
                        type="button"
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                          buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        Choose Favourite
                      </button>
                    </div>
                  </div>
                  {/* ------- */}
                  <div className=" flex ">
                    <div class="max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black">
                          INGREDIENT{" "}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-black">
                        {recipe.ingredients.slice(0, 50)}
                      </p>
                      <a
                        href="#"
                        class="inline-flex items-center text-blue-600 hover:underline"
                      >
                        See our guideline
                        <svg
                          class="w-5 h-5 ml-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
