import "./header.scss";
import React, { useState, } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Forum = () => {
  const [open, setOpen] = useState(false);
  const [routes,] = useState([
    {
      name: "Books",
      route: "/",
      icon: `<i className="hidden md:inline fas fa-book text-white"></i>`,
    },
    {
      name: "Characters",
      route: "/characters",
      icon: `<i className="hidden md:inline fas fa-graduation-cap text-white"></i>`,
    },
  ]);


  const toggle = () => {
    setOpen(!open);
  };


  return (
    <div>
      <div
        className="w-full authenticated__header fixed z-10 bg-white py-6 shadow"
        id=""
      >
        <nav className="boxed__container w-full z-50  flex items-center justify-between flex-wrap py-2 ">
          <div className="flex items-center flex-no-shrink text-white ">
            <Link to="/">
              <div className="flex items-center flex-no-shrink text-black ">
                <p className="link__text">
                  TopMama
                </p>
              </div>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggle}
              className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              open
                ? "block w-full flex-grow lg:flex sm:items-center lg:w-auto"
                : "hidden w-full flex-grow lg:flex sm:items-center lg:w-auto"
            }
          >
            {/* <div className=""> */}
            <div className="text-sm lg:flex-grow"></div>
            {/* <div> */}
            {routes.map((route, index) => (
              <main key={index}>

                <Link
                  to={route.route}
                  className="link__text block paragraph ml-1 lg:inline-block mt-4 lg:mt-0 mr-6"
                >
                  {route.name}
                </Link>
              </main>
            ))}
            {/* {token ? (
              <div className="relative inline-block text-left">
                <div>
                  <main
                    type="button"
                    className="flex justify-center w-full rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {user && user.profile_image ? (
                      <img
                        src={user.profile_image}
                        alt="User Profile Picture"
                        className="rounded-full mx-auto h-12 w-12 "
                      />
                    ) : (
                      <p className="text-center">
                        <i className="fas fa-3x text-white fa-user-circle text-center mx-auto"></i>
                      </p>
                    )}
                    <svg
                      onClick={toggleDropDown}
                      className="-mr-1 ml-1 h-5 w-5 mt-3 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#fff"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </main>
                </div>

                {openDropDown ? (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div className="py-1" role="none">
                      <Link
                        to="/dashboard"
                        className="text-gray-700 block px-4 py-2 text-sm"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/account"
                        className="text-gray-700 block px-4 py-2 text-sm"
                      >
                        Account
                      </Link>
                      <p
                        onClick={logOut}
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <StyledButton
                onClick={() => {
                  handleClick("/login");
                }}
                backgroundColor="#fff"
                color="#286cff"
              >
                Login
              </StyledButton>
            )} */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Forum);
