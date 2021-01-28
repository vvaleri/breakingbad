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
        border-radius: 15px;
        transition: 0.3s;

        @media(min-width: 768px) {
            :hover {
                box-shadow: 1px 8px 8px 0px rgba(191, 168, 43, 0.7);
                transition: 0.4s;
            }
        } 

        :focus {
            outline: none;
            box-shadow: 1px 8px 8px 0px rgba(191, 168, 43, 0.7);

            @media(max-width: 425px) {
                box-shadow: none;
            }
        }

        &.active {
            color: #BFA82B;
        }
    }

`
export {MenuItems, Item}