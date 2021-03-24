import { useForm } from "react-hook-form";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { tracheostomyValues } from "~/utils";

function CreateTracheostomyCheck({ onConfirm }) {
  const { register, handleSubmit, watch, errors } = useForm();
  let [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    setIsOpen(false);
    setTimeout(() => onConfirm(data), 150);
  };

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        onClick={() => setIsOpen((v) => !v)}
      >
        Create
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={setIsOpen} static>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </Dialog.Overlay>
              </Transition.Child>

              <Transition.Child
                enter="ease-out transform duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in transform duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  &#8203;
                </span>
                <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                          Create Tracheostomy Check
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                          <div className="relative block mt-10 text-left">
                            <form onSubmit={handleSubmit(onSubmit)} id="form" className="space-y-4">
                              {tracheostomyValues.map((value, idx) => (
                                <div className="flex items-center">
                                  <input
                                    id={`check_${idx}`}
                                    name={`check_${idx}`}
                                    type="checkbox"
                                    className="w-4 h-4 "
                                  />
                                  <label for={`check_${idx}`} className="ml-2 block text-sm text-gray-900">
                                    {value}
                                  </label>
                                </div>
                              ))}

                              <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                  Date
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="date"
                                    id="date"
                                    className="w-full"
                                    value={new Date().toLocaleString()}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      form="form"
                      className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:shadow-outline-blue sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CreateTracheostomyCheck;
