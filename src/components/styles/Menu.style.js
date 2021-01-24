import styled from 'styled-components/macro';

const MenuItems = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    margin: 0 0 30px 0;
    padding: 20px 0 0 40px;
`

const Item = styled.li`
    margin: 0 20px 0 0;
    list-style: none;
    font-size: 20px;
    

    @media(max-width: 425px) {
        font-size: 16px;
    }

    :last-child {
        margin: 0;
    }

    a {
        border-radius: 5px;
        
        :focus {
            outline: none;
            box-shadow: 0px 0px 18px 7px rgba(191, 168, 43, 0.7);
        }

        &.active {
            color: #BFA82B;
        }
    }

`
export {MenuItems, Item}