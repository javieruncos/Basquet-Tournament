import React from "react";
import PortadaNoticias from "./componets/PortadaNoticias";
import CardNoticias from "./componets/CardNoticias";

const Noticias = () => {
  const filtros = ["Todas las Noticias", "Masculino", "Femenino", "Juveniles"];
  return (
    <div className="md:px-10 main-container">
      <PortadaNoticias></PortadaNoticias>
      <div className="pt-20 flex gap-2">
        {filtros.map((f, index) => (
          <button className="py-2 px-5 text-white  hover:text-black hover:bg-amber-300 bg-[#191919] transition duration-300 ease-in-out rounded-sm cursor-pointer hover:border-amber-300">
            {f}
          </button>
        ))}
      </div>
      <hr className=" text-gray-200/20 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
        <CardNoticias></CardNoticias>
      </div>
    </div>
  );
};

export default Noticias;
