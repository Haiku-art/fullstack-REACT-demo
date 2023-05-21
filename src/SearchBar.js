import React, { useState } from 'react'; //haetaan useState käyttöön: käytetään muutosten tekemiseen sivulla: kun muutoksia tapahtuu, React uudelleenerenderöi sivun

  const SearchBar = ({ data, setData }) => { //luodaan useState -hook
    const [query, setQuery] = useState(''); 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      filterData(query);
    };
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    const filterData = (query) => {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(filteredData);
    };
  
    return (
      
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              
              <input
                type="search"
                value={query}
                onChange={handleChange}
                className="form-control"
                placeholder="Espresso, Latte, Carrot Cake..."
                name="query"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btnSearch">
                Submit
              </button>
              <button
                type="button"
                className="btnSearch"
                onClick={() => setData(data)}
              >
                Search for all
              </button>
            </div>
          </form>
      </div>
    );
  };
  
  export default SearchBar;
  
