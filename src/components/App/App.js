import  React from 'react';
import Header from '../elements/Header/Header';
import SearchBar from "../elements/SearchBar/SearchBar";
import HeroImage from "../elements/HeroImage/HeroImage";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import  Home from '../Home/Home';

const app = () => {
    return (
        <div>
            <Header/>
            <Home/>
        </div>
    )
}

export default app;