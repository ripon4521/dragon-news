import React from 'react';
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className='flex gap-2 p-4 shadow-xl rounded items-center bg-slate-200 mt-5 '>
         <button className='btn btn-warning'>Breaking News</button>
<Marquee pauseOnHover={true} speed={150}> 
  I can be a React component, multiple React components, or just some text.
  I can be a React component, multiple React components, or just some text.
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
    );
};

export default BreakingNews;