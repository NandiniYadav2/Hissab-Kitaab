import { BACKEND_URL } from "../config";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { CreateTransaction } from "./CreateTransaction";
import { ExpenseCard } from "./ExpenseCard";
import { MembersCard } from "./MembersCard";
import { useNavigate } from "react-router-dom";

export const CreateGroup = ({tripId ,groupID,userId}) => {
     console.log(groupID);
    // const [groupId , setGroupId] = useState(groupID);
    const navigate = useNavigate();
    const [expenseId , setExpenseId]= useState();
    const [groupMembersList , setGroupMemberList] = useState([]);
    const [expenseList , setExpenseList] = useState([]);
    
    const[newGroup, setNewGroup] = useState({
        name:""
    
    });

    const[newMember , setNewMember] = useState({
        username:""
    });
    const[newExpense , setNewExpense] = useState({
        name:"",
        userId
    });
    const[newTransaction , setNewTransaction] = useState({
        payee:"",
        amountPaid:0,
        userId:0
    });
    

    const[visibleGroup , setVisibleGroup] = useState(0);
    const[visibleAddMember, setVisibleAddMember] = useState(0);
    const[visibleAddExpense, setVisibleAddExpense] = useState(0);
    const[visibleAddTransaction, setVisibleAddTransaction] = useState(0);
    
    function createGroup(){
         setVisibleGroup(1);
    }
    function addMembers(){
        setVisibleAddMember(1);
    }
    function addExpense(){
        setVisibleAddExpense(1);
    }
    function addTransaction(){
        setVisibleAddTransaction(1);
    }

    async function fetchMembers(){
          
        console.log(groupID);
        // console.log(groupId);
       
           const responseMembers = await axios.get(`${BACKEND_URL}/api/groups/${tripId}/${groupID}`);
           
          
          setGroupMemberList((m)=>responseMembers.data);
           
           console.log(groupMembersList);
        
    }

    useEffect(()=>{
        
        if(groupID){
            fetchMembers();
        }
        
    },[newMember]);

    async function fetchExpenses(){
       
        const responseExpenseList = await axios.get(`${BACKEND_URL}/api/expenses/${groupID}/allExpenses`);
        console.log(responseExpenseList.data);
        if(responseExpenseList){
           setExpenseList(responseExpenseList.data);
        }
        
    }

    useEffect(()=>{
        fetchExpenses();
    },[newExpense]);

    
    

    return(
    <div className="bg-sky-50 w-screen h-screen">
        <div className="flex grid grid-cols-6 h-full w-full">

        <div className="col-span-1 bg-sky-50 h-full flex flex-col border border-8 border-sky-900" >
            <button  onClick={createGroup} className="px-4 py-4 m-5 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Create Group</button>
       </div>
       
       <div className="col-span-4 bg-sky-50 h-full w-full flex flex-col justify-items-center items-center bg-sky-100 h-full border border-8 border-sky-900">
           <button  onClick={addExpense} className="px-8 py-4 m-5 bg-sky-800 items-center text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Add Expense</button>
           {expenseList && expenseList.map((expenseOne,index)=>{

                    if(expenseOne.f == 0){

                        return(
                            <div className="w-full m-2">
                            
                                
                                <ExpenseCard  expensename={expenseOne.name} userIdExpense={expenseOne.userId} transaction={expenseOne.transaction} tripId={tripId} expenseId={expenseOne.id} addTransaction={addTransaction}/>


                        </div>
                    ) 
                    }

                })}
           {/* <div>
              <button  onClick={addTransaction} className="px-4 py-4 m-5 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Create Transaction</button>
          </div> */}
       </div>

       <div className="col-span-1 h-full flex flex-col bg-sky-50 h-full border border-8 border-sky-900 ">
           <button  onClick={addMembers} className="px-4 py-4 m-5 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Add Members</button>
         {groupMembersList.map((member,index)=>{

                        return(
                            <div>
                           
                                
                                <MembersCard  firstName={member.firstName} lastName={member.lastName} username={member.username} userMemberId={member.id} email={member.email} age={member.age}/>
                    

                            </div>
                        ) 
                    
            })}
       </div>
       

        </div>
   









    <div className ={`${visibleGroup === 1 ? "block" : "hidden"} visible fixed inset-0 px-40 bg-sky-500/25 backdrop-blur-sm flex flex-col  justify-center items-center `}>
       
         <div className="shadow-lg shadow-sky-800 bg-sky-400">  
       <div className=" mb-2  flex  rounded-t-3xl  bg-sky-200 ">
          
           <div className="px-8 py-5 bg-sky-100 shadow dark:bg-sky-400">
               
               <textarea onChange={(e)=>{
                setNewGroup({
                    ...newGroup,
                    name: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm rounded text-sky-900 focus:ring-sky-400 bg-sky-50 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="Group Name" required ></textarea>
               
           </div>
           <div className="bg-sky-400 pr-1">
             <button onClick={()=>{
                setVisibleGroup(0);
             }}>X</button> 
           </div>
        
           
        </div>

        <div className="flex justify-center pb-1">
            <button onClick={async ()=>{
          
              const response = await axios.post(`${BACKEND_URL}/api/groups/${tripId}/createGroup`,newGroup,{
                  headers:{
                      Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
              });
              console.log(response);
              if(response){
                // setGroupId(response.data.id);
                navigate(`/singleTrip/${tripId}/${response.data.id}/${userId}`);
              }
              setVisibleGroup(0);

              if(response){
                alert("Group created !!!");
              }
          
          }}class="px-4 py-3 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Create Group</button>
       </div>
       </div>
     </div>

     <div className ={`${visibleAddMember === 1 ? "block" : "hidden"} visible fixed inset-0 px-40 bg-sky-500/25 backdrop-blur-sm flex flex-col  justify-center items-center `}>
       
         <div className="shadow-lg shadow-sky-800 bg-sky-400">  
       <div className=" mb-2  flex  rounded-t-3xl  bg-sky-200 ">
          
           <div className="px-8 py-5 bg-sky-100 shadow dark:bg-sky-400">
               
               <textarea onChange={(e)=>{
                setNewMember({
                    ...newMember,
                    username: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm rounded text-sky-900 focus:ring-sky-400 bg-sky-50 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="New Member User Name" required ></textarea>
               
           </div>
           <div className="bg-sky-400 pr-1">
             <button onClick={()=>{
                setVisibleAddMember(0);
             }}>X</button> 
           </div>
        
           
        </div>

        <div className="flex justify-center pb-1">
            <button onClick={async ()=>{

              const userDataResponse = await axios.get(`${BACKEND_URL}/api/users/user/${newMember.username}`);
              console.log(userDataResponse.data);
              
          
              const response = await axios.post(`${BACKEND_URL}/api/groups/${tripId}/${groupID}/addUser/${userDataResponse.data.id}`,newGroup,{
                  headers:{
                      Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
              });
              console.log(response);
              setVisibleAddMember(0);

              if(response){
                alert("Member Added !!!");
              }
          
          }}class="px-4 py-3 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Add Member</button>
       </div>
       </div>
     </div>

     <div className ={`${visibleAddExpense === 1 ? "block" : "hidden"} visible fixed inset-0 px-40 bg-sky-500/25 backdrop-blur-sm flex flex-col  justify-center items-center `}>
       
         <div className="shadow-lg shadow-sky-800 bg-sky-400">  
       <div className=" mb-2  flex  rounded-t-3xl  bg-sky-200 ">
          
           <div className="px-8 py-5 bg-sky-100 shadow dark:bg-sky-400">
               
               <textarea onChange={(e)=>{
                setNewExpense({
                    ...newExpense,
                    name: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm rounded text-sky-900 focus:ring-sky-400 bg-sky-50 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="Expense" required ></textarea>
               
           </div>
           <div className="bg-sky-400 pr-1">
             <button onClick={()=>{
                setVisibleAddExpense(0);
             }}>X</button> 
           </div>
        
           
        </div>

        <div className="flex justify-center pb-1">
            <button onClick={async ()=>{
          
              const response = await axios.post(`${BACKEND_URL}/api/expenses/${groupID}/createExpense`,newExpense,{
                  headers:{
                      Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
              });
              console.log(response);
              if(response){
                setExpenseId((ex)=>response.data.id);
              }
              setVisibleAddExpense(0);

              if(response){
                alert("Expense created !!!");
              }
          
          }}class="px-4 py-3 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Add Expense</button>
       </div>
       </div>
     </div>
     

     <div className ={`${visibleAddTransaction === 1 ? "block" : "hidden"} visible fixed inset-0 px-40 bg-sky-500/25 backdrop-blur-sm flex flex-col  justify-center items-center `}>
       
         <div className="shadow-lg shadow-sky-800 bg-sky-400">  
       <div className=" mb-2  flex  rounded-t-3xl  bg-sky-200 ">
          
           <div className="px-8 py-5 bg-sky-100 shadow dark:bg-sky-400">
               
               <textarea onChange={(e)=>{
                setNewTransaction({
                    ...newTransaction,
                    payee: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm rounded text-sky-900 focus:ring-sky-400 bg-sky-50 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="Payee Name" required ></textarea>
                <textarea onChange={(e)=>{
                setNewTransaction({
                    ...newTransaction,
                    amountPaid: e.target.value
                });
               }} rows="2" className="w-full px-4 my-2 pt-2 text-sm rounded text-sky-900 focus:ring-sky-400 bg-sky-50 dark:bg-sky-100 focus:ring-2 dark:text-sky-800 dark:placeholder-sky-800" placeholder="Amount Paid" required ></textarea>
               
           </div>
           <div className="bg-sky-400 pr-1">
             <button onClick={async()=>{
               setVisibleAddTransaction(0);
             }}>X</button> 
           </div>
        
           
        </div>

        <div className="flex justify-center pb-1">
            <button onClick={async ()=>{

                const userExpenseResponse = await axios.get(`${BACKEND_URL}/api/users/user/${newTransaction.payee}`);
                console.log(userExpenseResponse.data);
               
               
                setNewTransaction(
                    {
                        ...newTransaction,
                        userId:userExpenseResponse.data.id
                    }
                    
                );

                console.log(newTransaction);

                const transactionResponse = await axios.post(`${BACKEND_URL}/api/expenses/${tripId}/${expenseId}/addTransaction`,{
                    payee:newTransaction.payee,
                    amountPaid:newTransaction.amountPaid,
                    userId:userExpenseResponse.data.id
                },{

                    headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                });
              console.log(transactionResponse);
              setVisibleAddTransaction(0);

              if(transactionResponse){
                alert("TransactionCreated created !!!");
              }
          
          }}class="px-4 py-3 bg-sky-800 text-gray-100 font-extrabold rounded-xl hover:bg-sky-500" >Add Transaction</button>
       </div>
       </div>
     </div>
     
     </div>)
    }



