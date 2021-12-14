import React from 'react';
import './FourColGrid.css';
import PropTypes from 'prop-types';
const fourColGrid = (props) => {
    const renderElements = () => {
        const gridElements = props.children.map((element, i) => {
            return (<div key={i} className='rmdb-grid-element'>
                {element}

            </div>);

        })
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
fourColGrid.propTypes = {
    header: PropTypes.string,
    loading: PropTypes.bool
}
export default fourColGrid;