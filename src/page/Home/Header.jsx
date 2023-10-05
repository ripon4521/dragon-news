import React from 'react';
import logo from'../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex text-center justify-center mt-10'>
          <div>
          <img src={logo} alt="" />
          <p className='mt-5'>Journalism Without Fear or Favour</p>
          <p className='text-xl mt-2'>{moment().format('LLLL')}</p>
          </div>
        </div>
    );
};

export default Header;