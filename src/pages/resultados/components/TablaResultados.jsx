import { motion } from "framer-motion";


const TablaResultados = ({ filtro }) => {
    return (
       <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-3 pt-10">
                <div className="col-span-full h-auto numberFonts">
                  <div className="h-auto w-full bg-dark-gradient rounded-md overflow-hidden border border-white/10">
                    <div className="w-full">
                      <table className="w-full text-left border-collapse">
                      <thead className="bg-[#222222] text-gray-400">
                        <tr>
                          <th className="py-4 px-4 md:px-6 font-medium">Equipos</th>
                          <th className="py-4 px-2 md:px-6 font-medium text-center w-16 md:w-20">Resultado</th>
                          <th className="py-4 px-6 font-medium text-center hidden lg:table-cell">Info</th>
                          <th className="py-4 px-6 font-medium text-center hidden md:table-cell">Estado</th>
                        </tr>
                      </thead>
                      <tbody className="text-white">
                        {filtro.map((item) => (
                          <tr 
                            key={item._id} 
                            onClick={() => window.location.href = `/boxscore/${item._id}`}
                            className="border-b border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                          >
                            <td className="py-4 md:py-6 px-4 md:px-6">
                              <div className="flex flex-col gap-2 md:gap-4">
                                <div className="flex items-center gap-2 md:gap-4">
                                  <img src={item.local?.logo?.url} className="h-6 w-6 md:h-8 md:w-18 object-contain" alt="" />
                                  <div>
                                    <span className="text-xs md:text-lg font-medium uppercase truncate max-w-20 sm:max-w-none block">{item.local?.name}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 md:gap-4">
                                  <img src={item.visitante?.logo?.url} className="h-6 w-6 md:h-8 md:w-18 object-contain" alt="" />
                                  <div>
                                    <span className="text-xs md:text-lg font-medium uppercase truncate max-w-20 sm:max-w-none block">{item.visitante?.name}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 md:py-6 px-4 md:px-6">
                              <div className="flex flex-col gap-2 md:gap-4 items-center">
                                <span className={`px-2 md:px-3 py-1 rounded text-lg md:text-xl font-black w-10 md:w-14 text-center ${item.resultado?.total?.local > item.resultado?.total?.visitante ? 'bg-amber-400 text-black' : 'bg-white/10'}`}>
                                  {item.resultado?.total?.local}
                                </span>
                                <span className={`px-2 md:px-3 py-1 rounded text-lg md:text-xl font-black w-10 md:w-14 text-center ${item.resultado?.total?.visitante > item.resultado?.total?.local ? 'bg-amber-400 text-black' : 'bg-white/10'}`}>
                                  {item.resultado?.total?.visitante}
                                </span>
                              </div>
                            </td>
                            <td className="py-6 px-6 text-center hidden lg:table-cell">
                              <div className="text-xs text-gray-400 leading-tight uppercase">
                                {item.fecha} <br />
                                {item.estadio || "Sede Central"}
                              </div>
                            </td>
                            <td className="py-6 px-6 text-center hidden md:table-cell">
                              <span className="text-[10px] uppercase tracking-wider bg-green-500/10 text-green-500 px-2 py-1 rounded border border-green-500/20">
                                {item.estado}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
    );
};

export default TablaResultados;