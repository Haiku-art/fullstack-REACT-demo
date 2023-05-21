import React from 'react';

// Tämä MenuItemCard-komponentti generoi taulukon, joka sisältää tuotteen nimen, hinnan ja kuvauksen. Se saa parametrit propseina (items)

const MenuItemCards = ({ items }) => {
  return (
    <div>
      <table>
  <tbody id="testi">
    {items.map((item) => ( // map funktio taulukon läpikäyntiin. Seuraavan rivin React-Fragment on komponentti, jolla elementtejä voi rymitellä (ei tarvitse lisätä DOM-elementtejä)
      <React.Fragment key={item._id}> 
        <tr>
          <td><h3>{item.name}</h3></td>
          <td rowSpan="2" className="price-cell">
            <label className='priceTag'>
              <span className="price">{item.price}€</span>
            </label>
          </td>
        </tr>
        <tr>
          <td className="description-cell">{item.description}</td>
        </tr>
      </React.Fragment>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default MenuItemCards;

