import React from 'react';
import './MovieThumb.css'

const movieThumb = (props)=>{
    return (
        <div className='rmdb-moviethumb'>
            <img src='props.image' alt='moviethumb'/>
        </div>
    )
}

export default  movieThumb;