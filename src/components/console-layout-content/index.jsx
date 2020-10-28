import { useLayout } from "~/components/console-layout";

function ConsoleLayoutContent({ title, children }) {
  const { openSidebar } = useLayout();

  return (
    <>
      <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow md:hidden">
        <button
          className="px-4 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden"
          aria-label="Open sidebar"
          onClick={openSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>

        {title && (
          <div className="flex items-center justify-between flex-1 min-w-0 pl-4 pr-8">
            <h2 className="text-2xl font-bold leading-7 truncate">{title}</h2>
          </div>
        )}
      </div>

      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        {title && (
          <div className="hidden px-4 bg-white shadow md:block sm:px-6 lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        )}

        <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
}

export default ConsoleLayoutContent;
