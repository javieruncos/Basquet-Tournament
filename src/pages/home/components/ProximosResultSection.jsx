import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import TournamentContext from "../../../context/TournamentContext";
import ClubesContext from "../../../context/ClubesContext";
import useJugadores from "../../../hooks/useJugadores";
import NewsContext from "../../../context/NewsContext";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FixtureProximos from "./fixtureProximos";
import Goleadores from "./Goleadores";
import UltimasNoticias from "./UltimasNoticias";

const ProximosResultSection = () => {
  console.log("Render ProximosResultSection");
  return (
    <section className="py-16 px-5 sm:px-6">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <FixtureProximos></FixtureProximos>

          <div className="lg:col-span-1">
            <Goleadores></Goleadores>
             <UltimasNoticias></UltimasNoticias>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProximosResultSection);
