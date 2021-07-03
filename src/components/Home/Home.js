import React from 'react';

const Home = ({ onRouteChange, user }) => {
  return (
    <nav>
      <p className="f1 fw6 ph0 mh0">Home</p>
      <p className="f2 dark-green">{user.name}</p>
      <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">
        Sign Out
      </p>
    </nav>
  );
};

export default Home;
