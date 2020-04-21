import React  from 'react';
 import Logosimplon from './img/logo-simplon.png';
 import{ NavbarSection,List, Itemlist,Logo, Lien} from './style.js'
 import {Link} from 'react-router-dom'




const Navbar = () =>{
    
    return (
        <NavbarSection>
         
            <Logo src={Logosimplon} alt="website logo" />
            <List>
                <Itemlist><Lien to="/Navbar"> Accueil</Lien> </Itemlist>
                <Itemlist><Lien to="/Navbar">Equipe</Lien> </Itemlist>
                <Itemlist><Lien href="#">A propos</Lien> </Itemlist>
                <Itemlist><Lien href="#">Contact</Lien> </Itemlist>
            </List>
        
        </NavbarSection>              
        )
}

export default Navbar;
