import { useRef } from "react";
import { Button } from "../components/Button";
import { Inputbox } from "../components/Inputbox";
import { BACKEND_URL } from "./config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
     const usernameRef = useRef<HTMLInputElement>();
     const passwordRef = useRef<HTMLInputElement>();
     const navigate=useNavigate();

     async function signin() {
       const username = usernameRef.current?.value;
       const password = passwordRef.current?.value;
       const response=await axios.post(BACKEND_URL + "/api/v1/signin", {
         username,
         password,
       });
       const jwt=response.data.token
       
       localStorage.setItem("token",jwt)
       navigate("/dashboard")
     }
    return (
      <div className="w-screen h-screen bg-slate-400 top-0 left-0  flex justify-center items-center ">
        <div className="bg-white p-8 rounded">
          <div>
            <Inputbox reference={usernameRef} placeholder="Username" />
            <Inputbox reference={passwordRef} placeholder="Password" />
          </div>
          <div className="flex justify-center pt-2">
            <Button onClick={signin} text="Signin" variant="primary" full={true} loading={false} />
          </div>
        </div>
      </div>
    );
}