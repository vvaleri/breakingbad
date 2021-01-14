import React, { useState } from 'react';
import {QuotesItem} from '../components';
import {QuotesContainer} from './styles/Quotes.style'


export function Quotes() {

    const [quote, setQuote] = useState('');

    return(
        <QuotesContainer>
            <QuotesItem quote={quote} setQuote={setQuote}/>
        </QuotesContainer>
    )
}