import React from 'react';
import './style.css';

const Animal = ({ image, name, latin, changeAnimal, id }) => {
  return (
    <div className="animal" onClick={() => changeAnimal(id)}>
      {/* Výběr jiného zvířete v seznamu -> následné překreslení detailu */}
      <div className="animal__image">
        <img src={image} alt={name} />
      </div>
      <div className="animal__desc">
        <div className="animal__name">{name}</div>
        <div className="animal__latin">{latin}</div>
      </div>
    </div>
  );
};

export default Animal;