import styled from 'styled-components/macro';

const SearchContainer = styled.div`
    margin: 60px auto 0;
`

const Input = styled.input`
    width: 400px;
    height: 40px;
    padding: 10px 0 10px 5px;
    font-size: 18px;
    font-weight: 700;
    color: git#0f2106;
    background-color: #C9CACC;
    border-radius: 5px;

    :focus {
        background-color: #ffffff;
    }
`

export {SearchContainer, Input}