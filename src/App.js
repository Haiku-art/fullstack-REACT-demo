/* import logo from './logo.svg'; */
//import React from 'react';
/* import './App.css';

import React, { useState } from 'react';
import MenuItem from './MenuItem';
import SearchBar from './SearchBar';

function CustomComponent() {
  return (
    <div>
      <p>This is my CustomComponent.</p>
    </div>
  );
}

const CustomHello = (props) => {
  return (
    <div>
      <p className={props.color}>
        CustomHello komponentti: Menu
      </p>
    </div>
  );
};

const MyComponent = (props) => {
  return (
    <button className={props.color}>Click me</button>
  );
}

const quotes =[
  { 
    quote: "Lorem ipsum 01",
    author: "Dolor Sitamet",
  },
  { 
    quote: "Lorem ipsum 02",
    author: "Dolor Sitamet",
  },
  { 
    quote: "Lorem ipsum 03",
    author: "Dolor Sitamet",
  },
]

const QuoteArray = (props) => {
  const { data } = props;

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.quote} ( {item.author} )
          </li>
        ))}
      </ul>
    </div>
  );
};


const ThreeColumnLayout = () => {
  return (
    <div className="container">
      <div className="column">Column 1</div>
      <div className="column">Column 2</div>
      <div className="column">Column 3</div>
    </div>
  );
};


function App() {

  const [data, setData] = useState([]);

  const handleSetData = (newData) => {
    setData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
     <h1>Coffee & Cakes</h1>
      </header>
      <CustomComponent />
      <SearchBar setData={setData}/>
      <CustomHello color="green" />
      <MyComponent color="nappi" />
      <MyComponent color="nappi" />
      <MyComponent color="nappi" />
      <MenuItem />
      <QuoteArray data={quotes} />
      <ThreeColumnLayout />
      <footer className="App-footer">
        <p>&copy; 2023 Saara's REACT demo app. All rights reserved.</p>
    
        
      </footer>
    </div>
  );
}

export default App; */

//muistiinpanoja: 

//sikälimikäli haluis expressiä käyttää:

//import React, { useEffect } from 'react';
/*useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => console.log(data)); 
  }, []);*/ 


//TÄSSÄ TOIMII SEARCH OIKEIN!!!
/* 
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ExpandCategory from './ExpandCategory';
import './App.css';

function App() {
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3002/getall');
      const result = await response.json();
      setDrinks(result);
      setFilteredDrinks(result);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSetData = (newData) => {
    setFilteredDrinks(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee & Cakes</h1>
      </header>
      <div id='boxi'>

      <SearchBar setData={handleSetData} data={drinks} />
      <ExpandCategory drinks={drinks} />
      <div>
        {filteredDrinks.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {filteredDrinks.map((drink) => (
              <li key={drink._id}>
                <h2>{drink.name}</h2>
                <p>{drink.description}</p>
                <p>Price: {drink.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      </div>
      <footer className="App-footer">
        <p>&copy; 2023 Saara's REACT demo app. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default App; */

