import React from 'react';
import './MovieThumb.css'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
const movieThumb = ({clickable,movieName,movieId,image}) => {
    return (
        <div className='rmdb-moviethumb'>

            {clickable ?
                <Link to={{
                    pathname: `/${movieId}`,
                    movieName: movieName
                }}>
                    < img src={image} alt='moviethumb'/>
                </Link>

                : <img src={image} alt='moviethumb'/>
            }

        </div>
    )
}
movieThumb.propTypes = {
    image:PropTypes.string,
    movieId: PropTypes.number,
    movieName:PropTypes.string,
}
export default movieThumb;