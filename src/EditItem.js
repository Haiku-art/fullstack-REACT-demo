import React, { useState } from 'react';
import './App.css';

//Määritellään uusi komponentti EditItem ja sille useState -Hook. [muuttuja, setMuuttuja] = useState(''); eli muuttujan alkuarvo koodiblokin alussa on ''. 
const EditItem = () => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleEditItem = async () => { //Lähde fukntion nimeämiskäytännöistä: https://javascript.plainenglish.io/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364
    
    if (!id || !price) { //tyhjien kenttien tarkistus ehtolauseessa
      setMessage('ID and price are required');
      return;
    }

    const updatedItem = { // kun ehtolause menee läpi, luodaan uusi updateItem -olio. Se saa arvot useState -hookista. 
      id,
      price: parseFloat(price) //parseFloat on JavaScriptin funktio, joka muuntaa annetun merkkijonon luvuksi.
    };

    try {
      const requestOptions = { //tämä koodiblokki on muokattu tämän lähteen mukaan: https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(updatedItem)
      };

        const response = await fetch(`http://localhost:3002/edit/${id}`, requestOptions);
        const result = await response.json();
        console.log(result); 

      
        setId(''); //kenttien tyhjennys lähetyksen jälkeen
        setPrice('');
        setMessage('Item updated! :)');

    } catch (error) { // virheidenkäsittely
      console.error('Error updating item: :(', error);
      setMessage('Error updating item :(');
    }
  };

  const MessageBox = ({ message }) => { //uusi komponentti virheilmoituksille
    return <div className="message-box">{message}</div>;
  };

  return ( //lopullinem Return -statement, joka palauttaa HTML:ää. Loppuun on lisätty MessaBox -komponentti, jossa on mukana &&-operaattori: eli jos jos message-muuttujalla on arvo, <MessageBox>-komponentti renderöidään. Tällekin oli lähde...
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
