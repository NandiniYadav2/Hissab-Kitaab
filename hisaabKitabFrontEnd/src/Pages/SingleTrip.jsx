import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";
import { CreateGroup } from "../Components/CreateGroup";
import { CreateExpense } from "../Components/CreateExpense";
import { CreateTransaction } from "../Components/CreateTransaction";

export const SingleTrip = () => {
    const {tripId,groupID ,userId} = useParams();
    return(
        <div className="flex flex-col bg-red-500">
        <CreateGroup tripId = {tripId} userId={userId} groupID={groupID}/>
        <CreateExpense tripId = {tripId} />
        <CreateTransaction tripId = {tripId}/>
        </div>
    )
}
