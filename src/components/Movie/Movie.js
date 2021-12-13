import React,{Component} from 'react';
import {API_URL,API_KEY} from "../../config";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";
import "./Movie.css";

class Movie extends Component {
    state = {
        movies:null,
        actors:null,
        directors:[],
        loading:false
    }
    componentDidMount() {
        this.setState({
            loading:true
        })
        const endpoint =   `${API_URL}movie/${this.props.match.movieId}?api_key=${API_KEY}&language=eng-US`
        this.fetchItems(endpoint)
    }

    render = ()=>{
        return(
            <div className='rmdb-movie'>
                <Navigation/>
                <MovieInfo/>
                <MovieInfoBar/>
<FourColGrid/>
                <Spinner/>
            </div>
        )
    }
}

export default Movie;