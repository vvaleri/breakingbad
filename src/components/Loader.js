import React from 'react';
import {LoaderImage} from '../components/styles/Loader.style';


export function Loader () {

    return(
        <LoaderImage>
            <img src={process.env.PUBLIC_URL + "/img/breaking.png"} alt="Heisenberg"/>
        </LoaderImage>
    )
}