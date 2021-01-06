import React from 'react';
import QuotesData from '../quotes.json'

export function QuotesItem({quote, setQuote}) {

    const getQuote = () => {
        let randomQuote = Math.floor(Math.random() * QuotesData.length)
        console.log(randomQuote)
        setQuote(QuotesData[randomQuote])
    }
    // getQuote()
    const style = {
        margin: "150px 0 0 0"
    }

    return(
        <div>
            
            {     
                <div>
                    <p>{quote.text}</p>
                    <p>{quote.author}</p>
                </div>
                        
            }
            
            <button style={style} onClick={getQuote}>get quote</button>
        </div>
    )
}