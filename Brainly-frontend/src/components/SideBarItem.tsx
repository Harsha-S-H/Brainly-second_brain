import { ReactElement } from "react"

export function SideBarItem({icon,text}:{
    icon:ReactElement;
    text:string
}){
    return (
      <div className="flex py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all">
        <div className="pr-2 text-gray-500">{icon}</div>
        <div >{text}</div>
      </div>
    );
}
   