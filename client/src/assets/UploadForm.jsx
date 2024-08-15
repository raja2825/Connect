// src/components/UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [meetingLink, setMeetingLink] = useState('');

  const onFileChange = (e) => setFile(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('meetingLink', meetingLink);

    try {
      await axios.post('http://localhost:3001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Event uploaded successfully');
      setTitle('');
      setDescription('');
      setMeetingLink('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading event:', error);
    }
  };

  return (
    <div>
      <h2>Upload Event</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Image:</label>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Meeting Link:</label>
          <input
            type="text"
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadForm;
