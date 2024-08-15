import React from 'react';
import webinar from './webinar1.jpg';
import conf from './conference.jpg';
import event from './virtual-events-1.jpg';
import './Events.css';
import Individual from './Individual';
import { Link } from 'react-router-dom';

function Events() {
    return (
        <div className="container">
           
            <Link to="/webinar">
                <Individual name="WEBINARS" image={webinar} txt="Join Webinars" />
            </Link>
            <Link to="/conference">
                <Individual name="CONFERENCES" image={conf} txt="Connect People" />
            </Link>
            <Link to="/virtual-events">
                <Individual name="VIRTUAL EVENTS" image={event} txt="Know Events" />
            </Link>
        </div>
    );
}

export default Events;
