import React from "react";
import design2 from './Css/Inner.module.css'
export default function Inner({children}){
    return(
        <div className={design2.Inner}>
           {children}
        </div>
    )
}