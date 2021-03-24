// import { useForm } from "react-hook-form";
// import React, { useState, useEffect } from "react";

// import LayoutContent from "~/components/console-layout-content";
// import Layout, { useLayout } from "~/components/console-layout";
// import firebase from "~/integrations/firebase";
// import Screen from "~/components/screen";
// import { useRouter } from "next/router";
// import axios from "axios";

// import Link from "~/components/link";

// function Reports({}) {
//   const { query } = useRouter();
//   const { id } = query || {};

//   const [report, setReport] = useState();

//   const { openSidebar } = useLayout();

//   useEffect(() => {
//     if (id) {
//       axios.get(`/api/reports/${id}`).then((response) => {
//         const { report = {} } = response.data || {};
//         setReport(report);
//       });
//     }
//   }, [id]);

//   const onSubmit = async (data) => {
//     await firebase
//       .firestore()
//       .collection("reports")
//       .add({ ...data });
//   };

//   if (report) {
//     return (
//       <Screen title="Show | Reports">
//         <LayoutContent title="Show | Reports">
//           <div className="flex flex-col flex-1 w-0">
//             <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0">
//               <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
//                 <button
//                   className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
//                   aria-label="Open sidebar"
//                   onClick={openSidebar}
//                 >
//                   <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
//                   </svg>
//                 </button>
//                 <div className="flex justify-between flex-1 px-4 md:px-0">
//                   <div className="flex flex-1">
//                     <form className="flex w-full md:ml-0" action="#" method="GET">
//                       <label htmlFor="search_field" className="sr-only">
//                         Search
//                       </label>
//                       <div className="relative w-full text-gray-400 focus-within:text-gray-600">
//                         <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
//                           {/* Heroicon name: search */}
//                           <svg
//                             className="flex-shrink-0 w-5 h-5"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </div>
//                         <input
//                           id="search_field"
//                           className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 rounded-md focus:outline-none focus:placeholder-gray-400 sm:hidden"
//                           placeholder="Search"
//                           type="search"
//                         />
//                         <input
//                           id="search_field"
//                           className="hidden w-full h-full py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 border-none rounded-md focus:ring-0 focus:outline-none focus:placeholder-gray-400 sm:block"
//                           placeholder="Search reports, shift plans, and more"
//                           type="search"
//                         />
//                       </div>
//                     </form>
//                   </div>
//                   <div className="flex items-center ml-4 md:ml-6">
//                     <button className="relative p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
//                       <span className="absolute top-0 right-0 flex w-2.5 h-2.5">
//                         <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
//                         <span className="relative inline-flex w-2 h-2 bg-blue-500 ml-0.25 mt-0.25  mt-0. rounded-full"></span>
//                       </span>
//                       <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                         />
//                       </svg>
//                       <div className="sr-only">Notifications</div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex={0}>
//               <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
//                 <div className="pt-10 pb-16">
//                   <div className="flex items-center px-4 sm:px-6 md:px-0">
//                     <Link href="/reports">
//                       <svg
//                         className="w-6 h-6 text-gray-900 cursor-pointer hover:text-blue-500"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M7 16l-4-4m0 0l4-4m-4 4h18"
//                         />
//                       </svg>
//                     </Link>
//                     <h1 className="ml-2 text-3xl font-extrabold leading-9 text-gray-900">Child Daily Care Record</h1>
//                   </div>
//                   <div className="px-4 sm:px-6 md:px-0">
//                     <div className="py-6">
//                       {/* Description list with inline editing */}
//                       <div className="mt-10">
//                         <div className="space-y-10">
//                           <>
//                             <div className="">
//                               <div className="lg:grid lg:grid-cols-5 lg:gap-6">
//                                 <div className="lg:col-span-2">
//                                   <label
//                                     htmlFor="communication"
//                                     className="text-lg font-medium leading-6 text-gray-900"
//                                   >
//                                     Communication
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     Speach, conversation, use of sign language, Makaton, Picture boards, hearing,
//                                     laughing, non-verbal cues, assistive technology, BIGmac, PEC-picture Exchange,
//                                     Communication System.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-0 lg:col-span-3">
//                                   <div className="">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="communication"
//                                         name="communication"
//                                         rows={5}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report.communication}
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="lg:grid lg:grid-cols-5 lg:gap-6">
//                                 <div className="lg:col-span-2">
//                                   <label htmlFor="cognition" className="text-lg font-medium leading-6 text-gray-900">
//                                     Cognition
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     Confusion, understanding, sleepy, decision-making/making choices.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-0 lg:col-span-3">
//                                   <div className="">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="cognition"
//                                         name="cognition"
//                                         rows={4}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report.cognition}
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="lg:grid lg:grid-cols-5 lg:gap-6">
//                                 <div className="lg:col-span-2">
//                                   <label htmlFor="behaviour" className="text-lg font-medium leading-6 text-gray-900">
//                                     Behaviour
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     Physically/verbally aggressive, behaviour viewed as inappropriate, age inappropriate
//                                     behaviour.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-0 lg:col-span-3">
//                                   <div className="">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="behaviour"
//                                         name="behaviour"
//                                         rows={4}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report.behaviour}
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="lg:grid lg:grid-cols-5 lg:gap-6">
//                                 <div className="lg:col-span-2">
//                                   <label
//                                     htmlFor="family-and-friends-feedback"
//                                     className="text-lg font-medium leading-6 text-gray-900"
//                                   >
//                                     Family and friends feedback
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     Please include "quotes" and responses.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-0 lg:col-span-3">
//                                   <div className="">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="family-and-friends-feedback"
//                                         name="family-and-friends-feedback"
//                                         rows={4}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report["familyAndFriendsFeedback"]}
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="lg:grid lg:grid-cols-5 lg:gap-6">
//                                 <div className="lg:col-span-2">
//                                   <label
//                                     htmlFor="prn-or-additional-medications"
//                                     className="text-lg font-medium leading-6 text-gray-900"
//                                   >
//                                     Mediacation
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     PRN or any additional prescribed medications - why was this given, double check
//                                     mediacation records are complete, stock control.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-0 lg:col-span-3">
//                                   <div className="grid gap-2">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="prn-or-additional-medications"
//                                         name="prn-or-additional-medications"
//                                         rows={5}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report["prnOrAdditionalMedications"]}
//                                       />
//                                     </div>
//                                     <div className="flex flex-row items-center">
//                                       <input
//                                         type="checkbox"
//                                         id="prn-effective"
//                                         name="prn-effective"
//                                         className="form-checkbox"
//                                         readOnly
//                                         defaultValue={report["prn-effective"]}
//                                       />
//                                       <label
//                                         htmlFor="prn-effective"
//                                         className="block ml-2 text-xs font-medium leading-5 text-gray-700"
//                                       >
//                                         PRN mediacation was given effective.
//                                       </label>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="lg:grid lg:grid-cols-5 lg:gap-6">
//                                 <div className="lg:col-span-2">
//                                   <label htmlFor="significant" className="text-lg font-medium leading-6 text-gray-900">
//                                     Other significant care needs
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     Seizures, consciousness, Automatic Dysreflexia, Diabetes control, temperature.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-0 lg:col-span-3">
//                                   <div className="">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="significant"
//                                         name="significant"
//                                         rows={4}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report["significant"]}
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="lg:grid lg:grid-cols-5 lg:gap-6">
//                                 <div className="lg:col-span-2">
//                                   <label htmlFor="escalated" className="text-lg font-medium leading-6 text-gray-900">
//                                     Have tou escalated any abnormalities r.g. changes from care plan or child incidents
//                                     e.g. Falls, pressure injuries
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     If so, to whom, what, when what was the outcome? All falls and changes to skin
//                                     should be reported by phone to the office asap.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-0 lg:col-span-3">
//                                   <div className="">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="escalated"
//                                         name="escalated"
//                                         rows={6}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report["escalated"]}
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="lg:grid">
//                                 <div className="">
//                                   <label
//                                     htmlFor="additional-notes"
//                                     className="text-lg font-medium leading-6 text-gray-900"
//                                   >
//                                     Additional Notes
//                                   </label>
//                                   <p className="mt-1 text-sm leading-5 text-gray-500">
//                                     If so, to whom, what, when what was the outcome? All falls and changes to skin
//                                     should be reported by phone to the office asap.
//                                   </p>
//                                 </div>
//                                 <div className="mt-5 lg:mt-2">
//                                   <div className="">
//                                     <div className="rounded-md shadow-sm">
//                                       <textarea
//                                         id="additional-notes"
//                                         name="additional-notes"
//                                         rows={8}
//                                         className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                         readOnly
//                                         defaultValue={report["additionalNotes"]}
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="">
//                               <div className="gap-4 lg:grid lg:grid-cols-3">
//                                 <div className="mt-5 rounded-md shadow-sm lg:mt-0">
//                                   <label htmlFor="date" className="block text-xs font-medium leading-5 text-gray-700">
//                                     Date
//                                   </label>
//                                   <input
//                                     type="text"
//                                     id="date"
//                                     name="date"
//                                     className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                     readOnly
//                                     defaultValue={report["date"]}
//                                   />
//                                 </div>

//                                 <div className="mt-5 rounded-md shadow-sm lg:mt-0">
//                                   <label
//                                     htmlFor="prn-or-additional-medications"
//                                     className="block text-xs font-medium leading-5 text-gray-700"
//                                   >
//                                     Time of shift
//                                   </label>
//                                   <input
//                                     type="text"
//                                     id="time-of-shift"
//                                     name="time-of-shift"
//                                     className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                     readOnly
//                                     defaultValue={report["timeOfShift"]}
//                                   />
//                                 </div>

//                                 <div className="mt-5 rounded-md shadow-sm lg:mt-0">
//                                   <label
//                                     htmlFor="prn-or-additional-medications"
//                                     className="block text-xs font-medium leading-5 text-gray-700"
//                                   >
//                                     Full Name
//                                   </label>
//                                   <input
//                                     type="text"
//                                     id="full-name"
//                                     name="full-name"
//                                     className="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
//                                     placeholder=""
//                                     readOnly
//                                     defaultValue={report["fullName"]}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </LayoutContent>
//       </Screen>
//     );
//   } else {
//     return <></>;
//   }
// }

// Reports.shell = Layout;

// export default Reports;
