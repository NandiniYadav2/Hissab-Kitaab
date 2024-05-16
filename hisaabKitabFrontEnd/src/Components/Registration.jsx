import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Registration = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        firstName: "",
        lastName:"",
        username: "",
        password: "",
        email: "",
        age:""
       
        
    });

    // function sendRequest(){
    //     navigate("/doctordashboard");
    // }

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/register`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);

            navigate("/");

        } catch(e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }
    

    return <div className="h-screen flex justify-center flex-col bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1657272067/photo/blank-business-card-templates-with-clipping-path.jpg?s=612x612&w=0&k=20&c=LiO8LDXL5U5Aj2GrO6Wf-pPblwZ2J8rguZPyd4lwAfU=')" }}>
        <div className="flex justify-center">
            <div className=" w-7/12 flex justify-center flex-col">
                <div className="px-10 ">
                    <div className="text-3xl font-extrabold text-center text-sky-600">
                        Sign Up
                    </div>
                    <div className="text-slate-500 text-center">
                        Already have an account?
                        <Link className="pl-2 underline text-sky-400" to={"/"}>
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="flex pt-8 justify-between">
                    
                    <LabelledInput label="First Name" placeholder="Joe" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            firstName: e.target.value
                        })
                    }} />
                    <LabelledInput label="Last Name"  placeholder="warn" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            lastName: e.target.value
                        })
                    }} />
                   
                </div>
                <div className="flex pt-8 justify-between">
                    
                    <LabelledInput label="User Name" placeholder="Joe21" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelledInput label="Age"  placeholder="22" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            age: e.target.value
                        })
                    }} />
                   
                </div>
                <div className="flex pt-8 justify-between">
                    
                    <LabelledInput label="Email" placeholder="abc@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    
                   <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                     
                </div>
                
               
               
                <div className="flex justify-center mt-8">
                <button onClick={sendRequest} type="button" className="mt-8 w-3/12 text-white  bg-sky-600 hover:sky-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-700 dark:border-sky-700">Sign Up</button>


                </div>
            </div>
        </div>
    </div>
}



function LabelledInput({ label, placeholder, onChange , type}) {
    return <div className="w-5/12">
        <label className="block mb-2 text-md text-sky-800 font-bold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"}  className="bg-gray-50 border border-sky-500 border-2 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}



