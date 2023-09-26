import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FlaseSale from '../../Components/FlaseSale/FlaseSale';
import Categories from '../../Components/Categoris/Categories';
import Info from '../../Components/info/Info';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info/>
            {/* <FlaseSale></FlaseSale> */}
            <Categories></Categories>
        </div>
    );
};

export default Home;