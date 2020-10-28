import { useEffect, useContext, createContext } from "react";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";

import useBoolean from "~/hooks/use-boolean";
import Sidebar from "~/components/sidebar";
const noop = () => {};

const LayoutContext = createContext({ sidebar: false, openSidebar: noop, closeSidebar: noop, toggleSidebar: noop });

function LayoutProvider({ children }) {
  const [sidebar, { on: openSidebar, off: closeSidebar, toggle: toggleSidebar }] = useBoolean(false);

  return (
    <LayoutContext.Provider value={{ sidebar, openSidebar, closeSidebar, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
}

/**
 * @callback OpenSidebar
 * @returns {void}
 *
 * @callback CloseSidebar
 * @returns {void}
 *
 * @callback ToggleSidebar
 * @returns {void}
 *
 * @typedef {Object} Context
 * @property {boolean} sidebar Whether the sidebar is open or not.
 * @property {OpenSidebar} openSidebar Open the sidebar.
 * @property {CloseSidebar} closeSidebar Close the sidebar.
 * @property {ToggleSidebar} toggleSidebar Toggle the sidebar.
 *
 * @return {Context}
 */
function useLayout() {
  const context = useContext(LayoutContext);
  return { ...context };
}

function ConsoleLayout({ title, children }) {
  const router = useRouter();
  const { sidebar, closeSidebar } = useLayout();

  // useKeydown("Escape", off);

  useEffect(() => {
    if (closeSidebar) {
      router.events.on("routeChangeComplete", closeSidebar);
      return () => {
        router.events.off("routeChangeComplete", closeSidebar);
      };
    }
  }, [closeSidebar]);

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Transition show={sidebar} className="fixed inset-0 z-20 flex">
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0">
            <div onClick={closeSidebar} className="absolute inset-0 opacity-75 bg-cool-gray-600" />
          </div>
        </Transition.Child>

        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="relative flex flex-col flex-1 w-full max-w-xs"
        >
          <div className="absolute top-0 right-0 p-1 -mr-14">
            <Transition.Child
              className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-cool-gray-600"
              aria-label="Close sidebar"
              as="button"
              onClick={closeSidebar}
            >
              <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Transition.Child>
          </div>

          <Sidebar />
        </Transition.Child>
        <div className="flex-shrink-0 w-14">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
      </Transition>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar />
        </div>
      </div>

      <div className="flex flex-col flex-1 w-0 overflow-hidden">{children}</div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <LayoutProvider>
        <ConsoleLayout>{children}</ConsoleLayout>
    </LayoutProvider>
  );
}

export { Layout as default, LayoutContext, LayoutProvider, useLayout };
