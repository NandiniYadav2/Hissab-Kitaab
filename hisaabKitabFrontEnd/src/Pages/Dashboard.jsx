import { useParams } from "react-router-dom"
import { Sidebar } from "../Components/Sidebar"


export const Dashboard = () => {

    const {userId} = useParams();
    return<div>
      
        <Sidebar userId = {userId}/>
    </div>
}