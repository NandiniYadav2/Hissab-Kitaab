import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const MembersCard = ({ 
    userMemberId,
    firstName,
    lastName,
    email,
    age,
    username
       
}) => {
    
        


return<div>
    <div className="flex justify-center bg-sky-100 m-1">

  
<div class="w-full py-2 px-1 bg-sky-800 rounded-lg shadow-md shadow-sky-800 m-1">
        <div class="flex  justify-between items-center">
            <div class="flex flex-col bg-sky-800 pl-6">
                <a class="text-2xl text-white  font-bold hover:text-gray-600">{firstName}  {lastName}</a>
                <span class="font-medium  w-full text-white">Username: {username}</span>
            </div>
            
            
            {/* <button onClick={async ()=>{
                try{
                    const response = await axios.put(`${BACKEND_URL}/api/trips/trip/${tripId}`,{
                        name,
                        days,
                        startDate,
                        endDate,
                        f:1
                    },{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    console.log(response);
                    if(response){
                        alert("Trip deleted!!");
                    }
                }catch(e){
                    alert("something went wrong");
                }
            
                


            }}class="px-4  py-2 mt-2 ml-10 bg-sky-800 text-gray-100 font-bold rounded-xl hover:bg-sky-700" >Delete</button> */}
        </div>
        
       
    </div>
    
    </div>
   </div>
}