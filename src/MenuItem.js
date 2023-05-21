
/* import React, { useEffect, useState } from 'react';

  function MenuItems() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3002/getall') 
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error(error));
    }, []);
  
    const coffees = items.filter(item => item.type === 'drink'); // lajitellaan hakutulokset itemin tyyppien mukaan (drink vai cake)
    const cakes = items.filter(item => item.type === 'cake');
  
    return (
      <div>
        <div>
          <h1>Coffee</h1>
          {coffees.map(item => (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
  
        <div>
          <h1>Cakes</h1>
          {cakes.map(item => (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default MenuItems; */

import React, { useEffect, useState } from 'react';

function CoffeeSection({ coffees }) {
  return (
    <div>
      <h1>Coffee</h1>
      {coffees.map(item => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

function CakeSection({ cakes }) {
  return (
    <div>
      <h1>Cakes</h1>
      {cakes.map(item => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

function MenuItem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/getall')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  const coffees = items.filter(item => item.type === 'drink');
  const cakes = items.filter(item => item.type === 'cake');

  return (
    <div>
      <CoffeeSection coffees={coffees} />
      <CakeSection cakes={cakes} />
    </div>
  );
}

export default MenuItem;

  