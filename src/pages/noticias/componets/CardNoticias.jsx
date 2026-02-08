import React from "react";

const CardNoticias = () => {
  return (
    <div className="h-140 flex flex-col">
      <div className="h-70 w-full relative">
        <img
          src="https://images.pexels.com/photos/31169292/pexels-photo-31169292.jpeg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-60 pt-6 flex flex-col gap-2  grow">
        <span className="text-amber-300">Sabado 10/10/2026</span>
        <h3 className="text-3xl line-clamp-2">
          Victoria en el Clasico regional amateur , fecha 4 
        </h3>
        <p className="text-sm line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto quod vero repellat recusandae magnam possimus voluptates totam, incidunt esse, facere nisi nam? Perferendis voluptates reprehenderit aut minus hic sed? 
        </p>
      </div>
      <button
        className=" py-2 px-10 w-60 bg-amber-300 rounded-sm  hover:bg-[#191919] hover:text-white transition duration-300 ease-in-out cursor-pointer">
        Leer más...
      </button>
    </div>
  );
};

export default CardNoticias;
