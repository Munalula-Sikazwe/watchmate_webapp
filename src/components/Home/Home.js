import  React , {Component } from 'react';
import SearchBar from "../elements/SearchBar/SearchBar";
import HeroImage from "../elements/HeroImage/HeroImage";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import Spinner from "../elements/Spinner/Spinner";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import './Home.css';
import {API_KEY,API_URL,IMAGE_BASE_URL,POSTER_SIZE,BACKDROP_SIZE} from "../../config";

class Home extends Component {
    state = {
        movies:[],
        heroImage:null,
        loading:false,
        currentPage:0,
        totalPages:0,
        searchTerm:''
    }
    render(){
        return(
            <div>
                <HeroImage/>
                <SearchBar/>
                <FourColGrid/>
                <Spinner/>
                <LoadMoreBtn/>
            </div>
        )
    }
}
export default Home;