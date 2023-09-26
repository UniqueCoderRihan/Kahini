import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FlaseSale from '../../Components/FlaseSale/FlaseSale';
import Categories from '../../Components/Categoris/Categories';
import Info from '../../Components/info/Info';
import Categoris from './categoris/Categoris';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info/>
            <Categoris/>
        </div>
    );
};

export default Home;