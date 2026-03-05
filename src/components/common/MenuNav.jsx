import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black  text-white p-4 shadow-md border-b border-white/10 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex lg:justify-start justify-between items-center gap-10">
        <div className="lg:w-full w-auto flex justify-start lg:gap-20 gap-4 items-center">
          <Link to="/" className="text-2xl font-bold uppercase tracking-wider">
            Basket<span className="text-amber-300">Tour</span>
          </Link>
          <ul className="hidden lg:flex  space-x-6 numberFonts">
            <li>
              <Link
                to="/"
                className="hover:text-amber-300 transition-colors duration-300 "
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/noticias"
                className="hover:text-amber-300 transition-colors duration-300 "
              >
                Noticias
              </Link>
            </li>
            <li>
              <Link
                to="/fixture"
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Fixture
              </Link>
            </li>
            <li>
              <Link
                to="/resultados"
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Resultados
              </Link>
            </li>
            <li>
              <Link
                to="/clubes"
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Clubes
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center gap-10 hidden">
          <a
            href="*"
            className="text-sm w-40 text-center px-3 py-2.5 bg-amber-400 rounded-md numberFonts"
          >
            Iniciar Sesion
          </a>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-start space-y-4 numberFonts mt-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-gray-300 transition-colors duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/noticias"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300 transition-colors duration-300"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  to="/fixture"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300 transition-colors duration-300"
                >
                  Fixture
                </Link>
              </li>
              <li>
                <Link
                  to="/resultados"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-amber-300 transition-colors duration-300 numberFonts"
                >
                  Resultados
                </Link>
              </li>
            </ul>
            <div className="flex items-start flex-col-reverse gap-7 mt-5 pb-4">
              <a
                href="*"
                className="text-sm w-40 text-center px-3 py-2 bg-amber-400 rounded-md numberFonts"
              >
                Iniciar Sesion
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MenuNav;
