import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="m-w-screen-xl mx-auto py-10 flex gap-10">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            {" "}
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize font-semibold">
              Socials
            </h4>
            {["Instagran", "twitter (24x7)", "Linkedin"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 capitalize"> {item} </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize font-semibold">
              Socials
            </h4>
            {["Instagran", "twitter (24x7)", "Linkedin"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 capitalize"> {item} </a>
            ))}
          </div>
          <div className="basis-1/2" >
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, facere ducimus! Commodi repudiandae nemo eaque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
