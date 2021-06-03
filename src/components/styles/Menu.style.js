import styled from 'styled-components/macro';

const MenuItems = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    margin: 0 0 30px 0;
    padding: 20px 0 0 40px;
    z-index: 20;
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
        transition: color 0.3s;
        outline: none;

        @media (hover: hover), screen and (min-width: 0\0) {
            :hover,
            :focus {
                color: #BFA82B;
            }
        }

        &.active {
            color: #BFA82B;
        }
    }

`
export {MenuItems, Item}