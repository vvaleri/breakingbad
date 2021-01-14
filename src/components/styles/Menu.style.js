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
    :last-child {
        margin: 0;
    }

`
export {MenuItems, Item}