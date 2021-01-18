import styled, {keyframes} from 'styled-components/macro';

const fadeLoading = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const LoaderImage = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0px 0px 18px 7px rgba(255, 255, 255, 0.9);
    animation: ${fadeLoading} 1s infinite;
`

export {LoaderImage}