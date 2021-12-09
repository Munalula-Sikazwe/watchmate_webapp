import React from 'react';
import './FourColGrid.css';

const fourColGrid = (props)=>{
    return(
        <div className='rmdb-grid'>
            {props.header && !props.loading ? <div><h1>{props.header}</h1></div>:null}

        </div>
    )
}

export default fourColGrid;