import styled from 'styled-components/macro';

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 25px;
    
    @media(max-width: 425px) {
        grid-gap: 35px;
    }
`

export {ListContainer}