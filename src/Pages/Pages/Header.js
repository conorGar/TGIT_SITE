import React from 'react';
import './Header.css';


function Header(){
    return(
        <div className='header-container'>
            <div className='left-side'>
                <div className='header-image'>

                </div>
            </div>
            <div className='right-side'>
                <h3 className= 'header-text'>The stop-motion collectathon game about trash, rats, and doing your best.</h3>
            </div>
        </div>
    )
}

export default Header;