
import React, { useState } from 'react';

const ExpandCategory = ({ category, drinks }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={handleToggle} className="btnExpand">
        {isExpanded ? '-' : '+'}
      </button>
      {isExpanded && (
        <div className='menuAll'>
          {drinks.map((drink) => (
            <div key={drink._id}>
              <h3><strong>{drink.name}</strong> {drink.price}€</h3>
              <p>{drink.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandCategory;

