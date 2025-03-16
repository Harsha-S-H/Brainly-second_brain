import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import { Inputbox } from "./Inputbox";
import { BACKEND_URL } from "../pages/config";
import axios from "axios";

enum contentType{
    Youtube="youtube",
    Twitter="twitter"
}


export function CreateCardModal({open,onClose}){
    const titleRef=useRef<HTMLInputElement>();
    const linkRef=useRef<HTMLInputElement>();
    const[type,setType]=useState(contentType.Youtube)
    
    async function content(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        await axios.post(BACKEND_URL+"/api/v1/content",{
            title,
            link,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })

      onClose()
    }

    return (
      <div>
        {open && (
          <div>
            <div className="bg-slate-500 fixed top-0 left-0 h-screen w-screen opacity-60 flex justify-center"></div>
            <div className=" fixed top-0 left-0 h-screen w-screen flex justify-center">
              <div className="flex flex-col justify-center">
                <span className="bg-white p-4 opacity-100 rounded ">
                  <div
                    className="flex justify-end cursor-pointer"
                    onClick={onClose}
                  >
                    <CloseIcon />
                  </div>
                  <div>
                    <Inputbox reference={titleRef} placeholder="Title" />
                    <Inputbox reference={linkRef} placeholder="Link" />
                  </div>
                  <h1>Type</h1>
                  <div className="flex gap-2 p-4 justify-center">
                    <Button
                      onClick={() => {
                        setType(contentType.Youtube);
                      }}
                      text="Youtube"
                      variant={
                        type === contentType.Youtube ? "primary" : "secondary"
                      }
                    />
                    <Button
                      onClick={() => {
                        setType(contentType.Twitter);
                      }}
                      text="Twitter"
                      variant={
                        type === contentType.Twitter ? "primary" : "secondary"
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button onClick={content} text="Submit" variant="primary" />
                  </div>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}