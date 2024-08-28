import { Heart } from "lucide-react"
import { CommentLogo } from "../../assets/constants"
import { useState } from "react"


const ProfilePost = ({postPicURL , likes,comments}) => {
  let [showHover ,setShowHover ]= useState(false);
  return (
    <div className='relative h-[300px] w-[95%] flex-shrink-0 sm:w-[47%]  lg:w-[47%] '  onMouseEnter={()=>{setShowHover(true)}} onMouseLeave={()=>{setShowHover(false)}}>
        <img className='relative h-full w-full object-cover' src={postPicURL} alt="" />

        <div className={` h-full w-full absolute left-0 top-0 z-20 bg-black-10 flex items-center justify-center gap-4 ${!showHover? "opacity-0": "opacity-100"} `}>
         <div className="flex items-center  gap-2 "> <Heart fill="white"/><span>{likes}</span> </div>
         <div className="flex items-center  gap-2"> <CommentLogo fill={"white"} /><span>{comments}</span></div>
        </div>
    </div>
  )
}

export default ProfilePost