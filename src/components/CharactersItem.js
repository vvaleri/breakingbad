import React, { useState, useEffect, useRef } from 'react';

import {ItemContainer, ItemButton, ItemContent, ItemTitle, ItemText} from './styles/CharactersItem.style';


export function CharactersItem({item}) {


     const [toggleActive, setToggleActive] = useState(false);
     const itemRef = useRef();

     function isToggle() {
          setToggleActive(!toggleActive) 
     }


     useEffect(() => {
          function isTarget(e) {
               if (!itemRef.current?.contains(e.target)) {
                    setToggleActive(false)
               }
          }
          
          document.addEventListener('click', isTarget)
          return () => document.removeEventListener('click', isTarget)
     }, [])


    return(
     <ItemContainer className={toggleActive ? 'active' : ''} ref={itemRef}>
       
          <img src={item.img} alt=''/>
            
          <ItemButton onClick={isToggle} className={toggleActive ? 'active' : ''}><img src="/img/fly.svg" alt="icon green fly"/></ItemButton>

          {toggleActive &&
               <ItemContent >
               <ItemTitle>{item.name}</ItemTitle>
               <hr/>
               <ItemText>
                    <p>nickname: {item.nickname}</p>
                    <p>actor: {item.portrayed}</p>
                    <p>status: {item.status}</p>
               </ItemText>
          </ItemContent>
          }
           
     </ItemContainer>
      
    )
}

