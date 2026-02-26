import React from "react";

const CardNoticias = ({ noticia }) => {
  return (
    <div className="h-140 lg:h-120 md:h-130 flex flex-col my-1  rounded-md overflow-hidden">
      <div className="h-70 md:h-50 w-full relative">
        <img
          src={noticia.image.url}
          alt={noticia.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-50 md:h-20 py-6  flex flex-col gap-2  grow  ">
        <span className="text-amber-300">
          {" "}
          {new Date(noticia.updatedAt).toLocaleDateString("es-AR")}
        </span>
        <h3 className="text-2xl line-clamp-2">{noticia.title}</h3>
        <p className="text-sm line-clamp-4">
          {noticia.content.split(" ").length > 10
            ? noticia.content.split(" ").slice(0, 10).join(" ") + "..."
            : noticia.content + "..."}
        </p>
        <button className=" py-2 px-10 w-60 mt-auto bg-amber-300 rounded-sm  hover:bg-[#191919] hover:text-white transition duration-300 ease-in-out cursor-pointer">
          Leer más...
        </button>
      </div>
    </div>
  );
};

export default CardNoticias;
