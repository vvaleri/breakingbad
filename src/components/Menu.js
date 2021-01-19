import React from 'react';
import {MenuItems, Item} from './styles/Menu.style';
import {NavLink} from 'react-router-dom';

export function Menu() {

    const menuItems = [
        {to: "/", name: "Home"},
        {to: "/characters", name: "Characters"},
        {to: "/quotes", name: "Quotes"}
    ]
        
    return (
        <nav>
            <MenuItems>
                {menuItems.map(item => 
                    <Item key={item.name}>
                        <NavLink exact to={item.to}>{item.name}</NavLink>
                    </Item>)}
            </MenuItems>
        </nav>
    )
}