import React  from 'react';
 import Logosimplon from './logo-simplon.png';
 import{ NavbarSection,Lists, Itemlist,Logo} from './style.js'

const Navbar = () =>{
    
    return (
        <NavbarSection>

            <Logo>
            <img src={Logosimplon} alt="website logo" />
            </Logo>  

            <Lists>
                <Itemlist>Accueil</Itemlist>
                <Itemlist>Equipe</Itemlist>
                <Itemlist>A propos</Itemlist>
                <Itemlist>Contact</Itemlist>
            </Lists>
        
                              

        </NavbarSection>              
        )
  
}

export default Navbar;
