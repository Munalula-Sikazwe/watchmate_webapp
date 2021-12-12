import React from 'react';
import './MovieThumb.css'
import {Link} from "react-router-dom";

const movieThumb = (props) => {
    return (
        <div className='rmdb-moviethumb'>
            {console.log(props.movieId)}
            {props.clickable ?
                <Link to={{
                    pathname: `/${props.movieId}`,
                    movieName: props.movieName
                }}>
                    < img src={props.image} alt='moviethumb'/>
                </Link>

                : <img src={props.image} alt='moviethumb'/>
            }

        </div>
    )
}

export default movieThumb;