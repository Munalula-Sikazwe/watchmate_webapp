import  React , {Component } from 'react';
import SearchBar from "../elements/SearchBar/SearchBar";
import HeroImage from "../elements/HeroImage/HeroImage";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import Spinner from "../elements/Spinner/Spinner";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import './Home.css';

class Home extends Component {
    state = {

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