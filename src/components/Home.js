import React from 'react';
import {MainImg, MainSection} from './styles/Home.style'
import SmokeElement from "smoke-effect-react";

export function Home() {

    return (
        <MainSection>
            <MainImg>
                <img src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="logo breaking bad"/>
            </MainImg>
            <SmokeElement
                smokeSrc={process.env.PUBLIC_URL + "/img/smoke.png"}
                smokeOpacity="0.4"
            />
        </MainSection>
    )
}