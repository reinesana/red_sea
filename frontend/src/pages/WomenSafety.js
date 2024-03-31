import React, { useState } from 'react'; // Fix 1: Import useState here

function Card({ id, time, name, category, content, likes, onLike, imageUrl }) {


  return (
    <div className="card">
      <div className="card-content">
        <p>{time}</p>
        <h3>{name}</h3>
        <h5>{content}</h5>

        <div className="filters">
          <button>{category}</button>
        </div>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
}

// Sample data for the cards with fixed image URLs
let initialCardsData = [
  { id: 1, time: "Today, 8:15 PM", name: 'Key principles of user experience navigation', category: 'all', content: 'General safety tip.', likes: 0, imageUrl: 'road1.png' },
  { id: 2, time: "Today, 10:02 AM", name: 'Metrics and strategies for Effective Design', category: 'overnight', content: 'Safety tip for staying overnight.', likes: 0, imageUrl: 'hospital1.png' },
  { id: 3, time: "Yesterday, 1:39 AM", name: 'Creating Memorable UX to Increase Engagement', category: 'children', content: 'Safety tip for children.', likes: 0, imageUrl: 'sunset1.png' },
  { id: 4, time: "March 23, 4:30 PM", name: 'sss', category: 'birthing', content: 'Safety tip for birthing.', likes: 0 },
  // Add more data as needed
];

function WomenSafety() {
  const [cardsData, setCardsData] = useState(initialCardsData); // Fix 1: useState is now properly imported
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

  // Get unique categories from cards data
  const uniqueCategories = [...new Set(cardsData.map(card => card.category))];

  return (
    <div className="women-safety-card">
      <div className="sections">
        <h2>Feed</h2>
        <label>
          <input className="search" placeholder="search..." />
        </label>

        {/* Render tag buttons */}
        <div className="filters">
          {uniqueCategories.map(category => (
            <button key={category}>{category}</button>
          ))}
        </div>

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
              time={card.time}
              name={card.name} 
              content={card.content}
              likes={card.likes}
              onLike={handleLike}
              category={card.category}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomenSafety;
