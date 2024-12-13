// Dummy data for properties
const properties = [
    { id: 1, title: 'Luxury Villa in California', price: '$1,200,000', image: 'https://via.placeholder.com/400x300?text=Property+1' },
    { id: 2, title: 'Modern Apartment in New York', price: '$800,000', image: 'https://via.placeholder.com/400x300?text=Property+2' },
    { id: 3, title: 'Beachfront Property in Florida', price: '$2,000,000', image: 'https://via.placeholder.com/400x300?text=Property+3' },
];

// Function to render property listings on the Property Listings page
function renderProperties() {
    const propertiesContainer = document.getElementById('properties');
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.price}</p>
        `;
        propertiesContainer.appendChild(propertyCard);
    });
}

// Function to render recommended properties (AI-Driven)
function renderRecommendations() {
    const recommendationsContainer = document.getElementById('recommended-properties');
    properties.slice(0, 2).forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.price}</p>
        `;
        recommendationsContainer.appendChild(propertyCard);
    });
}

// Event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add logic to authenticate users (dummy login)
    alert('Login Successful!');
});

// Initialize pages
if (document.getElementById('properties')) {
    renderProperties();
}

if (document.getElementById('recommended-properties')) {
    renderRecommendations();
}
