import React from 'react';
import './style.css';

import Animal from '../Animal';

const AnimalList = ({ list, changeAnimal, searchTrue }) => {
  return (
    <div className="animal-list"> 
    {/* Pokud hledání odpovídají nějaké výsledky, resp. bez vyhledávání, vypíšou se daná (resp. všechna) zvířata, jinak chybová hláška*/}
      {searchTrue ? 
        list.map((animal) => (
            <Animal
            key={animal.id}
            image={animal.foto}
            name={animal.nazev}
            latin={animal.nazevLatinsky}
            changeAnimal={changeAnimal}
            id={animal.id}
            />
        ))
      : <h2 className="animal__notfound">Toto zvíře u nás nežije</h2>
      }
    </div>
  );
};

export default AnimalList;