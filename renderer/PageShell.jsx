import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageContextProvider } from "./usePageContext";
// import { Link } from "./Link";
import { childrenPropType } from "./PropTypeValues";
import "./index.css";
import logo from "/logo.svg";
import { BiSolidDashboard } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";



export { PageShell };

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
function PageShell({ pageContext, children }) {
  const [menu, setMenu] = useState(false)

  
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
              <div className="w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                  href="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img src={logo} className="h-14" alt="Scale Logo" />
                </a>
                <button
                  type="button"
                  onClick={() => setMenu(prevState => !prevState)}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
                <div
                  className={`${menu ? '' : 'hidden'} w-full md:block md:w-auto`}
                >
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a
                        href="/dashboard"
                        className={` block py-2 px-3 text-white bg-blue-700 rounded  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}
                        aria-current="page"
                      >
                        <div className="flex items-center gap-1  ">
                          <BiSolidDashboard size={25} color=""/>
                          <span className="text-sm md:text-base">Live Dashboard</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/recent_captured"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        <div className="flex items-center gap-1">
                          <TbTargetArrow size={25} />
                          <span className="text-sm md:text-base">Recent Captured</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/active_systems"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        <div className="flex items-center gap-1">
                          <MdLocationOn size={25} />
                          <span className="text-sm md:text-base">Active Systems</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/map"
                        className="block  py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        <div className="flex items-center gap-1">
                          <FaMapMarkedAlt size={25} />
                          <span className="text-sm md:text-base">Map Coverage</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Header>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

Layout.propTypes = {
  children: childrenPropType,
};
function Layout({ children }) {
  return <div className="">{children}</div>;
}

Header.propTypes = {
  children: childrenPropType,
};
function Header({ children }) {
  return (
    <div className="shadow-md">
      {children}
    </div>
  );
}

Content.propTypes = {
  children: childrenPropType,
};
function Content({ children }) {
  return <div>{children}</div>;
}
