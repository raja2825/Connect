import React, { useState } from 'react';
import cardimg from './cards.jpg';
import Card from './Card';
import "./meeting.css"
const App = () => {
    
  const [cards, setCards] = useState([
    {
      id: 1,
      image:cardimg,
      title: 'MERN STACK DEVELOPMENT',
      description: 'You can be a skilled MERN Stack developer in just 15 days and you will be good enough to do a project in three days',
      meetLink: 'https://meet.google.com/your-meet-link-1',
    },
    {
      id: 2,
      image: cardimg,
      title: 'Peace Conference',
      description: 'Peace',
      meetLink: 'https://meet.google.com/your-meet-link-2',
    },
    {
      id: 3,
      image: cardimg,
      title: 'Cricket vs Olympics in India',
      description: 'Join us for a healthy debate',
      meetLink: 'https://meet.google.com/your-meet-link-3',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    meetLink: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: cards.length + 1,
      image: cardimg,
      title: formData.title,
      description: formData.description,
      meetLink: formData.meetLink,
    };

    setCards([...cards, newCard]);
    setShowForm(false);
    setFormData({ title: '', description: '', meetLink: '' }); // Reset form
  };

  return (
    <div>
        <h1 className='home'>Know Your Events</h1>
    <div className="card-container">
       
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          meetLink={card.meetLink}
        />
      ))}

      <button
        onClick={() => setShowForm(!showForm)}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Add Your Events
      </button>

      {showForm && (
        <form onSubmit={handleFormSubmit} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="text"
            name="meetLink"
            placeholder="Google Meet Link"
            value={formData.meetLink}
            onChange={handleInputChange}
            required
          />
          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default App;
