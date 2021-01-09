import React, { useEffect, useState } from 'react';
import {Main, Inner} from './styles/Charcters.style';
import {CharactersList, Search} from '../components';


export function Characters() {

    const [person, setPerson] = useState([]);
    const [searchText, setSearchText] = useState('');
     

    useEffect(() => {
         let cleanupFunction = false;

        const getPerson = async () => {
            const response = await fetch('https://www.breakingbadapi.com/api/characters');
          
            const result = await response.json();
            if(!cleanupFunction) setPerson(result);    
        }


        const searchPeraon = () => {
            setPerson(person.filter(item => item.name.toLowerCase().includes(searchText)))
        }
        
        
        searchText !== '' ? searchPeraon() : getPerson()

    }, [searchText])

    return(
        <Main>
            <Search searchText={searchText} setSearchText={setSearchText}/>
            <Inner>
                <CharactersList person={person}/>
            </Inner>
        </Main>
       
    )

}