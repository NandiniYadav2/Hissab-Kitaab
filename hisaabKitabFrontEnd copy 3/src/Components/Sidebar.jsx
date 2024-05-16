import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg"
import {Login} from "../Components/Login"

import { useState } from "react";
import { CreateNewTrip } from "./CreateNewTrip";
import { PreviousTrip } from "./PreviousTrips";


export const Sidebar = ({userId}) => {
   const[option , setOption] = useState(2);
    return<div>
      
Dashboard
<nav className="fixed top-0 z-50 w-full bg-black border-b border-gray-200 bg-sky-400  dark:bg-sky-300 dark:border-gray-100">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <Link to={"/signin"} className="flex ms-2 md:me-24"/> */}
          <img src={reactLogo} className="h-8 me-3" alt=" Logo" />
          <span className="self-center text-xl font-serif font-extrabold sm:text-3xl whitespace-nowrap dark:text-gray-800">Hisaab Kitab</span>
       
      </div>
      Dashboard
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            {/* <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="user photo"/>
              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" >
              
          </div> */}
        </div>
    </div>
  </div>
  </div>
</nav>

<aside  className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-sky-800 border-r  sm:translate-x-0 border-sky-100" aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-sky-400 dark:bg-sky-800">
      <ul className="space-y-2 font-medium">
         <li>
            <button onClick={()=>{
               setOption(1);
            }}className="flex items-center p-2  w-full rounded-lg text-white hover:bg-sky-300 ">
              
               <svg className="flex-shrink-0 w-5 h-5 text-sky-200 transition duration-75 group-hover:text-sky-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="ms-3  text-sky-200 hover:text-sky-800">Create New Trip</span>
            </button>
         </li>
         
         <li>
            <button onClick={()=> {
               setOption(2);
            }} className="flex items-center p-2  w-full rounded-lg text-white hover:bg-sky-300 group">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-sky-200 transition duration-75 group-hover:text-sky-800 w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
               <span className="ms-3  text-sky-200 hover:text-sky-800">Previous Trip</span>
              
            </button>
         </li>
        
        
        
         <li>
            <a href="/" className="flex items-center p-2  w-full rounded-lg text-white hover:bg-sky-300 group">
               <svg className="flex-shrink-0 w-5 h-5 text-sky-200 transition duration-75 group-hover:text-sky-800 w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="ms-3  text-sky-200 hover:text-sky-800">Logout</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64">
    
    <div className="w-full"><Desktop option={option} userId={userId}/></div>
   
</div>

</div>
}


const Desktop = ({option , userId}) => {
   if(option === 1){
      return<div>
         <CreateNewTrip/>
     </div>
   }
   if(option === 2){
      return<div>
        <PreviousTrip userId={userId}/>
     </div>
   }
   if(option === 3){
      return<div>
       <Login/>
        
     </div>
   }
   
   

  
}