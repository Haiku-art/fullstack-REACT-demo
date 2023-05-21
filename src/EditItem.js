import React, { useState } from 'react';
import './App.css';

//Määritellään uusi komponentti EditItem ja sille useState -Hook. [muuttuja, setMuuttuja] = useState(''); eli muuttujan alkuarvo koodiblokin alussa on ''. 
const EditItem = () => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleEditItem = async () => {
    if (!id || !price) {
      setMessage('ID and price are required');
      return;
    }

    const updatedItem = {
      id,
      price: parseFloat(price) //parseFloat on JavaScriptin funktio, joka muuntaa annetun merkkijonon luvuksi.
    };

    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem)
      };

      const response = await fetch(`http://localhost:3002/edit/${id}`, requestOptions);
      const result = await response.json();
      console.log(result); 

      
      setId(''); //kenttien tyhjennys lähetyksen jälkeen
      setPrice('');

      setMessage('Item updated! :)');
    } catch (error) {
      console.error('Error updating item: :(', error);
      setMessage('Error updating item :(');
    }
  };

  const MessageBox = ({ message }) => {
    return <div className="message-box">{message}</div>;
  };

  return (
    <div className='addNewItemField'>
      <h2>Update Item</h2>
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
      <button className='btnAddnew' onClick={handleEditItem}>Update Item</button>
      {message && <MessageBox message={message} />}
    </div>
  );
};

export default EditItem;
