import React from "react";
import {BACKDROP_SIZE,IMAGE_BASE_URL,POSTER_SIZE} from "../../../config";
import FontAwesome from "react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import './MovieInfo.css';

const movieInfo = (props)=>{
    return (
        <div className='rmdb-movieinfo' style={{
            background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')`:'#000'
        }}>
            <h1> MovieInfo</h1>

        </div>
    )
}

export default movieInfo;