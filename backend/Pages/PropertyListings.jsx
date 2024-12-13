import React, { useState, useEffect } from 'react';
import './PropertyListings.css';

// Dummy data for properties
const dummyProperties = [
  { id: 1, title: 'Modern Apartment', price: 250000, type: 'For Sale', location: 'New York' },
  { id: 2, title: 'Cozy Studio', price: 1200, type: 'For Rent', location: 'Los Angeles' },
  { id: 3, title: 'Luxury Villa', price: 1500000, type: 'For Sale', location: 'Miami' },
  { id: 4, title: 'Downtown Loft', price: 2000, type: 'For Rent', location: 'Chicago' },
];

function PropertyListings() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch properties
    setTimeout(() => {
      setProperties(dummyProperties);
    }, 1000);
  }, []);

  return (
    <div className="property-listings">
      <h2>Property Listings</h2>
      <div className="property-grid">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <h3>{property.title}</h3>
            <p>Price: ${property.price.toLocaleString()}</p>
            <p>Type: {property.type}</p>
            <p>Location: {property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListings;

