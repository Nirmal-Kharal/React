import React from "react";
import { MdContactPage } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { motion } from "motion/react"

const Card = ({data , reference})=> {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 bg-zinc-900/90  px-5 py-10 text-white rounded-[30px] overflow-hidden">
      <MdContactPage className="text-xl   " />
      <p className="text-sm  mt-5 font-semibold leading-tight">
       {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full  left-0 ">
        <div className="flex items-center justify-between py-4 px-8 mb-1">
          <h5 className="text-xs">{data.size}</h5>
          <span className="bg-zinc-200 px-2 py-2 rounded-full flex items-center justify-center  ">
            {data.close? <LuDownload className="text-sm text-[#000]" />:< LuEyeClosed className="text-sm text-[#000]" />}
           
          </span>
        </div>
        {
          data.tag.isOpened&& <div className={`"w-full ${data.tag.tagColor === "teal" ? "bg-teal-600":"bg-blue-700"} px-4 py-4 flex justify-center items-center"`}>
          <h1 className="font-semibold text-sm ">{data.tag.tagTitle}</h1>
        </div>
        }
       
      </div>
    </motion.div>
  );
};

export default Card;
