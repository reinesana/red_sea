import React, { useState } from 'react'; // Fix 1: Import useState here

function Card({ id, time, name, categories, content, imageUrl }) {
  const displayedContent = content.length > 20 ? content.slice(0, 70) + '...' : content;

  return (
    <div className="card">
      <div className="card-content">
        <p>{time}</p>
        <h3>{name}</h3>
        <h5>{displayedContent}</h5>
        <div className="card-filters">
          {categories.map((category, index) => (
            <button key={index} className={category}>{category}</button>
          ))}
        </div>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
}






// Sample data for the cards with fixed image URLs
// Sample data for the cards with fixed image URLs and a default image for entries without a specific imageUrl
let initialCardsData = [
  { id: 1, time: "Today, 8:15 PM", name: 'Key principles of user experience navigation', categories: ['roads', 'safety'], content: 'Safety resources - quick access to safety tips and instructions for their journey.', imageUrl: 'road1.png' },
  { id: 2, time: "Today, 10:02 AM", name: 'Metrics and strategies for Effective Design', categories: ['children', 'safety'], content: 'Safety resources - quick access to safety tips and instructions for their journey.', imageUrl: 'hospital1.png' },
  { id: 3, time: "Yesterday, 1:39 AM", name: 'Creating Memorable UX to Increase Engagement', categories: ['safety', 'night'], content: 'Safety resources - quick access to safety tips and instructions for their journey.', imageUrl: 'road1.png' },
  { id: 4, time: "March 23, 4:30 PM", name: 'Using UX to establish connection and understanding', categories: ['children', 'roads'], content: 'Safety resources - quick access to safety tips and instructions for their journey.', imageUrl: 'hospital1.png' }, // Added a default image URL
];

// When rendering category buttons in both Card and



function WomenSafety() {
  const [cardsData, setCardsData] = useState(initialCardsData); // Assuming initialCardsData is defined elsewhere
  const [searchTerm, setSearchTerm] = useState('');

  // Flatten categories from all cards and then create a set of unique categories
  const uniqueCategories = [...new Set(cardsData.flatMap(card => card.categories))];

  // Filter cards based on the search term
  const filteredCards = cardsData.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="women-safety-card">
      <div className="sections">
        <h2>Feed</h2>
        <label>
          <input
            className="search"
            placeholder="search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        <div className="filters">
          {uniqueCategories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </div>
        
        <div className="cards-container">
          {filteredCards.map(card => (
            <Card 
              key={card.id}
              id={card.id}
              time={card.time}
              name={card.name}
              content={card.content}
              categories={card.categories}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomenSafety;

