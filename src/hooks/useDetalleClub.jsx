import React, { useContext, useEffect, useState } from 'react';
import { jugadoresClub, obtenerClubID } from '../services/ClubesService';
import ClubesContext from '../context/ClubesContext';
import { useParams } from 'react-router-dom';

const useDetalleClub = () => {
    const { id } = useParams();
    const { clubes } = useContext(ClubesContext);
    const [club, setClub] = useState(null);
    const [jugadores, setJugadores] = useState(null)

    useEffect(() => {
        obtenerClubID(id).then((res) => {
            setClub(res)
        })
    },[id])


    useEffect(() => {
        if(!id) return;
      jugadoresClub(id).then((res) => {
        console.log(res)
          setJugadores(res)
      })
    },[id])




    return {club,setClub,jugadores,setJugadores,id}
};

export default useDetalleClub;