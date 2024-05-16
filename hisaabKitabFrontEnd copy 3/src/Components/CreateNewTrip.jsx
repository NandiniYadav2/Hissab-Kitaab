import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const CreateNewTrip = () => {

 
    const[newTrip, setNewTrip] = useState({
        name:"",
        days:0,
        startDate:"",
        endDate:"",

    });
 
    return(<div className=" px-40 flex flex-col justify-item-center items-center bg-sky-50 w-full h-screen">

             
       <div className="w-3/4 mb-4 mt-10 border  rounded-t-3xl bg-sky-200 bg-sky-50 border-sky-100">
           <div className="px-8  py-5 bg-sky-300 rounded border border-sky-800 shadow-lg h-full shadow-sky-800 ">
               
               <textarea onChange={(e)=>{
                setNewTrip({
                    ...newTrip,
                    name: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm rounded text-sky-900 focus:ring-sky-400 bg-sky-50 border-0 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="Name" required ></textarea>
               <textarea onChange={(e)=>{
                setNewTrip({
                    ...newTrip,
                    days: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm text-center text-justify rounded text-sky-900 focus:ring-sky-400 bg-sky-50 border-0 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="Days" required ></textarea>
               <textarea onChange={(e)=>{
                setNewTrip({
                    ...newTrip,
                    startDate: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm rounded  text-center text-justify text-sky-900 focus:ring-sky-400 bg-sky-50 border-0 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="Start Date." required ></textarea>
               <textarea onChange={(e)=>{
                setNewTrip({
                    ...newTrip,
                    endDate: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 text-sm text-center text-justify pt-2 rounded text-sky-900 focus:ring-sky-400 bg-sky-50 border-0 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="End Date" required ></textarea>
           
           </div>
           
        </div>

        <div>
            <button onClick={async ()=>{
          
              const response = await axios.post(`${BACKEND_URL}/api/trips/createTrip`,newTrip,{
                  headers:{
                      Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
              });
              console.log(response);

              if(response){
                alert("Trip created !!!");
              }
          
      
          
    
          }}class="px-4 py-4 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Create Trip</button>
       </div>
     </div>)
    }
