import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function SideBar(){
    return (
      <div className="fixed top-0 left-0 bg-white w-72 h-screen border-r pl-6 ">
        <div className=" flex text-2xl font font-medium  pt-8">
          <div className="pr-2 text-purple-600">
            <BrainIcon />
          </div>
          Brainley
        </div>

        <div className="pt-8 pl-4">
          <SideBarItem icon={<TwitterIcon />} text="Twitter" />
          <SideBarItem icon={<YoutubeIcon />} text="Youtube" />
        </div>
      </div>
    );
}