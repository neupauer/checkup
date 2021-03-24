import Screen from "~/components/screen";
import LayoutContent from "~/components/console-layout-content";
import Layout, { useLayout } from "~/components/console-layout";

function ColorPicker({}) {
  const { openSidebar } = useLayout();
  return (
    <Screen title="Color Picker">
      <LayoutContent title="Color Picker">
        <div className="flex flex-col flex-1 w-0">
          <main className="flex-1 overflow-y-scroll focus:outline-none" tabIndex={0}>
            <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
              <div className="pt-10 pb-16">
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl font-extrabold leading-9 text-gray-900">Color Picker</h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    <div className="flex space-x-3">
                      <button className="w-16 h-10 transform bg-red-500 rounded-sm focus:outline-none"></button>
                      <button className="w-16 h-10 transform bg-blue-500 rounded-sm focus:outline-none"></button>
                      <button className="w-16 h-10 transform bg-purple-500 rounded-sm focus:outline-none"></button>
                    </div>

                    <div className="flex mt-12 space-x-3">
                      <button className="w-16 h-10 transform bg-red-500 rounded-sm cursor-pointer focus:outline-none hover:scale-110"></button>
                      <button className="w-16 h-10 transform bg-blue-500 rounded-sm cursor-pointer focus:outline-none hover:scale-110"></button>
                      <button className="w-16 h-10 transform bg-purple-500 rounded-sm cursor-pointer focus:outline-none hover:scale-110"></button>
                    </div>

                    <div className="flex mt-12 space-x-3">
                      <button className="w-16 h-10 transition duration-200 transform bg-red-500 rounded-sm shadow cursor-pointer focus:outline-none hover:scale-110 hover:shadow-xl"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-blue-500 rounded-sm shadow cursor-pointer focus:outline-none hover:scale-110 hover:shadow-xl"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-purple-500 rounded-sm shadow cursor-pointer focus:outline-none hover:scale-110 hover:shadow-xl"></button>
                    </div>

                    <div className="flex mt-12 space-x-3">
                      <button className="w-16 h-10 transition duration-200 transform bg-red-500 rounded-sm shadow cursor-pointer focus:outline-none hover:scale-110 hover:shadow-xl active:bg-red-600 active:scale-95 active:shadow-sm"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-blue-500 rounded-sm shadow cursor-pointer focus:outline-none hover:scale-110 hover:shadow-xl active:bg-blue-600 active:scale-95 active:shadow-sm"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-purple-500 rounded-sm shadow cursor-pointer focus:outline-none hover:scale-110 hover:shadow-xl active:bg-purple-600 active:scale-95 active:shadow-sm"></button>
                    </div>

                    <div className="flex mt-12 space-x-3">
                      <button className="w-16 h-10 transition duration-200 transform bg-red-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-red-600 active:scale-95 active:shadow-sm"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-blue-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-blue-600 active:scale-95 active:shadow-sm"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-purple-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-purple-600 active:scale-95 active:shadow-sm"></button>
                    </div>

                    <div className="flex mt-12 space-x-3">
                      <button className="w-16 h-10 transition duration-200 transform bg-red-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-red-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-blue-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-blue-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-purple-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-purple-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"></button>
                    </div>

                    <div className="flex mt-12 space-x-3">
                      <button className="w-16 h-10 transition duration-200 transform bg-red-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-red-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-blue-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-blue-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                      <button className="w-16 h-10 transition duration-200 transform bg-purple-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-purple-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                    </div>

                    <div>
                      <div className="inline-flex mt-12 ">
                        {/* <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                        <span className="font-semibold">red</span>
                      </div> */}
                        <div className="flex mt-1 space-x-3">
                          <div className="relative group">
                            <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                              <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Red</span>
                            </div>
                            <button className="w-16 h-10 transition duration-200 transform bg-red-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-red-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                          </div>
                          <div className="relative group">
                            <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                              <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Blue</span>
                            </div>
                            <button className="w-16 h-10 transition duration-200 transform bg-blue-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-blue-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                          </div>
                          <div className="relative group">
                            <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                              <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                                Purple
                              </span>
                            </div>
                            <button className="w-16 h-10 transition duration-200 transform bg-purple-500 rounded-sm shadow cursor-pointer hover:scale-110 hover:shadow-xl active:bg-purple-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="inline-flex mt-12 ">
                        {/* <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                        <span className="font-semibold">red</span>
                      </div> */}
                        <div className="flex mt-1 space-x-3">
                          <div className="relative group">
                            <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                              <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Red</span>
                            </div>
                            <button className="w-16 h-10 transition duration-200 transform rounded-sm shadow cursor-pointer bg-gradient-to-br from-pink-500 to-rose-500 hover:scale-110 hover:shadow-xl active:to-rose-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                          </div>
                          <div className="relative group">
                            <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                              <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Blue</span>
                            </div>
                            <button className="w-16 h-10 transition duration-200 transform rounded-sm shadow cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 hover:scale-110 hover:shadow-xl active:to-blue-600 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                          </div>
                          <div className="relative group">
                            <div className="absolute top-0 w-full text-center transition transform opacity-0 group-hover:-translate-y-7 group-hover:opacity-100">
                              <span className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                                Purple
                              </span>
                            </div>
                            <button className="w-16 h-10 transition duration-200 transform rounded-sm shadow cursor-pointer bg-gradient-to-br from-fuchsia-500 to-purple-600 hover:scale-110 hover:shadow-xl active:to-purple-700 active:scale-95 active:shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 motion-reduce:transition-none"></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="grid self-center flex-none max-w-md grid-cols-3 mt-32">
                      <li>
                        <button
                          type="button"
                          className="relative flex w-24 h-24 rounded-full pt-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-inset focus-visible:ring-gray-400"
                        >
                          <span className="sr-only"></span>
                          <div className="absolute inset-0 transition-transform duration-500 transform bg-gray-200 rounded-full scale-80"></div>
                          <div className="absolute z-10 rounded-full inset-1 sm:inset-2 lg:inset-1 xl:inset-2 bg-gradient-to-br from-pink-500 to-rose-500"></div>
                        </button>
                      </li>

                      <li>
                        <button
                          type="button"
                          className="relative flex w-24 h-24 rounded-full pt-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-inset focus-visible:ring-gray-400"
                        >
                          <span className="sr-only"></span>
                          <div className="absolute inset-0 transition-transform duration-500 transform bg-gray-200 rounded-full scale-80"></div>
                          <div className="absolute z-10 rounded-full inset-1 sm:inset-2 lg:inset-1 xl:inset-2 bg-gradient-to-br from-blue-400 to-blue-500"></div>
                        </button>
                      </li>

                      <li>
                        <button
                          type="button"
                          className="relative flex w-24 h-24 rounded-full pt-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-inset focus-visible:ring-gray-400"
                        >
                          <span className="sr-only"></span>
                          <div className="absolute inset-0 transition-transform duration-500 transform bg-gray-200 rounded-full scale-80"></div>
                          <div className="absolute z-10 rounded-full inset-1 sm:inset-2 lg:inset-1 xl:inset-2 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
                        </button>
                      </li>
                    </ul>

                    <div className="mt-32">
                      <input type="color" list="presetColors" />
                      <datalist id="presetColors">
                        <option value="#f43f5e" />
                        <option value="#3b82f6" />
                        <option value="#a855f7" />
                      </datalist>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </LayoutContent>
      <style jsx>{`
        @media (forced-colors: active) {
          .no-forced-colors-adjust {
            forced-color-adjust: none;
          }
        }
      `}</style>
    </Screen>
  );
}

ColorPicker.shell = Layout;

export default ColorPicker;
