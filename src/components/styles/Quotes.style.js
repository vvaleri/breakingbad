import styled from 'styled-components/macro';

const QuotesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const ItemInner = styled.div`
    display: flex;
    flex-direction: column;
    
`


const QuotesText = styled.div`
    margin: 0 0 50px 0;
    padding: 5px 10px;
    max-width: 500px;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Play Regular', sans-serif;

    p {
        :first-child {
            margin: 0 0 20px 0;
            text-align: center;
            line-height: 35px;
        }

        :last-child {
            display: flex;
            justify-content: flex-end;
        }
    }
   
    @media(max-width: 425px) {
        font-size: 16px;

        p {
            :first-child {
                line-height: 25px;
            }
        }
    }

`

const QuotesBox = styled.div`
    display: flex;
    justify-content: center;
    
    
`

const QuotesButton = styled.button`
    padding: 10px 25px;
    background-color: #0a0a0a;
    color: #ffffff;
    font-weight: 700;
    border-radius: 15px;
    border: 1px solid #0a0a0a;
    box-shadow: 0px 0px 18px 7px rgba(235, 235, 236, 0.2);
    transition: 0.7s;
    cursor: pointer;

    :focus {
        outline: none;
        box-shadow: 0px 0px 18px 7px rgba(255, 255, 255, 0.9);
        transition: 0.7s;
        
    }
`

export {QuotesContainer, ItemInner, QuotesText, QuotesBox, QuotesButton}