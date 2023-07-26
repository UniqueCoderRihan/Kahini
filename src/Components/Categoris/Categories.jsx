import { useEffect, useState } from "react";

const Categories = () => {
    const [alldata,setalldata]=useState([]);
   const [headphones,setheadphones]= useState([]);
   const [tv,settv]= useState([]);
   const [phones,setphones]= useState([]);
   const [watch,setwatch]= useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(data=>data.json())
        .then(data=>{
            setalldata(data);
            const headphoneItem = data.filter(item=>item.category ==='Headphones');
            const tvItem = data.filter(item=>item.category ==='TV');
            const watchItem = data.filter(item=>item.category ==='watch');
            const smartphoneItem = data.filter(item=>item.category ==='smartphone');
            setheadphones(headphoneItem)
            setheadphones(tvItem)
            setheadphones(watchItem)
            setheadphones(smartphoneItem)
        })
    },[])
    return (
        <div>
            <div className='divider w-3/1 my-4'>
                <p className='text-4xl font-serif text-orange-400'>Browse by Categories</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Categories;