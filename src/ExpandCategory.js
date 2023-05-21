/* import React, { useState } from 'react';

const ExpandCategory = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={handleToggle} className="btn btn-success">
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar vestibulum orci, vel rutrum turpis molestie ac. Donec
            vehicula dolor non mauris tincidunt tristique. Nulla pellentesque
            venenatis facilisis. Fusce condimentum dui vel est placerat, eget
            laoreet purus rhoncus. In dignissim tellus lacus, sed dignissim est
            malesuada eu. Mauris porta sem quis neque aliquam, vitae hendrerit
            dui ullamcorper. Sed ut lectus fermentum, efficitur lectus sed,
            rutrum sapien. Etiam eu sem vitae libero ultricies pellentesque.
            Suspendisse ut scelerisque odio. Nullam vel elit nec tortor finibus
            fermentum. Aliquam in mi at libero tempor efficitur. Vestibulum
            fringilla eleifend enim, et mattis nunc commodo non. Morbi vitae
            ligula ac justo sollicitudin pretium id eu est. Nam fringilla
            faucibus est, in bibendum nulla interdum sit amet. Aenean accumsan
            purus at elit egestas, in aliquet neque vulputate. Aliquam a sem
            malesuada, finibus mi ut, bibendum mauris.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExpandCategory;
 */


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

