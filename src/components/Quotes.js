import React, { useState } from 'react';
import {QuotesItem} from '../components';


export function Quotes() {

    const [quote, setQuote] = useState('');

    return(
        <div>
            <QuotesItem quote={quote} setQuote={setQuote}/>
        </div>
    )
}