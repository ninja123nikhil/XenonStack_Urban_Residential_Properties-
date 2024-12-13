import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Real Estate AI</h1>
      <p>Find your dream property with the help of our AI-powered recommendations.</p>
      <Link to="/properties" className="cta-button">View Properties</Link>
    </div>
  );
}

export default Home;

