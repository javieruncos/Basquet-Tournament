import { motion } from "framer-motion";

const PortadaNoticias = () => {
  return (
    <div className="relative h-152.5 overflow-hidden flex items-center px-6 md:px-16 text-white mt-15">
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.argentina.basketball/themes/ee/site/default/asset/img/blog/DSC07409.jpg"
          alt="Portada Noticias"
          className="w-full h-full object-cover md:block hidden grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[black] via-[#171717]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-transparent"></div>
      </div>

      <div className="absolute top-0 -left-25 h-full w-50 bg-amber-400/20 skew-x-45 z-10 border-r border-amber-400/30">
        <div className="absolute inset-0 bg-linear-to-t from-[#000000fa] via-[#0a0a0a]/40 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-37.5 h-full w-25 bg-white/5 skew-x-45 z-10">
        <div className="absolute inset-0 bg-linear-to-t from-[#000000c4] via-[#0a0a0a]/40 to-transparent"></div>
      </div>

      <div className="relative z-30 w-full lg:w-auto">
        <motion.div
          className="max-w-5xl h-full flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 mx-auto md:mx-0"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm animate-pulse w-full">
            Actualidad & Novedades
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase italic leading-[0.9] md:leading-none tracking-tighter">
            Noticias del
            <span className="block md:inline text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-500 md:px-3">
              Torneo <br className="hidden lg:block" /> Regional
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl leading-relaxed border-l-0 md:border-l-4 border-amber-400 md:pl-4">
            Mantente al día con los resultados, crónicas de partidos y todo lo
            que sucede en el Torneo Regional Amateur de Tucumán.
          </p>
        
        </motion.div>
      </div>
    </div>
  );
};

export default PortadaNoticias;
