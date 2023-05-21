/* import React, { useState } from 'react';
import './App.css';


const AddNewItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleAddItem = async () => {
    const newItem = {
      name,
      description,
      price: parseFloat(price),
      type
    };

    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      };
      const response = await fetch('http://localhost:3002/addnew', requestOptions);
      const result = await response.json();
      console.log(result); // Optionally, handle the response data

      // Reset the form fields
      setName('');
      setDescription('');
      setPrice('');
      setType('');
  
      setMessage('New item created!');
    } catch (error) {
      console.error('Error adding new item:', error);
      setMessage('Error adding new item');
    }
  };

  const MessageBox = ({ message }) => {
    return <div className="message-box">{message}</div>;
  };

  return (
    <div className='addNewItemField'>
  <h2>Add new item to the Menu</h2>
  <div>
    <div>
      <label>Name: </label>
    </div>
    <div>
      <input
        type="text"
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  </div>
  <div>
    <div>
      <label>Description: </label>
    </div>
    <div>
      <input
        id="itemDescription"
        type="text"
        placeholder=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  </div>
  <div>
    <div>
      <label>Price: </label>
    </div>
    <div>
      <input
        type="text"
        placeholder="0.00"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  </div>
  <div>
    <div>
      <label>Type: cake or drink </label>
    </div>
    <div>
      <input
        type="text"
        placeholder=""
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
    </div>
  </div>
  <button className='btnExpand' onClick={handleAddItem}>Add Item</button>
  {message && <MessageBox message={message} />}
</div>

  );
};

export default AddNewItemForm;
 */

import React, { useState } from 'react';
import './App.css';

const AddNewItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleAddItem = async () => {
    if (!name || !description || !price || !type) {
      setMessage('All fields are required');
      return;
    }

    if (type !== 'cake' && type !== 'drink') {
      setMessage('Type must be either "cake" or "drink"');
      return;
    }

    const newItem = {
      name,
      description,
      price: parseFloat(price),
      type
    };

    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      };
      const response = await fetch('http://localhost:3002/addnew', requestOptions);
      const result = await response.json();
      console.log(result); // Optionally, handle the response data

      // Reset the form fields
      setName('');
      setDescription('');
      setPrice('');
      setType('');

      setMessage('New item created! :)');
    } catch (error) {
      console.error('Error adding new item:', error);
      setMessage('Error adding new item');
    }
  };

  const MessageBox = ({ message }) => {
    return <div className="message-box">{message}</div>;
  };

  return (
    <div className='addNewItemField' >
      <h2>Add new item to the Menu</h2>
      <div>
        <div>
          <label>Name: </label>
        </div>
        <div>
          <input
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Description: </label>
        </div>
        <div>
          <input
            id="itemDescription"
            type="text"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Price: </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Type: cake or drink </label>
        </div>
        <div>
          <input
            type="text"
            placeholder=""
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
      </div>
      <button className='btnAddnew' onClick={handleAddItem}>Add Item</button>
      {message && <MessageBox message={message} />}
    </div>
  );
};

export default AddNewItemForm;
