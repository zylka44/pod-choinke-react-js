import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav>
            <p className='f1 fw6 ph0 mh0'>Home</p>
            <p
                onClick={() => onRouteChange('signin')}
                className='f3 link dim black underline pa3 pointer'
            >Sign Out</p>
        </nav>
    )
}

export default Navigation;