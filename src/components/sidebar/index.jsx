import cls from "classnames";

import Link from "~/components/link";
import * as Icon from "~/components/icon";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col flex-1 h-0 bg-white border-r border-gray-200">
        <div className="flex flex-col flex-1 pt-3 pb-6 overflow-y-auto md:pt-6">
          <div className="flex items-center flex-shrink-0 px-4 ">
            <img className="w-auto h-10 -ml-1" src="/logo.png" alt="Workflow" />
            <span className="ml-2 text-xl font-bold">Checkup</span>
          </div>

          <div className="relative inline-block mt-6 text-left">
            <div>
              <button
                type="button"
                className="group w-full rounded-md px-3.5 py-2 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:bg-gray-200 focus:border-blue-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-between min-w-0 space-x-3">
                    <img
                      className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Avatar"
                    />
                    <div className="flex-1 min-w-0 text-left">
                      <h2 className="text-sm font-medium leading-5 text-gray-900 truncate">Dr. Jean Doe</h2>
                      <p className="text-sm leading-5 text-gray-500 truncate">jean@doe.com</p>
                    </div>
                  </div>
                  {/* Heroicon name: selector */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <nav className="flex-1 px-2 mt-5 bg-white">
            <div className="space-y-1">
              <Link href="/">
                {({ active }) => (
                  <a
                    className={cls(
                      "flex items-center px-2 py-3 sm:py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group focus:outline-none",
                      {
                        "text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50": !active,
                        "text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-200": active,
                      }
                    )}
                  >
                    <Icon.Home className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                    Dashboard
                  </a>
                )}
              </Link>

              <Link href="/reports">
                {({ active }) => (
                  <a
                    className={cls(
                      "flex items-center px-2 py-3 sm:py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group focus:outline-none",
                      {
                        "text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50": !active,
                        "text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-200": active,
                      }
                    )}
                  >
                    <Icon.TrendingUp className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                    Reports
                  </a>
                )}
              </Link>

              <Link href="/body-map">
                {({ active }) => (
                  <a
                    className={cls(
                      "flex items-center px-2 py-3 sm:py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group focus:outline-none",
                      {
                        "text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50": !active,
                        "text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-200": active,
                      }
                    )}
                  >
                    <Icon.Emoji className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                    Body Map
                  </a>
                )}
              </Link>

              <Link href="/settings">
                {({ active }) => (
                  <a
                    className={cls(
                      "flex items-center px-2 py-3 sm:py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group focus:outline-none",
                      {
                        "text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50": !active,
                        "text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-200": active,
                      }
                    )}
                  >
                    <Icon.Adjustments className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                    Settings
                  </a>
                )}
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-shrink-0 w-full px-2 py-4">
          <Link href="#">
            {({ active }) => (
              <a
                className={cls(
                  "flex w-full items-center px-2 py-3 sm:py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group focus:outline-none",
                  {
                    "text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50": !active,
                    "text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-200": active,
                  }
                )}
              >
                <Icon.QuestionMarkCircle className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                Help
              </a>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
