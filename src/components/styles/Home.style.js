import styled from 'styled-components/macro'

const MainImg = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center; 
    align-items: center;

    @media (max-width: 768px) {
        img {
            max-width: 90%
        }
    }

    @media (max-width: 768px) and (orientation: landscape) {
        img {
            margin: 10px 0 0 0;
        }
    }
`

const MainSection = styled.main`
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 100vh;
` 


export {MainImg, MainSection}

