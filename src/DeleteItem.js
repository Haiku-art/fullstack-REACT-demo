import React, { useState } from 'react';
import './App.css';

const DeleteItem = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteItem = async () => {
    if (!id) {
      setMessage('ID is required');
      return;
    }

    try {
      const requestOptions = {
        method: 'DELETE',
      };

      const response = await fetch(`http://localhost:3002/delete/${id}`, requestOptions);
      if (response.status === 204) {
        setId('');
        setMessage('Item deleted!');
      } else if (response.status === 404) {
        setMessage('Item not found');
      } else {
        setMessage('Error deleting item :(');
      }
    } catch (error) {
      console.error('Error deleting item: :(', error);
      setMessage('Error deleting item :(');
    }
  };

  const MessageBox = ({ message }) => {
    return <div className="message-box">{message}</div>;
  };

  return (
    <div className='addNewItemField'>
      <h2>Delete Item</h2>
      <div>
        <div>
          <label>Item ID: </label>
        </div>
        <div>
          <input
            type="text"
            placeholder=""
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </div>
      <button className='btnAddnew' onClick={handleDeleteItem}>Delete Item</button>
      {message && <MessageBox message={message} />}
    </div>
  );
};

export default DeleteItem;
