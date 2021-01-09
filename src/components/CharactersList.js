import React from 'react';
import {ListContainer} from './styles/CharactersList.style';
import {CharactersItem} from '../components';

export function CharactersList({person}) {

    return(
        
        <ListContainer>
            {
                person.map(item => item.char_id < 58 && item.char_id !== 39
                    ? <CharactersItem key={item.char_id} item={item} />
                    : null)
                    
            }
        </ListContainer>
        
   
    )
}