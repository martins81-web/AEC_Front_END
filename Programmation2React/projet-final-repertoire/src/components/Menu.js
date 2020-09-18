import React from "react"; 
import {NavLink} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import '../styles/navbar.sass';

import {MenuItems} from "./MenuItems"

export class Menu extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {clicked: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked})
    }

render() 
{ 
return ( 
        <nav className='NavbarItems'>
                <Link exact='true' to="/Accueil">
                <h2 className='navbar-logo'>Répertoire des Étudiants</h2>
                </Link>
                
                <div className='menu-icon' onClick={this.handleClick}>
                    <i  className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    
                        {MenuItems.map((item,index)=>{
                            return(
                                
                                    <NavLink key={index} className={item.cName} to={item.url}>
                                    {item.title}    
                                    </NavLink>
                                
                            )
                        })}
                      
                </ul>
        </nav>
       
        );
    }
}
