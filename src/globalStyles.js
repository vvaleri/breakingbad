import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    @font-face{
        font-family: 'Hind Siliguri Regular';
        src: local('Hind Siliguri Regular'), url('./fonts/Hind Siliguri Regular.woff'), format('woff')
    }

    @font-face{
        font-family: 'Play Regular';
        src: local('Play Regular'), url('./fonts/Play Regular.woff'), format('woff')
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, a {
        color: #ffffff;
    }

    body {
        background: linear-gradient(to right,  #000600,  #060e02);
        font-family: 'Hind Siliguri Regular', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }
`