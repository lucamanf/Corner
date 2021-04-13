import { useState } from "react";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import AllProjects from "./allprojects.component";
import Dashboard from "./dashboard.component";
import CreateButton from "./create-project.button.component";
import LogoutButton from "./loguot.button.component";
import CornerButton from "./hamburger/corner.button.hamburger.component.jsx";
import AllProjectsHamburger from "./hamburger/allprojects.hamburger.component";
import DashboardHamburger from "./hamburger/dashboard.hamburger.component";
import LoginButton from "./login.button.component";
import CornerHamburgerButton from "./hamburger/corner.button.hamburger.component.jsx";
import LoginButtonHamburger from "./hamburger/login.button.hamburger.component";
import CornerHomeButton from "./corner.homebutton.component";

const Nav = ({ auth: { isAuthenticated }, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authLinks = (
    <>
      <div className="flex items-center justify-center invisible space-x-8 lg:visible">
        <AllProjects />
        <Dashboard />
      </div>
      <div className="flex items-end justify-end invisible lg:visible">
        <div className="px-4 ">
          <CreateButton />
        </div>
        <div>
          <Link onClick={logout} to="#!">
            <LogoutButton />
          </Link>
        </div>
      </div>

      <div class="flex items-center justify-end visible lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <CornerButton />
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <AllProjectsHamburger />
                  </li>
                  <li>
                    <DashboardHamburger />
                  </li>

                  <li>
                    <div className="flex grid flex-col grid-cols-2">
                      <Link
                        to="/create-project"
                        aria-label="create-project"
                        title="create-project"
                      >
                        <button className="inline-flex items-center justify-center h-12 px-6 mr-4 font-medium tracking-wide text-white transition duration-200 bg-blue-400 rounded shadow-md hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                          Inserisci
                        </button>
                      </Link>
                      <Link
                        onClick={logout}
                        to="/home"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-red-400 rounded shadow-md hover:bg-red-700 focus:shadow-outline focus:outline-none">
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
      <div className="flex flex-wrap items-center justify-center invisible space-x-8 lg:visible">
        <AllProjects />
      </div>

      <div className="flex items-end justify-end invisible lg:visible">
        <LoginButton />
      </div>

      <div className="flex items-end justify-end visible lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full">
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
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
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
        <div className="relative flex grid items-center grid-cols-4 lg:grid-cols-3">
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
