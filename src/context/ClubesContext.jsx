import React, { createContext, } from 'react';
import { useEffect, useState } from 'react';
import { getClubes } from '../services/ClubesService';


const ClubesContext = createContext();

export const ClubesContextProvider = ({children}) => {
    const [clubes, setClubes] = useState([])

    useEffect(() => {
        getClubes().then((res) => {
            console.log(res)
            setClubes(res)
        })
    }, [])
 
    return (
        <ClubesContext.Provider value={{clubes, setClubes}}>
            {children}
        </ClubesContext.Provider>
    );
};

export default ClubesContext;