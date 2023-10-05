
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,SetCategories]=useState([]);
    useEffect(()=>{
        fetch("./categories.json")
        .then(res => res.json())
        .then(data=>SetCategories(data))
    },[]);


    return (
        <div>
            <h1 className='text-2xl font-semibold'>All Categories</h1>
            {
                categories.map(category=><NavLink  to={`/catagorey/${category.id}`}
                    className='block font-semibold text-xl px-8 py-5 text-gray-300 hover:bg-slate-400 hover:text-black 
                }  '
                    key={category.id}
                >{category.name}</NavLink>)
            }

        </div>
    );
};

export default LeftSideNav;