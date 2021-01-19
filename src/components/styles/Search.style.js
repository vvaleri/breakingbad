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
    color: #0f2106;
    background-color: #3a3939;
    box-shadow: 0px 0px 18px 7px rgba(235, 235, 236, 0.1);
    border-radius: 5px;
    transition: 0.3s;

    @media(max-width: 425px) {
        width: 280px;
    }

    :focus {
        background-color: #ffffff;
        outline: none;
        box-shadow: 0px 0px 18px 7px rgba(255, 255, 255, 0.4);
        transition: 0.3s;
    }
`

export {SearchContainer, Input}