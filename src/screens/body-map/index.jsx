import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { useForm, Controller } from "react-hook-form";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import React, { useContext, useRef, useState, Fragment } from "react";
import { SunIcon, MoonIcon, CheckIcon, XIcon } from "@heroicons/react/solid";

import db from "~/integrations/pouchdb";
import Screen from "~/components/screen";
import useBoolean from "~/hooks/use-boolean";
import BackBody from "~/components/back-body";
import FrontBody from "~/components/front-body";
import { DbContext } from "~/components/db-context";
import Layout, { useLayout } from "~/components/console-layout";
import LayoutContent from "~/components/console-layout-content";

function BodyMap() {
  const cancelButtonRef = useRef();
  const [side, sideSet] = useState("front");
  const [detail, setDetail] = useState(null);

  const { openSidebar } = useLayout();
  const [open, { on: openModal, off: closeModal }] = useBoolean(false);

  const {
    state: { document, collection },
  } = useContext(DbContext);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      date: new Date().toISOString().substr(0, 10),
    },
  });

  const onSubmit = async (data) => {
    await db.put({
      ...data,
      _id: uuid(),
      timestamp: Date.now(),
      type: "body-map",
    });
    closeModal();
    reset();
  };

  const reset = () => {
    setTimeout(() => {
      sideSet("front");
    }, 250);
  };

  return (
    <Screen title="Body Map">
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
                  Create Body Map
                </Dialog.Title>

                <form onSubmit={handleSubmit(onSubmit)} id="form" className="mt-6 space-y-10">
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <RadioGroup
                          value={side}
                          onChange={sideSet}
                          className="inline-flex items-center justify-center p-1 mt-1 bg-gray-100"
                        >
                          <RadioGroup.Option value="front" as={Fragment}>
                            {({ checked }) => (
                              <button
                                type="button"
                                className={clsx("px-2 py-1 focus:outline-none ", {
                                  "bg-white shadow-sm": checked,
                                  "hover:bg-white hover:shadow-sm": !checked,
                                })}
                              >
                                <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                  Front
                                </span>
                              </button>
                            )}
                          </RadioGroup.Option>

                          <RadioGroup.Option value="back" as={Fragment}>
                            {({ checked }) => (
                              <button
                                type="button"
                                className={clsx("ml-1 px-2 py-1 focus:outline-none ", {
                                  "bg-white shadow-sm": checked,
                                  "hover:bg-white hover:shadow-sm": !checked,
                                })}
                              >
                                <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                  Back
                                </span>
                              </button>
                            )}
                          </RadioGroup.Option>
                        </RadioGroup>
                      </div>

                      <div
                        className={clsx({
                          block: side === "front",
                          hidden: side !== "front",
                        })}
                      >
                        <Controller
                          name="front"
                          control={control}
                          render={({ onChange, value }) => <FrontBody onChange={onChange} value={value} />}
                        />
                      </div>

                      <div
                        className={clsx({
                          block: side === "back",
                          hidden: side !== "back",
                        })}
                      >
                        <Controller
                          name="back"
                          control={control}
                          render={({ onChange, value }) => <BackBody onChange={onChange} value={value} />}
                        />
                      </div>

                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                          Date
                        </label>
                        <input type="date" name="date" id="date" ref={register()} className="w-full mt-1" />
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                          Additional Notes
                        </label>
                        <textarea rows="3" name="notes" id="notes" ref={register()} className="w-full mt-1" />
                      </div>

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

      <Transition show={!!detail} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          static
          open={!!detail}
          onClose={() => {
            setDetail(null);
            reset();
          }}
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
                  Body Map
                </Dialog.Title>

                <>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <RadioGroup
                        value={side}
                        onChange={sideSet}
                        className="inline-flex items-center justify-center p-1 mt-1 bg-gray-100"
                      >
                        <RadioGroup.Option value="front" as={Fragment}>
                          {({ checked }) => (
                            <button
                              type="button"
                              className={clsx("px-2 py-1 focus:outline-none ", {
                                "bg-white shadow-sm": checked,
                                "hover:bg-white hover:shadow-sm": !checked,
                              })}
                            >
                              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                Front
                              </span>
                            </button>
                          )}
                        </RadioGroup.Option>

                        <RadioGroup.Option value="back" as={Fragment}>
                          {({ checked }) => (
                            <button
                              type="button"
                              className={clsx("ml-1 px-2 py-1 focus:outline-none ", {
                                "bg-white shadow-sm": checked,
                                "hover:bg-white hover:shadow-sm": !checked,
                              })}
                            >
                              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Back</span>
                            </button>
                          )}
                        </RadioGroup.Option>
                      </RadioGroup>
                    </div>

                    <div
                      className={clsx({
                        block: side === "front",
                        hidden: side !== "front",
                      })}
                    >
                      <FrontBody value={document?.[detail]?.front} readOnly />
                    </div>

                    <div
                      className={clsx({
                        block: side === "back",
                        hidden: side !== "back",
                      })}
                    >
                      <BackBody value={document?.[detail]?.back} readOnly />
                    </div>

                    {document?.[detail]?.notes && (
                      <div className="pt-4">
                        <p className="text-sm text-gray-600">{document?.[detail]?.notes}</p>
                      </div>
                    )}
                  </div>
                </>

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setDetail(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <LayoutContent title="Body Map">
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
                  <h1 className="text-3xl font-extrabold leading-9 text-gray-900">Body Map</h1>

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
                              <div className="overflow-hidden border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Date
                                      </th>

                                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Front
                                      </th>

                                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Back
                                      </th>

                                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        Notes
                                      </th>

                                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                                        A Carer
                                      </th>

                                      <th className="bg-gray-50"></th>
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-gray-200">
                                    {(collection["body-map"] || []).map((item) => (
                                      <tr key={item._id}>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                          <span className="text-sm text-gray-900">
                                            {new Date(item.date).toLocaleDateString()}
                                          </span>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap">
                                          {item?.front?.length > 0 ? (
                                            <div className="flex items-center justify-center w-4 h-4 bg-red-100 rounded-full">
                                              <div className="flex w-2 h-2 bg-red-500 rounded-full"></div>
                                            </div>
                                          ) : (
                                            <span className="text-sm leading-5 text-gray-300 select-none">—</span>
                                          )}
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap">
                                          {item?.back?.length > 0 ? (
                                            <div className="flex items-center justify-center w-4 h-4 bg-red-100 rounded-full">
                                              <div className="flex w-2 h-2 bg-red-500 rounded-full"></div>
                                            </div>
                                          ) : (
                                            <span className="text-sm leading-5 text-gray-300 select-none">—</span>
                                          )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                          <div className="flex max-w-xs min-w-0">
                                            {item.notes && (
                                              <span className="text-sm text-gray-900 truncate">{item.notes}</span>
                                            )}
                                          </div>
                                          {!item.notes && (
                                            <span className="text-sm leading-5 text-gray-300 select-none">—</span>
                                          )}
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap">
                                          <div className="flex items-center justify-between min-w-0 space-x-3">
                                            <img
                                              className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full"
                                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                              alt="Avatar"
                                            />
                                            <div className="flex-1 min-w-0 text-left">
                                              <h2 className="text-xs font-medium leading-5 text-gray-900 truncate">
                                                Dr. Jean Doe
                                              </h2>
                                              <p className="text-xs leading-5 text-gray-500 truncate">jean@doe.com</p>
                                            </div>
                                          </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap">
                                          <button
                                            className="text-sm font-semibold text-blue-500 focus:outline-none hover:underline"
                                            onClick={() => setDetail(item._id)}
                                          >
                                            Show
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
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

BodyMap.shell = Layout;

export default BodyMap;
