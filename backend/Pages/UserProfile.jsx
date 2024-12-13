import React, { useState, useEffect } from 'react';
import './UserProfile.css';

// Dummy data for AI recommendations
const dummyRecommendations = [
  { id: 5, title: 'Seaside Condo', price: 350000, type: 'For Sale', location: 'San Diego' },
  { id: 6, title: 'Mountain Retreat', price: 2500, type: 'For Rent', location: 'Denver' },
];

function UserProfile({ user }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulating AI-driven recommendations
    setTimeout(() => {
      setRecommendations(dummyRecommendations);
    }, 1500);
  }, []);

  return (
    <div className="user-profile">
      <h2>Welcome, {user.name}!</h2>
      <div className="user-info">
        <p>Email: {user.email}</p>
        <p>Member since: {user.memberSince}</p>
      </div>
      <div className="recommendations">
        <h3>AI-Driven Recommendations</h3>
        <div className="recommendation-grid">
          {recommendations.map(property => (
            <div key={property.id} className="property-card">
              <h4>{property.title}</h4>
              <p>Price: ${property.price.toLocaleString()}</p>
              <p>Type: {property.type}</p>
              <p>Location: {property.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

