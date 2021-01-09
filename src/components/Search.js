import React from 'react';
import {SearchContainer, Input} from './styles/Search.style';


export function Search({ searchText, setSearchText}) {

    return (
        <SearchContainer>
            <Input 
                type="text" 
                placeholder="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}/>
        </SearchContainer>
    )
}