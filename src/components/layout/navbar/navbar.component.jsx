import { useState } from "react";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import AllProjects from "./standard/allprojects.component";
import Dashboard from "./standard/dashboard.component";
import CreateButton from "./standard/create-project.button.component";
import LogoutButton from "./standard/loguot.button.component";
import CornerButton from "./hamburger/corner.button.hamburger.component.jsx";
import AllProjectsHamburger from "./hamburger/allprojects.hamburger.component";
import DashboardHamburger from "./hamburger/dashboard.hamburger.component";
import LoginButton from "./standard/login.button.component";
import CornerHamburgerButton from "./hamburger/corner.button.hamburger.component.jsx";
import LoginButtonHamburger from "./hamburger/login.button.hamburger.component";
import CornerHomeButton from "./standard/corner.homebutton.component";
import CreateProjetHamburger from "./hamburger/create-project.hamburger.component";
import HamburgerSVG from "./svg/hamburger/hamburger.svg";
import CrossSVG from "./svg/hamburger/cross.svg";

const Nav = ({ auth: { isAuthenticated }, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authLinks = (
    <>
      <div className="items-center justify-center hidden lg:block">
        <AllProjects />
        <Dashboard />
      </div>
      <div className="items-center justify-center hidden lg:block">
        <CreateButton />

        <Link onClick={logout} to="#!">
          <LogoutButton />
        </Link>
      </div>

      <div class="flex items-center justify-end visible lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsMenuOpen(true)}
        >
          <HamburgerSVG />
        </button>
        {isMenuOpen && (
          <div class="absolute menuOpened top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <CornerButton />
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CrossSVG />
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <AllProjectsHamburger />
                  </li>
                  <li>
                    <DashboardHamburger />
                  </li>

                  <li>
                    <div className="grid justify-between grid-cols-2 gap-2.5">
                      <CreateProjetHamburger />
                      <Link
                        onClick={logout}
                        to="/home"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        <button className="items-center justify-center w-full h-12 font-medium tracking-wide text-white transition duration-200 bg-red-400 rounded shadow-md hover:bg-red-700 focus:shadow-outline focus:outline-none">
                          Logout
                        </button>
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );

  const guestLinks = (
    <>
      <div className="flex flex-wrap items-center justify-center hidden space-x-8 lg:block">
        <AllProjects />
      </div>

      <div className="flex items-end justify-end hidden lg:block">
        <LoginButton />
      </div>

      <div className="flex items-end justify-end visible lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsMenuOpen(true)}
        >
          <HamburgerSVG />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full menuOpened">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <CornerHamburgerButton />
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CrossSVG />
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <AllProjectsHamburger />
                  </li>
                  <li>
                    <LoginButtonHamburger />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div class="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
          <CornerHomeButton />
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Nav);
