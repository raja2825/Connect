// src/components/EventList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            {event.image && (
              <img
                src={`http://localhost:3001/${event.image}`}
                alt={event.title}
                style={{ width: '100px', height: '100px' }}
              />
            )}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <a href={event.meetingLink} target="_blank" rel="noopener noreferrer">Join Meeting</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
