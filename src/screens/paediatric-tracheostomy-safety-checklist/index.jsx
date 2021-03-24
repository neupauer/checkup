import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { SunIcon, MoonIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import React, { useContext, useState, useEffect, useRef, Fragment } from "react";

import db from "~/integrations/pouchdb";
import Screen from "~/components/screen";
import useBoolean from "~/hooks/use-boolean";
import { tracheostomyValues } from "~/utils";
import { DbContext } from "~/components/db-context";
import Layout, { useLayout } from "~/components/console-layout";
import LayoutContent from "~/components/console-layout-content";

const getDateISO = (d) => d.toISOString().split("T")[0];
function PaediatricTracheostomySafetyChecklist() {
  const cancelButtonRef = useRef();
  const [days, daysSet] = useState([]);
  const [M, MSet] = useState(new Map());
  const { openSidebar } = useLayout();
  const [open, { on: openModal, off: closeModal }] = useBoolean(false);

  const {
    state: { collection },
  } = useContext(DbContext);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      date: new Date().toISOString().substr(0, 10),
      shift: "day",
    },
  });

  const onSubmit = async (data) => {
    const doc = await db.get(`${data.date}::${data.shift}`).catch((e) => undefined);
    await db.put({
      ...data,
      ...(doc ? { _rev: doc._rev } : {}),
      _id: `${data.date}::${data.shift}`,
      timestamp: Date.now(),
      type: "paediatric-tracheostomy-safety-checklist",
    });

    closeModal();
  };

  useEffect(() => {
    let days = [];
    const d = new Date();

    for (let i = 0; i < 7; i++) {
      days.push(new Date(d));
      d.setDate(d.getDate() - 1);
    }

    daysSet(days.reverse());
  }, []);

  useEffect(() => {
    const m = new Map();

    collection?.["paediatric-tracheostomy-safety-checklist"]?.forEach((item) => {
      tracheostomyValues.forEach((_, idx) => {
        const key = `${item.date}::${item.shift}::${idx}`;
        m.set(key, item?.[`check_${idx}`]);
      });
    });

    MSet(m);
  }, [collection]);

  return (
    <Screen title="Paediatric Tracheostomy Safety Checklist">
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          static
          open={open}
          onClose={closeModal}
          initialFocus={cancelButtonRef}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Create Paediatric Tracheostomy Safety Checklist
                </Dialog.Title>

                <form onSubmit={handleSubmit(onSubmit)} id="form" className="mt-6 space-y-10">
                  <>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                          </label>
                          <input type="date" name="date" id="date" ref={register()} className="w-full mt-1" />
                        </div>

                        <div>
                          <label htmlFor="shift" className="block text-sm font-medium text-gray-700">
                            Shift
                          </label>
                          <div>
                            <Controller
                              control={control}
                              name="shift"
                              render={({ onChange, value }) => (
                                <RadioGroup
                                  value={value}
                                  onChange={onChange}
                                  className="inline-flex items-center p-1 mt-1 bg-gray-100"
                                >
                                  <RadioGroup.Option value="day" as={Fragment}>
                                    {({ checked }) => (
                                      <button
                                        type="button"
                                        className={clsx("focus:outline-none ", {
                                          "bg-white p-2 shadow-sm text-gray-400": checked,
                                          "p-2 text-gray-400 hover:bg-white hover:shadow-sm": !checked,
                                        })}
                                      >
                                        <SunIcon className="w-5 h-5" aria-hidden="true" />
                                        <span className="sr-only">Day</span>
                                      </button>
                                    )}
                                  </RadioGroup.Option>

                                  <RadioGroup.Option value="night" as={Fragment}>
                                    {({ checked }) => (
                                      <button
                                        type="button"
                                        className={clsx("ml-1 focus:outline-none ", {
                                          "bg-white p-2 shadow-sm text-gray-400": checked,
                                          "p-2 text-gray-400 hover:bg-white hover:shadow-sm": !checked,
                                        })}
                                      >
                                        <MoonIcon className="w-5 h-5" aria-hidden="true" />
                                        <span className="sr-only">Night</span>
                                      </button>
                                    )}
                                  </RadioGroup.Option>
                                </RadioGroup>
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      {tracheostomyValues.map((value, idx) => (
                        <div className="flex items-center" key={idx}>
                          <input
                            id={`check_${idx}`}
                            name={`check_${idx}`}
                            type="checkbox"
                            className="w-4 h-4"
                            ref={register()}
                          />
                          <label htmlFor={`check_${idx}`} className="block ml-2 text-sm text-gray-900">
                            {value}
                          </label>
                        </div>
                      ))}

                      <div>
                        <label htmlFor="signed" className="block text-sm font-medium text-gray-700">
                          Signed
                        </label>
                        <div className="flex items-center justify-between min-w-0 mt-1 space-x-3">
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
                      </div>
                    </div>
                  </>
                </form>

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    form="form"
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <LayoutContent title="Paediatric Tracheostomy Safety Checklist">
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
                    <div className="relative w-full text-gray-400 border-none focus-within:text-gray-600">
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
                        className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 border-none rounded-md focus:outline-none focus:placeholder-gray-400 sm:hidden"
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

          <main className="flex-1 overflow-y-scroll focus:outline-none" tabIndex={0}>
            <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
              <div className="pt-10 pb-16">
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl font-extrabold leading-9 text-gray-900">
                    Paediatric Tracheostomy Safety Checklist
                  </h1>

                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                      onClick={openModal}
                    >
                      Create
                    </button>
                  </span>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    {/* Description list with inline editing */}
                    <div className="mt-10 space-y-6">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Records</h3>
                      </div>
                      <div>
                        <div className="flex flex-col">
                          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                              <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th className="border border-b-0 bg-gray-50"></th>
                                      {days.map((day, idx) => (
                                        <th
                                          className="px-2 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border bg-gray-50 whitespace-nowrap"
                                          colSpan="2"
                                          key={idx}
                                        >
                                          {day.toLocaleDateString("en-GB", {
                                            weekday: "short",
                                            day: "numeric",
                                            month: "numeric",
                                          })}
                                        </th>
                                      ))}
                                    </tr>

                                    <tr>
                                      <th className="border border-t-0 bg-gray-50"></th>
                                      {days.map((day, idx) => (
                                        <Fragment key={idx}>
                                          <th className="px-2 py-2 text-xs font-medium tracking-wider text-center text-gray-400 uppercase border bg-gray-50">
                                            <div className="flex justify-center">
                                              <SunIcon className="w-4 h-4" />
                                            </div>
                                          </th>
                                          <th className="px-2 py-2 text-xs font-medium tracking-wider text-center text-gray-400 uppercase border bg-gray-50">
                                            <div className="flex justify-center">
                                              <MoonIcon className="w-4 h-4" />
                                            </div>
                                          </th>
                                        </Fragment>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="text-center bg-white divide-y divide-gray-200">
                                    {tracheostomyValues.map((val, valIdx) => (
                                      <tr key={val}>
                                        <td className="p-2 text-xs text-left text-gray-900 border bg-gray-50">{val}</td>
                                        {days.map((day, dayIdx) => (
                                          <Fragment key={dayIdx}>
                                            <td className="border">
                                              {M.has(`${getDateISO(day)}::day::${valIdx}`) ? (
                                                M.get(`${getDateISO(day)}::day::${valIdx}`) ? (
                                                  <div className="flex justify-center">
                                                    <CheckIcon className="w-5 h-5 text-green-500" />
                                                  </div>
                                                ) : (
                                                  <div className="flex justify-center">
                                                    <XIcon className="w-5 h-5 text-red-400" />
                                                  </div>
                                                )
                                              ) : (
                                                <span className="text-sm leading-5 text-gray-300 select-none">—</span>
                                              )}
                                            </td>
                                            <td className="border">
                                              {M.has(`${getDateISO(day)}::night::${valIdx}`) ? (
                                                M.get(`${getDateISO(day)}::night::${valIdx}`) ? (
                                                  <div className="flex justify-center">
                                                    <CheckIcon className="w-5 h-5 text-green-500" />
                                                  </div>
                                                ) : (
                                                  <div className="flex justify-center">
                                                    <XIcon className="w-5 h-5 text-red-400" />
                                                  </div>
                                                )
                                              ) : (
                                                <span className="text-sm leading-5 text-gray-300 select-none">—</span>
                                              )}
                                            </td>
                                          </Fragment>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>

                                  <tfoot className="text-center bg-white divide-y divide-gray-200">
                                    <tr>
                                      <td className="px-2 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border bg-gray-50 whitespace-nowrap">
                                        A carer
                                      </td>
                                      {days.map((day, dayIdx) => (
                                        <Fragment key={dayIdx}>
                                          <td className="border bg-gray-50">
                                            {M.has(`${getDateISO(day)}::day::0`) ? (
                                              <div className="flex justify-center">
                                                <img
                                                  className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full"
                                                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                  alt="Avatar"
                                                />
                                              </div>
                                            ) : (
                                              <span className="text-sm leading-5 text-gray-300 select-none">—</span>
                                            )}
                                          </td>
                                          <td className="border bg-gray-50">
                                            {M.has(`${getDateISO(day)}::night::0`) ? (
                                              <div className="flex justify-center">
                                                <img
                                                  className="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full"
                                                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                  alt="Avatar"
                                                />
                                              </div>
                                            ) : (
                                              <span className="text-sm leading-5 text-gray-300 select-none">—</span>
                                            )}
                                          </td>
                                        </Fragment>
                                      ))}
                                    </tr>
                                  </tfoot>
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

PaediatricTracheostomySafetyChecklist.shell = Layout;

export default PaediatricTracheostomySafetyChecklist;
