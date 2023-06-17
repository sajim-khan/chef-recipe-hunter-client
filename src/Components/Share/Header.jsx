import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [activeNav, setActiveNav] = useState("");

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  onClick={() => setActiveNav("/")}
                  className={
                    activeNav === "/" ? "font-bold  text-primary" : "font-bold"
                  }
                >
                  HOME{" "}
                </Link>
              </li>
              <li tabIndex={0}>
                <Link
                  onClick={() => setActiveNav("/blog")}
                  className={
                    activeNav === "/blog"
                      ? "font-bold  text-primary"
                      : "font-bold justify-between "
                  }
                >
                  BLOG
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl font-extrabold ">
            {" "}
            <span className="text-indigo-600"> FOOD</span>{" "}
            <span className="text-red-500"> BOOK</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                onClick={() => setActiveNav("/")}
                className={
                  activeNav === "/" ? "font-bold  text-primary" : "font-bold"
                }
              >
                HOME{" "}
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                to="/blog"
                onClick={() => setActiveNav("/blog")}
                className={
                  activeNav === "/blog"
                    ? "font-bold  text-primary"
                    : "font-bold justify-between "
                }
              >
                BLOG
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* <p className="font-bold mx-3"> {user?.email} </p> */}

          {user ? (
            <>
              <div>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <button
                className="btn btn-sm bg-blue-600 mx-3"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="btn btn-sm bg-blue-600">
              {" "}
              <Link to="/login">Login</Link>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
