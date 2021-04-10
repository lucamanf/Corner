import { useState } from "react";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";

const Nav = ({ auth: { isAuthenticated }, logout }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authLinks = (
    <>
      <div className="flex items-center justify-center space-x-8 lg:flex">
        <Link to="/projects">
          <h1 className="flex flex-row items-center justify-center text-lg text-white">
            All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </h1>
        </Link>
        <Link to="/dashboard">
          <h1 className="flex flex-row items-center justify-center text-lg text-white">
            Dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </h1>
        </Link>
      </div>
      <div className="flex items-end justify-end ">
        <div className="px-4 ">
          <Link to="/dashboard">
            <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Inserisci
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div>
          <Link onClick={logout} to="#!">
            <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Logout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );

  const guestLinks = (
    <>
      <div className="flex items-center justify-center space-x-8 lg:flex">
        <Link to="/projects">
          <h1 className="flex flex-row items-center justify-center text-lg text-white">
            All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </h1>
        </Link>
      </div>
      <div className="flex items-end justify-end ">
        <Link to="/login">
          <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );

  return (
    <div class="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <h1>
            <Link to="/">
              <i className="inline-flex items-center lg:mx-auto" />
              <h1 className="inline-flex items-center font-mono text-lg text-white lg:mx-auto">
                Corner's Projects
              </h1>
            </Link>
          </h1>
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
