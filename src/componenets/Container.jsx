import React from "react";
import design from './Css/Container.module.css'
export default function Container({children}){
    return(
        <div className={design.Container}>
           {children}
        </div>
    )
}