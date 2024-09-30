import React from "react";
import pic1 from '../media/glogo.png';
import design from './Css/Nav.module.css';
export default function Nav(){
    return(
        <nav className={design.nav}>
            <div className={design.cover}>
                <div><img className={design.logo} src={pic1} alt="" /></div>
                <div><h3 className={design.h3}>G-SKILLS RECIPES</h3></div>  
            </div>
        </nav>  
    )
}