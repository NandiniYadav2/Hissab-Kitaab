import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


 export const PreviousTrip = ({userId}) => {
    const [allTrips, setAllTrips] = useState([]);

    async function postyy(){
        
        const response = await axios.get(`${BACKEND_URL}/api/trips/allTrips`);
        console.log(response.data);
        
        setAllTrips(response.data);
        
    }

    useEffect(() => {
        
        postyy();
        
    },[]);
    console.log(allTrips);

    return(
        <div className="mt-10 bg-sky-50 w-full h-screen">

        {allTrips && allTrips.map((trip,index)=>{

            if(trip.f == 0){

                return(
                    <div className="bg-sky-50">
                       
                        
                        <TripCard  name={trip.name} days={trip.days} startDate={trip.startDate} endDate={trip.endDate} tripId={trip.id} userId={userId} groupID={trip.groupId}/>
             
    
                    </div>
                   ) 
            }
  
        })}

        </div>
    )


 }


 export const TripCard = ({ 
    
    name,
    days,
    startDate,
    endDate,
    tripId,
    userId,
    groupID
       
}) => {
    
        


return<div className="bg-sky-50">
    <div className="flex justify-center bg-sky-50  w-full">

  
<div class="w-1/2 pl-4 pr-5 my-4 py-6 bg-sky-200 rounded-lg shadow-md shadow-sky-800">
        <div class="flex justify-between items-center">
            <div class="mt-2 pl-6">
                <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href={`/singleTrip/${tripId}/${groupID}/${userId}`}>{name}</a>
                <span class="font-light px-4 text-gray-600">{startDate}</span>
            </div>
            
            
            <button onClick={async ()=>{
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
            
                


            }}class="px-4  py-2 mt-2 ml-10 bg-sky-800 text-gray-100 font-bold rounded-xl hover:bg-sky-700" >Delete</button>
        </div>
        
       
    </div>
    
    </div>
   </div>
}



