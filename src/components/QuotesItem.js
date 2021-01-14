import React from 'react';
import QuotesData from '../quotes.json';
import {ItemInner, QuotesText, QuotesBox, QuotesButton} from './styles/QuotesItem.style';

export function QuotesItem({quote, setQuote}) {

    const getQuote = () => {
        let randomQuote = Math.floor(Math.random() * QuotesData.length)
        console.log(randomQuote)
        setQuote(QuotesData[randomQuote])
    }
    //  getQuote()
   
    return(
        <ItemInner>
            
            <QuotesText>
                <p>"{quote.text}"</p>
                <p>{quote.author}</p>
            </QuotesText>
                        
            <QuotesBox>
                <QuotesButton onClick={getQuote}>get quote</QuotesButton>
            </QuotesBox>
            
            
        </ItemInner>
    )
}