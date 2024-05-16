import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Login = () => {
       const navigate = useNavigate();
       const [postInputs, setPostInputs] = useState({
           usernameOrEmail: "",
           password: ""
        });
  
        const [user , setUser] = useState({});

        async function sendRequest() {
       
            try {
                const response = await axios.post(`${BACKEND_URL}/api/auth/signin`, postInputs);
                const jwt = response.data;

                console.log(jwt);
                
                localStorage.setItem("token", jwt.accessToken);

                const userResponse = await axios.get(`${BACKEND_URL}/api/users/user/${postInputs.usernameOrEmail}`);
                const user = userResponse.data;
                if(user){
                    navigate(`/dashboard/${user.id}`);
                }
                
            } catch(e) {
                alert("Error while signing up1")
            }
        }

        return <div className="h-screen flex justify-center flex-col bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1657272067/photo/blank-business-card-templates-with-clipping-path.jpg?s=612x612&w=0&k=20&c=LiO8LDXL5U5Aj2GrO6Wf-pPblwZ2J8rguZPyd4lwAfU=')"}}> 
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold text-center text-sky-600">
                        Sign In
                    </div>
                    <div className="text-slate-500">
                        Don't have an account?
                        <Link className="pl-2 underline text-sky-400" to={"/signup"}>
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    
                    <LabelledInput label="User Name" placeholder="nandini21" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            usernameOrEmail: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                   

                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white  bg-sky-600 hover:sky-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:bg-sky-700 focus:ring-sky-700 border-sky-700">Sign in</button>
                </div>
            </div>
        </div>
    </div>
}



function LabelledInput({ label, placeholder, onChange , type}) {
    return <div>
        <label className="block mb-2 text-md text-sky-800 font-bold pt-4">{label}</label>
        <input onChange={onChange}  className="bg-gray-50 border border-sky-500 border-2 text-gray-900 text-sm rounded-lg focus:ring-teal-400 focus:border-teal-400 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}
