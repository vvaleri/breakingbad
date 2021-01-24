import styled from 'styled-components/macro'


const MainImg = styled.div`
position: absolute;
/* top:0; */

    display: flex;
    justify-content: center; 

    @media (max-width: 768px) {
        img {
            max-width: 90%
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

