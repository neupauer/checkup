import cls from "classnames";

import Link from "~/components/link";
import * as Icon from "~/components/icon";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col flex-1 h-0 bg-white border-r border-gray-200">
        <div className="flex flex-col flex-1 pt-3 pb-6 overflow-y-auto md:pt-6">
          <div className="flex items-center flex-shrink-0 px-4 ">
            <img className="w-auto h-10 -ml-1" src="/logo.svg" alt="Workflow" />
            <span className="ml-2 text-xl font-bold">CHECkuP</span>
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

              <Link href="/screen-a">
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
                    Screen&nbsp;A
                  </a>
                )}
              </Link>

              <Link href="/screen-b">
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
                    <Icon.Heart className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                    Screen&nbsp;B
                  </a>
                )}
              </Link>
            </div>
          </nav>
        </div>
        {/* <div className="flex flex-shrink-0 px-2 py-4 border-t border-gray-200"></div> */}
      </div>
    </>
  );
}

export default Sidebar;
