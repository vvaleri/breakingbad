import React, { useState, useEffect } from 'react';
import QuotesData from '../quotes.json';
import {QuotesContainer, ItemInner, QuotesText, QuotesBox, QuotesButton} from './styles/Quotes.style'


export function Quotes() {

    const [quote, setQuote] = useState('');

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let randomQuote = Math.floor(Math.random() * QuotesData.length)
        console.log(randomQuote)
        setQuote(QuotesData[randomQuote])
    }

    return(
        <QuotesContainer>
            <ItemInner>
                
                <QuotesText>
                    <p>&#8220;{quote.text}&#8221;</p>
                    <p>{quote.author}</p>
                </QuotesText>
                            
                <QuotesBox>
                    <QuotesButton onClick={getQuote}>next</QuotesButton>
                </QuotesBox>
                
                
            </ItemInner>
        </QuotesContainer>
    )
}