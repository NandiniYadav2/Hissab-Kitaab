import { BACKEND_URL } from "../config";
import { useState } from "react";
import axios from "axios";
import { mainAlgo } from "./MainAlgo";

export const ExpenseCard = ({ 
    
    expensename,
    transaction,
    userIdExpense,
    expenseId,
    tripId,
    addTransaction
       
}) => {

    const [transactionsList , setTransactionList] = useState([]);
    const [finalStrings , setFinalString] = useState([]);

    const[newTransaction , setNewTransaction] = useState({
        payee:"",
        amountPaid:0,
        userId:0
    });
    const[visibleAddTransaction, setVisibleAddTransaction] = useState(0);
    const[visiblefinalString , setVisibleFinalString] = useState(0);
    function addTransaction(){
        setVisibleAddTransaction(1);
    }

   

    const settleUpNow = async ()=>{
        const responseTransactions = await axios.get(`${BACKEND_URL}/api/expenses/${expenseId}/allTransactions`);
        console.log(responseTransactions.data);
        setTransactionList((t)=>responseTransactions.data);
        console.log(transactionsList);
        
        const finalString  = mainAlgo(transactionsList);
        console.log(finalString);
        setFinalString(finalString);
       
        setVisibleFinalString(1);
        
        

    }
    
        


return<div>
    <div className="flex justify-center bg-sky-800  rounded m-2 shadow-md shadow-sky-800">

  
<div class="w-full m-2 pl-4 pr-5 m-4 py-6 bg-sky-100 rounded-lg shadow-md shadow-sky-800">
        <div class="flex justify-between items-center ">
            <div class="w-1/2 p-2 border-solid border-b-4 border-sky-900 bg-sky-200 shadow-md shadow-sky-800">
                <span class="text-2xl text-gray-700 font-bold hover:text-gray-600 ">{expensename}</span>
             
            </div>
            <div>
              <button  onClick={addTransaction} className="px-4 py-2 mt-2 ml-10 mr-2 bg-sky-800 text-gray-100 font-bold rounded-xl hover:bg-sky-700" >Create Transaction</button>
         
            
            
            <button onClick={async ()=>{
                try{
                    const response = await axios.put(`${BACKEND_URL}/api/expenses/${tripId}/${expenseId}/updateExpense`,{
                        name:expensename,
                        userId:userIdExpense,
                        f:1,
                        transaction
                        
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
            
                


            }} className="px-4 py-2 mt-2  bg-sky-800 text-gray-100 font-bold rounded-xl hover:bg-sky-700" >Delete</button>
             </div>
        </div>
        <div className=" my-5 pl-2 bg-sky-100">
            {transaction && transaction.map((t)=>(<>
                <p className="my-2 text-sky-900 font-md p-1">{t.payee} paid   Rs.{t.amountPaid} </p>
                
            </>))}
            
        </div>
        <div className="flex justify-end">
            <button onClick={settleUpNow} className="px-4 py-2 mt-2 ml-10 bg-sky-800 text-gray-100 font-bold rounded-xl hover:bg-sky-700">Settle</button>
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


  


   
    
        <div className ={`${visiblefinalString === 1 ? "block" : "hidden"} visible fixed inset-0 px-40 bg-sky-500/25 backdrop-blur-sm flex flex-col  justify-center items-center `}>
        
       <div className="shadow-lg shadow-sky-800 bg-sky-900">
        
       <div className=" m-2  flex  bg-sky-200 ">
       
          <div className="px-8 py-5 m-2 shadow bg-sky-900">

           {finalStrings.length>0 && finalStrings.map((stringOne,index)=>(
                <div className="border border-sky-600 rounded-2xl bg-sky-200 p-3 px-4 m-1" >{index+1}.  {stringOne}</div>
             ))}  
             
         </div>
         <div className="bg-sky-200 pr-1">
           <button onClick={()=>{
              setVisibleFinalString(0);
           }}>X</button> 
         </div>
      
         
      </div>

      
     </div>
   
   </div>
    
   
   </div>
}



