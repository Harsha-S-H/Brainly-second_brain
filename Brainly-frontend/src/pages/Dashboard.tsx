import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateCardModal } from '../components/CreateCardModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from './config'


export function Dashboard() {
  const [openModel,setOpenModel]=useState(false);
  const {contents,refresh}=useContent();
  
  
console.log(contents)

  useEffect(()=>{
  refresh()
  },[openModel])


  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateCardModal
          open={openModel}
          onClose={() => {
            setOpenModel(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setOpenModel(true);
            }}
            variant="primary"
            text="Add-content"
            starticon={<PlusIcon />}
          ></Button>
          <Button
            onClick={async ()=>{
             const response=await axios.post(
               BACKEND_URL + "/api/v1/brain/share",
               {share:true},
               {
                 headers: {
                   Authorization: localStorage.getItem("token"),
                 },
               }
             );
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            variant="secondary"
            text="Share"
            starticon={<ShareIcon />}
          ></Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          
          {contents.map(({ type, link, title }) => (
            <Card type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}


