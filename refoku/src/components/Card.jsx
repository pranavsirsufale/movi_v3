import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width, start=false,para=false , hover}) {
  return (
    <div className={`${width} bg-zinc-800 hover:${hover} p-5 rounded-xl min-h-[27rem] flex flex-col justify-between`}>
      <div>
        <div className="w-full flex justify-between items-center">
          <h3> one heading </h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5" > Whatever heading .</h1>
      </div>
        <div className="down w-full ">

            {
                start === true && (<>
                
                <h1 className="text-6xl font-semibold tracking-tight leading-none"> start a Project </h1>
                <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5"> Contact Us </button>
                </>)
            }
            {
                para && (
                    <p className="text-sm text-zinc-700 font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                )
            }
        </div>

    </div>
  );
}

export default Card;
