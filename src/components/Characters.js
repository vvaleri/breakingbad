import React, { useEffect, useState } from 'react';
import {Main, Inner} from './styles/Charcters.style';
import {CharactersList, Search} from '../components';


export function Characters() {

    const [person, setPerson] = useState([]);
    

    useEffect(() => {
        let cleanupFunction = false;

        const getPerson = async () => {
            const response = await fetch('https://www.breakingbadapi.com/api/characters');
          
            const result = await response.json();
            if(!cleanupFunction) setPerson(result);
        }

        getPerson()

        return() => cleanupFunction = true;
    }, [])


    return(
        <Main>
            <Search/>
            <Inner>
                <CharactersList person={person} />
            </Inner>
        </Main>
       
    )

}