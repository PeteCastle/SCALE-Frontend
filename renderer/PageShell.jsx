import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageContextProvider } from "./usePageContext";
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
  const [menu, setMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("text-blue-700");
      } else {
        link.classList.remove("text-blue-700");
      }
    });
  }, [currentPath]);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <nav className="container-fluid z-50 h-20 max-h-20 bg-amber-200  border-gray-200 ">
            <div className="max-w-screen- flex flex-wrap items-center justify-between mx-auto p-4">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <figure className="w-full h-full max-w-40 xl:max-w-50">
                  <img src={logo} className="object-cover" alt="Scale Logo" />
                </figure>
              </a>
              <button
                type="button"
                onClick={() => setMenu((prevState) => !prevState)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:block lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                className={`${menu ? "w-full " : "hidden"} w-12/12  lg:block `}
              >
                <ul className=" lg:bg-transparent w-full flex flex-col font-medium  p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 md:space-y-4 lg:space-y-0 rtl:space-x-reverse lg:flex-row lg:mt-0 md:border-0 ">
                  <li>
                    <a
                      href="/dashboard"
                      className="nav-link block py-2 px-3 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                      aria-current="page"
                    >
                      <div className="flex items-center gap-1">
                        <BiSolidDashboard size={25} color="" />
                        <span className="text-sm xl:text-lg">
                          Live Dashboard
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/recent_captured"
                      className="nav-link block py-2 px-3 rounded   hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      <div className="flex items-center gap-1">
                        <TbTargetArrow size={25} />
                        <span className="text-sm xl:text-lg">
                          Recent Captured
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/active_systems"
                      className="nav-link block py-2 px-3 rounded   hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      <div className="flex items-center gap-1">
                        <MdLocationOn size={25} />
                        <span className="text-sm xl:text-lg">
                          Active Systems
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/map"
                      className="nav-link block py-2 px-3 rounded   hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      <div className="flex items-center gap-1">
                        <FaMapMarkedAlt size={25} />
                        <span className="text-sm xl:text-lg">Map Coverage</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
  return <div className="h-screen flex flex-col">{children}</div>;
}

Content.propTypes = {
  children: childrenPropType,
};

function Content({ children }) {
  return <div className="w-full h-full overflow-x-hidden">{children}</div>;
}
