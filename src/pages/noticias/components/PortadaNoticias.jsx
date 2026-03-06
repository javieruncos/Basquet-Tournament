import { motion } from "framer-motion";

const PortadaNoticias = () => {
  return (
    <div className="mt-10 h-145 rounded-xl relative overflow-hidden bg-[#171717]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/31169292/pexels-photo-31169292.jpeg"
          alt="Portada Noticias"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="absolute top-0 -left-20 h-full w-40 bg-amber-400/10 skew-x-45 z-10 border-r border-amber-400/20"></div>

      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 max-w-4xl gap-6 items-center md:items-start text-center md:text-left">
        <motion.div
          className="relative z-30 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.03 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm animate-pulse">
            Actualidad & Novedades
          </span>
          <h1 className="text-5xl lg:text-9xl md:text-8xl font-black uppercase italic leading-none tracking-tighter text-white">
            Noticias del{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-500">
              Torneo 
            </span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-xl leading-relaxed border-l-0 md:border-l-4 border-amber-400 md:pl-4 mt-4 md:mt-0">
            Mantente al día con los resultados, crónicas de partidos y todo lo
            que sucede en el Torneo Regional Amateur de Tucumán.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PortadaNoticias;
