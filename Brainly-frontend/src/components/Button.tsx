import { ReactElement } from "react";

interface ButtonProps{
    variant:"primary"|"secondary";
    text:string;
    starticon:ReactElement;
    onClick?:()=>void;
    full?:boolean;
    loading:boolean
}

const variantClasses={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}

const defaultStyles="px-4 py-2 rounded-md font-light flex items-center"

export function Button({variant,text,starticon,onClick,full,loading}:ButtonProps){
   return (
     <button
       onClick={onClick}
       className={variantClasses[variant] + " " + defaultStyles+`${full? " w-full flex justify-center items-center":"" }`+`${loading? " bg-purple-300":""}`} disabled={loading}
     >
       <div className="pr-2">{starticon}</div>
       {text}
     </button>
   );
     
}