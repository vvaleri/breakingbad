import styled from 'styled-components/macro';

const Main = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px 15px;

    @media(max-width: 425px) {
    padding: 20px 25px 10px;
}
`

const Inner = styled.div`
    margin: 60px 0 0 0;
    max-width: 1200px;
`


export {Main, Inner}