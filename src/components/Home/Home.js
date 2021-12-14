import React, {Component} from 'react';
import SearchBar from "../elements/SearchBar/SearchBar";
import HeroImage from "../elements/HeroImage/HeroImage";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import Spinner from "../elements/Spinner/Spinner";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import './Home.css';
import {API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from "../../config";

class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

    componentDidMount() {
        if (localStorage.getItem('homeState')){
            const state = JSON.parse(localStorage.getItem('homeState'))
            this.setState({...state})

        }else{
            this.setState({loading: true})
            const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            this.fetchItems(endpoint)
        }


    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {

                this.setState({
                    movies: [...this.state.movies, ...result.results],
                    heroImage: this.state.heroImage || result.results[0],
                    loading: false,
                    currentPage: result.page,
                    totalPages: result.total_pages,


                },()=>{
                    if (this.state.searchTerm === ""){
                        localStorage.setItem('homeState',JSON.stringify(this.state))
                    }

                })
            })

    }
    loadMoreItems = () => {
        let endpoint = '';
        this.setState({
            loading: true
        })
        if (this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}&query=${this.state.searchTerm}`;

        }
        this.fetchItems(endpoint);
    }
    searchItems = (searchTerm) => {

        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm
        })
        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&page=1&query=${this.state.searchTerm}&language=en-US`
        }

        this.fetchItems(endpoint)
    }

    render() {
        return (

            <div className='rmdb-home'>
                {this.state.heroImage ?
                    <div>
                        <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                                   title={this.state.heroImage.original_title}
                                   text={this.state.heroImage.overview}
                        />
                        <SearchBar callback={this.searchItems}/>
                    </div>
                    : null}

                <div className='rmdb-home-grid'>
                    <FourColGrid
                        header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
                        loading={this.state.loading}
                    >
                        {this.state.movies.map((element, i) => {

                            return (<MovieThumb
                                key={i}
                                clickable={true}
                                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                movieId={element.id}
                                movieName={element.original_title}
                            />)
                        })}
                    </FourColGrid>
                </div>
                { this.state.loading? <Spinner/> : null}

                { (this.state.currentPage < this.state.totalPages && !this.state.loading)?<LoadMoreBtn onClick={this.loadMoreItems}/>:null}


            </div>
        )
    }
}

export default Home;