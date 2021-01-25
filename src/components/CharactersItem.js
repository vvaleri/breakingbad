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
       
          <img src={item.img} alt={item.portrayed}/>
            
          <ItemButton onClick={isToggle} className={toggleActive ? 'active' : ''}><img src={process.env.PUBLIC_URL + "/img/fly.svg"} alt="icon green fly"/></ItemButton>

          {toggleActive &&
               <ItemContent>
                    <ItemTitle>{item.name}</ItemTitle>
                    <hr/>
                    <ItemText>
                         <p><span>nickname:</span> {item.nickname}</p>
                         <p><span>occupation:</span> {item.occupation[0]} {item.occupation[1] ? `| ` + `${item.occupation[1]}` : ''}</p>
                         <p><span>status:</span> {item.status}</p>
                         <p><span>actor:</span> {item.portrayed}</p>
                    </ItemText>
               </ItemContent>
          }
           
     </ItemContainer>
      
    )
}

