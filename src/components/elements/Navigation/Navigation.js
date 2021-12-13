import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.css'

const navigation = (props)=>{
    return(
        <div className='rmdb-navigation'>
            <div className='rmdb-navigation-content'></div>
           <Link to='/'>
               <p>Home</p>
           </Link>
            <p>/</p>
           <p>{props.movie}</p>

        </div>
    )
}
export default navigation;