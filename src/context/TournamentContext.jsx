import React, { createContext, useEffect, useState } from 'react';
import { get } from 'react-hook-form';
import { getFixtures } from '../services/FixtureService';

const TournamentContext = createContext();


export const TournamentContextProvider = ({children}) => {
    const [fixture, setFixture] = useState([])

    useEffect(() => {
        getFixtures().then((res) => {
            console.log(res)
            setFixture(res)
        })
    }, [])

    return (
        <TournamentContext.Provider value={{ fixture, setFixture }}>
            {children}
        </TournamentContext.Provider>
    );
};

export default TournamentContext;