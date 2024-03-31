import React, { useState } from 'react';

// Define the Card component
function Card({ id, category, content, likes, onLike }) {
  return (
    <div className="card">
      <h3>{category}</h3>
      <p>{content}</p>
      <div>
        <button onClick={() => onLike(id)}>Like ({likes})</button>
      </div>
      <div className="filters">
        {/* Display unique tags for each card */}
        <button>{category}</button>
      </div>
    </div>
  );
}

// Sample data for the cards
let initialCardsData = [
  { id: 1, category: 'all', content: 'General safety tip.', likes: 0 },
  { id: 2, category: 'overnight', content: 'Safety tip for staying overnight.', likes: 0 },
  { id: 3, category: 'children', content: 'Safety tip for children.', likes: 0 },
  { id: 4, category: 'birthing', content: 'Safety tip for birthing.', likes: 0 },
  // Add more data as needed
];

function WomenSafety() {
  const [cardsData, setCardsData] = useState(initialCardsData);
  const [newPostContent, setNewPostContent] = useState('');

  // Handler for liking a card
  const handleLike = (id) => {
    setCardsData(cardsData.map(card => {
      if (card.id === id) {
        return { ...card, likes: card.likes + 1 };
      }
      return card;
    }));
  };

  // Handler for submitting a new post
  const handleSubmitPost = () => {
    if (newPostContent.trim() !== '') {
      const newPost = {
        id: cardsData.length + 1,
        category: 'all', // Set the default category
        content: newPostContent,
        likes: 0,
      };
      setCardsData([...cardsData, newPost]);
      setNewPostContent(''); // Clear input field after submission
    }
  };

  return (
    <div className="women-safety-card">
      <div className="sections">
        <h2>Feed</h2>
        <label>
          <input className="search" placeholder="search..." />
        </label>

        {/* Add New Post 
        <div>
          <textarea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="make a post.."
          />
          <button onClick={handleSubmitPost}>Post</button>
        </div> 
        */}
        
        {/* Display Cards */}
        <div className="cards-container">
          {cardsData.map(card => (
            <Card 
              key={card.id} 
              id={card.id}
              content={card.content}
              likes={card.likes}
              onLike={handleLike}
              category={card.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomenSafety;
