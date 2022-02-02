import React from "react";
import { Fade } from "react-reveal";

export default function Card({ testimonial }) {
  return (
    <Fade>
      <div className="flex flex-col items-center w-64 mx-4 md:mx-8 mb-16">
        <div className="p-1 bg-gradient-to-r border border-black from-green2 to-blue2 rounded-full w-36 h-36 mb-6">
          {/* <img src={image} className='w-36 rounded-full'></img> */}
          {/* <div className='bg-black h-36 w-36 rounded-full'>Imagem</div> */}
        </div>
        {/* <div className="font-black text-xs text-center family-light font-small md:px-2">
          {testimonial}
        </div> */}
      </div>
    </Fade>
  );
}
