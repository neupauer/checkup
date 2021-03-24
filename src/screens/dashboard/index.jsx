import { Line } from "@reactchartjs/react-chart.js";
import React from "react";

import LayoutContent from "~/components/console-layout-content";
import Layout, { useLayout } from "~/components/console-layout";
import Screen from "~/components/screen";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Temperature",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "#f87171",
      borderColor: "#fee2e2",
      // backgroundColor: "rgb(255, 99, 132)",
      // borderColor: "rgba(255, 99, 132, 0.2)",
      yAxisID: "y-axis-1",
    },
    {
      label: "Movement",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "#60a5fa",
      borderColor: "#dbeafe",
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

function Dashboard({}) {
  const { openSidebar } = useLayout();

  return (
    <Screen title="Dashboard">
      <LayoutContent title="Dashboard">
        <div className="flex flex-col flex-1 w-0">
          <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0">
            <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
              <button
                className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
                aria-label="Open sidebar"
                onClick={openSidebar}
              >
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
              <div className="flex justify-between flex-1 px-4 md:px-0">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="search_field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        {/* Heroicon name: search */}
                        <svg
                          className="flex-shrink-0 w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="search_field"
                        className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:placeholder-gray-400 sm:hidden"
                        placeholder="Search"
                        type="search"
                      />
                      <input
                        id="search_field"
                        className="hidden w-full h-full py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 border-none rounded-md focus:ring-0 focus:outline-none focus:placeholder-gray-400 sm:block"
                        placeholder="Search reports, shift plans, and more"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center ml-4 md:ml-6">
                  <button className="relative p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                    <span className="absolute top-0 right-0 flex w-2.5 h-2.5">
                      <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                      <span className="relative inline-flex w-2 h-2 bg-blue-500 ml-0.25 mt-0.25  mt-0. rounded-full"></span>
                    </span>
                    <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <div className="sr-only">Notifications</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex={0}>
            <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
              <div className="pt-10 pb-16">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl font-extrabold leading-9 text-gray-900">Dashboard</h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    {/* Tabs */}
                    <div className="lg:hidden">
                      <select
                        aria-label="Selected tab"
                        className="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 transition duration-150 ease-in-out border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      >
                        <option selected>Monitor</option>
                        <option>Shift Plans</option>
                        <option>Observations</option>
                      </select>
                    </div>
                    <div className="hidden lg:block">
                      <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                          <a
                            href="#"
                            className="px-1 py-4 text-sm font-medium leading-5 text-blue-600 whitespace-no-wrap border-b-2 border-blue-500 focus:outline-none focus:text-blue-800 focus:border-blue-700"
                          >
                            Monitor
                          </a>
                          <a
                            href="#"
                            className="px-1 py-4 ml-8 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                          >
                            Shift Plans
                          </a>
                          <a
                            href="#"
                            className="px-1 py-4 ml-8 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                          >
                            Observations
                          </a>
                        </nav>
                      </div>
                    </div>
                    {/* Description list with inline editing */}
                    <div className="mt-10 space-y-6">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Vitals</h3>
                        <p className="max-w-2xl text-sm leading-5 text-gray-500">
                          This information about the patient's vitals.
                        </p>
                      </div>
                      <div>
                        <Line data={data} options={options} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutContent>
    </Screen>
  );
}

Dashboard.shell = Layout;

export default Dashboard;
