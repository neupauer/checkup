import { Line } from "@reactchartjs/react-chart.js";
import React from "react";

import LayoutContent from "~/components/console-layout-content";
import Layout, { useLayout } from "~/components/console-layout";
import Screen from "~/components/screen";

function Reports({}) {
  const { openSidebar } = useLayout();

  return (
    <Screen title="Reports">
      <LayoutContent title="Reports">
        <div className="flex flex-col flex-1">
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
                        className="hidden w-full h-full py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:placeholder-gray-400 sm:block"
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
                  <h1 className="text-3xl font-extrabold leading-9 text-gray-900">Reports</h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    {/* Tabs */}
                    <div className="lg:hidden">
                      <select
                        aria-label="Selected tab"
                        className="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 transition duration-150 ease-in-out border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                      >
                        <option selected>Statistics</option>
                        <option>Body Map</option>
                      </select>
                    </div>
                    <div className="hidden lg:block">
                      <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                          <a
                            href="#"
                            className="px-1 py-4 text-sm font-medium leading-5 text-blue-600 whitespace-no-wrap border-b-2 border-blue-500 focus:outline-none focus:text-blue-800 focus:border-blue-700"
                          >
                            Statistics
                          </a>
                          <a
                            href="#"
                            className="px-1 py-4 ml-8 text-sm font-medium leading-5 text-gray-500 whitespace-no-wrap border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                          >
                            Body Map
                          </a>
                        </nav>
                      </div>
                    </div>
                    {/* Description list with inline editing */}
                    <div className="mt-10 space-y-6">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Daily Statistics</h3>
                        <p className="max-w-2xl text-sm leading-5 text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ullam ratione magnam.
                        </p>
                      </div>
                      <div>
                        <div className="flex flex-col">
                          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Name
                                      </th>
                                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Value
                                      </th>
                                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Status
                                      </th>
                                      <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Caregiver
                                      </th>
                                      <th className="px-6 py-3 bg-gray-50" />
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="flex items-center">
                                          <div className="flex-shrink-0 w-8 h-8">
                                            <svg
                                              className="w-full h-full text-blue-400"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g
                                                strokeLinecap="round"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinejoin="round"
                                              >
                                                <path d="M13,16.041v-13.541v0c0,-1.10457 -0.895431,-2 -2,-2c-1.10457,0 -2,0.895431 -2,2v13.541l-2.01894e-07,1.16564e-07c-1.91317,1.10457 -2.56867,3.55093 -1.4641,5.4641c1.10457,1.91317 3.55093,2.56867 5.4641,1.4641c1.91317,-1.10457 2.56867,-3.55093 1.4641,-5.4641c-0.351073,-0.608077 -0.856025,-1.11303 -1.4641,-1.4641Z" />
                                                <path d="M11.7071,18.7929c0.390524,0.390524 0.390524,1.02369 0,1.41421c-0.390524,0.390524 -1.02369,0.390524 -1.41421,0c-0.390524,-0.390524 -0.390524,-1.02369 0,-1.41421c0.390524,-0.390524 1.02369,-0.390524 1.41421,0" />
                                                <path d="M11,18.5v-10" />
                                                <path d="M15,13.5h2" />
                                                <path d="M15,8.5h2" />
                                                <path d="M15,3.5h2" />
                                              </g>
                                            </svg>
                                          </div>
                                          <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900">
                                              Temperature measuring
                                            </div>
                                            <div className="text-sm leading-5 text-gray-500">today, 9:46</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="text-sm leading-5 text-gray-900">36.7</span>
                                        <span className="text-sm leading-5 text-gray-500"> &#8451;</span>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                          Normal
                                        </span>
                                      </td>
                                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                                        Dr. Jean Doe
                                      </td>
                                      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                          Show
                                        </a>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="flex items-center">
                                          <div className="flex-shrink-0 w-8 h-8">
                                            <svg
                                              className="w-full h-full text-blue-400"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g
                                                strokeLinecap="round"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinejoin="round"
                                              >
                                                <path d="M13,16.041v-13.541v0c0,-1.10457 -0.895431,-2 -2,-2c-1.10457,0 -2,0.895431 -2,2v13.541l-2.01894e-07,1.16564e-07c-1.91317,1.10457 -2.56867,3.55093 -1.4641,5.4641c1.10457,1.91317 3.55093,2.56867 5.4641,1.4641c1.91317,-1.10457 2.56867,-3.55093 1.4641,-5.4641c-0.351073,-0.608077 -0.856025,-1.11303 -1.4641,-1.4641Z" />
                                                <path d="M11.7071,18.7929c0.390524,0.390524 0.390524,1.02369 0,1.41421c-0.390524,0.390524 -1.02369,0.390524 -1.41421,0c-0.390524,-0.390524 -0.390524,-1.02369 0,-1.41421c0.390524,-0.390524 1.02369,-0.390524 1.41421,0" />
                                                <path d="M11,18.5v-10" />
                                                <path d="M15,13.5h2" />
                                                <path d="M15,8.5h2" />
                                                <path d="M15,3.5h2" />
                                              </g>
                                            </svg>
                                          </div>
                                          <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900">
                                              Temperature measuring
                                            </div>
                                            <div className="text-sm leading-5 text-gray-500">yesterday, 12:26</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="text-sm leading-5 text-gray-900">36.2</span>
                                        <span className="text-sm leading-5 text-gray-500"> &#8451;</span>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                          Normal
                                        </span>
                                      </td>
                                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                                        Dr. Jean Doe
                                      </td>
                                      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                          Show
                                        </a>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="flex items-center">
                                          <div className="flex-shrink-0 w-8 h-8">
                                            <svg
                                              className="w-full h-full text-purple-400"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g
                                                strokeLinecap="round"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinejoin="round"
                                              >
                                                <path d="M2.906,22.605l-2.7445e-08,-2.59937e-07c0.0537028,0.50863 0.482543,0.894759 0.994,0.895h16.2l2.98692e-08,-1.41043e-11c0.511457,-0.000241542 0.940297,-0.38637 0.994,-0.895l1.85,-17.573l-1.38742e-08,1.32638e-07c0.0354351,-0.338762 -0.103995,-0.672264 -0.37,-0.885l3.40972e-07,2.72028e-07c-3.00106,-2.39426 -6.73504,-3.68212 -10.574,-3.647l-2.70162e-08,-2.47134e-10c-3.83896,-0.0351174 -7.57294,1.25274 -10.574,3.647l6.15557e-08,-4.92289e-08c-0.266005,0.212736 -0.405435,0.546238 -0.37,0.885Z" />
                                                <path d="M20.274,4.948l-1.77472e-08,-1.16267e-08c0.141256,0.0925406 0.226257,0.25013 0.226,0.419v2.633v0c0,0.276142 -0.223858,0.5 -0.5,0.5h-16h-2.18557e-08c-0.276142,-1.20706e-08 -0.5,-0.223858 -0.5,-0.5c0,0 0,0 0,0v-2.633l-1.19993e-08,-7.93087e-06c-0.000254158,-0.16887 0.084749,-0.326458 0.226007,-0.418996l-7.59129e-07,4.91685e-07c3.59705,-2.3298 8.009,-3.03693 12.154,-1.948l9.22766e-07,2.41695e-07c1.55997,0.408594 3.04373,1.06639 4.394,1.948Z" />
                                                <path d="M5.274,18.325l-9.167e-09,-1.03726e-07c0.112603,1.27413 1.23677,2.21572 2.51089,2.10312c1.19775,-0.105854 2.11528,-1.11071 2.11211,-2.31312v-4.047l1.02875e-07,-3.60412e-05c0.00393108,-1.38071 -1.11217,-2.50318 -2.49287,-2.50711c-1.38071,-0.00393108 -2.50318,1.11217 -2.50711,2.49287c-0.000229382,0.0805653 0.00343585,0.161095 0.0109829,0.241306Z" />
                                                <path d="M18.726,18.325l-2.58105e-09,2.92049e-08c-0.112604,1.27413 -1.23677,2.21572 -2.51089,2.10312c-1.19775,-0.105854 -2.11528,-1.11071 -2.11211,-2.31312v-4.047l-1.03147e-07,-3.61369e-05c-0.00393103,-1.38071 1.11217,-2.50318 2.49287,-2.50711c1.38071,-0.00393103 2.50318,1.11217 2.50711,2.49287c0.000229379,0.0805653 -0.00343586,0.161095 -0.0109829,0.241306Z" />
                                                <path d="M11,8.5l1,-3l1,3" />
                                                <path d="M12,4v-1.5" />
                                                <path d="M14.5,4.23l0.28,-1.47" />
                                                <path d="M16.91,4.93l0.55,-1.4" />
                                                <path d="M9.5,4.23l-0.28,-1.47" />
                                                <path d="M7.09,4.93l-0.55,-1.4" />
                                              </g>
                                            </svg>
                                          </div>
                                          <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900">
                                              Weight measuring
                                            </div>
                                            <div className="text-sm leading-5 text-gray-500">yesterday, 13:16</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="text-sm leading-5 text-gray-900">77</span>
                                        <span className="text-sm leading-5 text-gray-500"> kg</span>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                          Normal
                                        </span>
                                      </td>
                                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                                        Dr. Jean Doe
                                      </td>
                                      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                          Show
                                        </a>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="flex items-center">
                                          <div className="flex-shrink-0 w-8 h-8">
                                            <svg
                                              className="w-full h-full text-blue-400"
                                              viewBox="0 0 24 24"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <g
                                                strokeLinecap="round"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinejoin="round"
                                              >
                                                <path d="M13,16.041v-13.541v0c0,-1.10457 -0.895431,-2 -2,-2c-1.10457,0 -2,0.895431 -2,2v13.541l-2.01894e-07,1.16564e-07c-1.91317,1.10457 -2.56867,3.55093 -1.4641,5.4641c1.10457,1.91317 3.55093,2.56867 5.4641,1.4641c1.91317,-1.10457 2.56867,-3.55093 1.4641,-5.4641c-0.351073,-0.608077 -0.856025,-1.11303 -1.4641,-1.4641Z" />
                                                <path d="M11.7071,18.7929c0.390524,0.390524 0.390524,1.02369 0,1.41421c-0.390524,0.390524 -1.02369,0.390524 -1.41421,0c-0.390524,-0.390524 -0.390524,-1.02369 0,-1.41421c0.390524,-0.390524 1.02369,-0.390524 1.41421,0" />
                                                <path d="M11,18.5v-10" />
                                                <path d="M15,13.5h2" />
                                                <path d="M15,8.5h2" />
                                                <path d="M15,3.5h2" />
                                              </g>
                                            </svg>
                                          </div>
                                          <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900">
                                              Temperature measuring
                                            </div>
                                            <div className="text-sm leading-5 text-gray-500">02-10-2020, 17:11</div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="text-sm leading-5 text-gray-900">38.2</span>
                                        <span className="text-sm leading-5 text-gray-500"> &#8451;</span>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap">
                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full">
                                          High
                                        </span>
                                      </td>
                                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                                        Dr. Jean Doe
                                      </td>
                                      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                          Show
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
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

Reports.shell = Layout;

export default Reports;
