import styled from 'styled-components/macro';

const SearchContainer = styled.div`
    margin: 60px auto 0;
`

const Input = styled.input`
    width: 400px;
    height: 30px;
    padding: 0 0 0 5px;
    font-size: 18px;
    font-weight: 700;
    background-color: #C9CACC;
    border-radius: 5px;

    :focus {
        background-color: #ffffff;
    }
`

export {SearchContainer, Input}