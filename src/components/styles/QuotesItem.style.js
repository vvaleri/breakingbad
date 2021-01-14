import styled from 'styled-components/macro';

const ItemInner = styled.div`
    display: flex;
    flex-direction: column;
`

const QuotesText = styled.div`
    margin: 0 0 50px 0;
    font-size: 20px;

    p {
        &:first-child {
            margin: 0 0 15px 0;
        }

        &:last-child {
            text-align: right;
        }
    }
   

`

const QuotesBox = styled.div`
    display: flex;
    justify-content: center;
    
`

const QuotesButton = styled.button`
    padding: 10px 20px;
`


export {ItemInner, QuotesText, QuotesBox, QuotesButton}