import React from 'react';
import './FourColGrid.css';

const fourColGrid = (props) => {
    const renderElements = () => {
        const gridElements = props.children.map((elements, i) => {
            return (<div key={i} className='rmdb-grid-element'>
                {elements}
            </div>)

        });
        return gridElements;
    }
    return (
        <div className='rmdb-grid'>
            {props.header && !props.loading ? <div><h1>{props.header}</h1></div> : null}
            <div className='rmdb-grid-content'>
                {renderElements()}
            </div>
        </div>
    )
}

export default fourColGrid;