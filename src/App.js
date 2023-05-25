
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ExpandCategory from './ExpandCategory';
import MenuItemCards from './MenuItemCards';
import AddNewItemForm from './AddNewItem';
import './App.css';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';



function App() {

  // Luodaan tilamuuttujat ja päivitysfunktiot, alustettu tyhjillä arvoilla.

  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [filteredCakes, setFilteredCakes] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true); 

//useEffect -hook
  useEffect(() => {
    fetchData();
  }, []);

// alla olevassa fetchData funktion koodiblokissa on käytetty tukena useita lähteitä (mm. https://dmitripavlutin.com/javascript-fetch-async-await/) ja ChatGPT:n apua. 
  const fetchData = async () => { 
    try {
      //const response = await fetch('http://localhost:3002/getall');
      const response = await fetch('https://nodejs-rest-api-demo.onrender.com/getall'); // Lähetetään HTTP GET -pyyntö osoitteeseen 'http://localhost:3002/getall'
      const result = await response.json();  // Parsitaan vastauksena saatu JSON-data.

      //tilamuuttujien päivitys, + filter -funktio tulosten suodattamiseen
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
      {/* <p>A fullstack demo project with REACT framework. </p> */}
      <p>A FullStack demo project with REACT framework, the backend</p>
  <p> is powered by Node.js, Express framework, MongoDB and Mongoose</p>
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
      <p>&copy; 2023 Saara's REACT framework demo app. All rights reserved. 🌞</p>
    </footer>
  </div>

);
                      }
export default App;
