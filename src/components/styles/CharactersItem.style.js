import styled, {keyframes} from 'styled-components/macro';

const ItemContainer = styled.div`
position: relative;
transition: 0.5s;

img {
     object-fit: cover;
     width: 100%;
     height: 100%;
 }

 :hover,
 &.active {
     box-shadow: 0px 3px 8px 10px rgba(46, 160, 67, 0.28);
     transition: 0.4s;
 }

 &.active {
    box-shadow: 0px 3px 8px 10px rgba(46, 160, 67, 0.28);
    transition: 0.4s;
 }
`


const flying = keyframes`
    0% {
        transform: translateX(5px);
        opacity: 0.6;
    }

    50% {
        transform: translateY(7px);
        opacity: 1;
    }

    70% {
        transform: translateX(-5px);
        opacity: 0.6;
    }

    100% {
        transform: translateY(-5px);
        opacity: 0;
    }
`

const ItemButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0);
    appearance: none;
    outline-color: #1E552E;

    &.active {
        background-color: #fff;
    }

    /* img {
        animation: ${flying} 4s infinite;
    } */
    
    
`

const ItemContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    z-index: 8;
    /* opacity: 0;
    visibility: hidden;


    &.active {
      
        opacity: 1;
        visibility: visible;
    } */

    hr {
        width: 200px;
        margin: 0 0 20px 0;
       
    }

`

const ItemTitle = styled.p`
    margin: 0 0 10px 0;
    font-size: 22px;
    letter-spacing: 1.5px;
    font-weight: bold;
`

const ItemText = styled.div`
    display: flex;
    flex-direction: column;
`
   
  

export {ItemContainer, ItemButton, ItemContent, ItemTitle, ItemText}