import React from 'react';
import {MainImg, MainSection} from './styles/Home.style'
import SmokeElement from "smoke-effect-react";

export function Home() {

    return (
        <MainSection>
            <MainImg>
                <img src="/img/logo.svg" alt="logo breaking bad"/>
            </MainImg>
            <SmokeElement
                smokeSrc="/img/smoke.png"
                smokeOpacity="0.4"
            />
        </MainSection>
    )
}