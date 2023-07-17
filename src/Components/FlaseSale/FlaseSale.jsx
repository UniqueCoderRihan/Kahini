import React from 'react';
import CountTimer from '../CountTimer/CountTimer';
import Card from '../Card/Card';

const FlaseSale = () => {
    return (
        <div>
            <div className='flex'>
                <p className='text-3xl font-semibold font-serif'>FlashSale</p>
               <p className='text-2xl ml-4'><CountTimer></CountTimer></p>
            </div>
            <div className='divider mt-0'></div>
            <div>
                <Card></Card>
            </div>
        </div>
    );
};

export default FlaseSale;