/* import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ExpandCategory from './ExpandCategory';
import './App.css';


function App() {
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filteredCakes, setFilteredCakes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3002/getall');
      const result = await response.json();
      setDrinks(result);
      setFilteredDrinks(result.filter((item) => item.type === 'drink'));
      setFilteredCakes(result.filter((item) => item.type === 'cake'));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSetData = (newData) => {
    setFilteredDrinks(newData.filter((item) => item.type === 'drink'));
    setFilteredCakes(newData.filter((item) => item.type === 'cake'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee & Cakes</h1>
      </header>
      <div id='boxi'>

        <SearchBar setData={handleSetData} data={drinks} />

        <table id="taulukko">
          <tbody>
            <tr>
              <td className="heading-cell">
              <h1>Coffee</h1>
              </td>
              <td>
              
        <ExpandCategory category="Drinks" drinks={filteredDrinks} />
              </td>
            </tr>
          </tbody>
        </table>

        <table id="taulukko">
          <tbody>
            <tr>
              <td className="heading-cell">
                <h1>Cakes</h1>
              </td>
              <td>
                <ExpandCategory category="Cakes" drinks={filteredCakes} />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          {(filteredDrinks.length === 0 && filteredCakes.length === 0) ? (
            <p>No results found.</p>
          ) : (
            <>
              {filteredDrinks.length > 0 && (
                <div>
                  <h2>Drinks:</h2>
                  <ul>
                    {filteredDrinks.map((drink) => (
                      <li key={drink._id}>
                        <h2>{drink.name}</h2>
                        <p>{drink.description}</p>
                        <p>Price: {drink.price}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {filteredCakes.length > 0 && (
                <div>
                  <h2>Cakes:</h2>
                  <ul>
                    {filteredCakes.map((cake) => (
                      <li key={cake._id}>
                        <h2>{cake.name}</h2>
                        <p>{cake.description}</p>
                        <p>Price: {cake.price}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      
      </div>
      <footer className="App-footer">
        <p>&copy; 2023 Saara's REACT demo app. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;
 */

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ExpandCategory from './ExpandCategory';
import MenuItemCards from './MenuItemCards';
import AddNewItemForm from './AddNewItem';
import './App.css';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';



function App() {
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filteredCakes, setFilteredCakes] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3002/getall');
      const result = await response.json();
      setDrinks(result);
      setFilteredDrinks(result.filter((item) => item.type === 'drink'));
      setFilteredCakes(result.filter((item) => item.type === 'cake'));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSetData = (newData) => {
    setFilteredDrinks(newData.filter((item) => item.type === 'drink'));
    setFilteredCakes(newData.filter((item) => item.type === 'cake'));
    setIsInitialLoad(false);
  };


return (
  <div className="App">
    <header className="App-header">
      <h1>Coffee & Cakes</h1>
      <p>A fullstack demo project with REACT framework. </p>
    </header>

  
    <div id="boxi">
    <div className='textBoxi'><h1>Welcome!</h1>
    <p>Search the menu by items name </p></div>
    
      <div className='searchBoxi'>
      <SearchBar setData={handleSetData} data={drinks} />
      </div>
        {!isInitialLoad && (
          <div>
            {(filteredDrinks.length === 0 && filteredCakes.length === 0) ? (
              <p>No results found.</p>
            ) : (
              <>
                {filteredDrinks.length > 0 && <MenuItemCards items={filteredDrinks} />}
                {filteredCakes.length > 0 && <MenuItemCards items={filteredCakes} />}
              </>
            )}
          </div>
        )}


      <table id="taulukko">
        <tbody>

        <tr>
            <td className="heading-cell">
              <h2>Expand menu</h2>
            </td>
            <td className="item-cell">
              <ExpandCategory category="Drinks" drinks={drinks} />
            </td>
          </tr>

          {/* <tr>
            <td className="heading-cell">
              <h1>Coffee</h1>
            </td>
            <td className="item-cell">
              <ExpandCategory category="Drinks" drinks={filteredDrinks} />
            </td>
          </tr>
        </tbody>
      </table>

      <table id="taulukko">
        <tbody>
          <tr>
            <td className="heading-cell">
              <h1>Cakes</h1>
            </td>
            <td className="item-cell">
              <ExpandCategory category="Cakes" drinks={filteredCakes} />
            </td>
          </tr> */}

        </tbody>
      </table>
      <table>
  <tbody>
    <tr>
      <td >
        <AddNewItemForm />
      </td>
    </tr>
  </tbody>
</table>
<EditItem />
<DeleteItem />

    </div>

    <footer className="App-footer">
      <p>&copy; 2023 Saara's REACT framework demo app. All rights reserved.</p>
    </footer>
  </div>
);
                      }
export default App;
