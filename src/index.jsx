import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';
import Search from './components/Search';


const App = () => {
  /* seznam všech zvířat */
  const [listOfAnimals, setListOfAnimals] = useState([]);
  /* zvíře vybrané pro detail */
  const [chosenAnimal, setChosenAnimal] = useState();
  /* seznam všech zoo */
  const [listOfZoos, setListOfZoos] = useState([]);
  /* seznam zvířat odpovídajících vyhledávání */
  const [searchedAnimals, setSearchedAnimals] = useState();
  /* hledání něco vrátilo */
  const [searchTrue, setSearchTrue] = useState(true);


  /* api ZOO */
  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zoo.json")
      .then((response) => response.json())
      .then((data) => {
        setListOfZoos(data.zoo);
      });
  }, []);
  
  /* api zvířata*/
  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
        setListOfAnimals(data.zvirata);
        setChosenAnimal(data.zvirata[0]);
      });
  }, []);

  /* zvolení jiného zvířete pro detail */
  const changeAnimal = number => {
    const newAnimal = listOfAnimals.find(animal => animal.id === number);
    setChosenAnimal(newAnimal);
  }
    
  /* vyhledávání (v českých i latinských názvech) */
  const onSearch = text => {
    const searchedAnimal = listOfAnimals.filter(
      (animal) =>
        animal.nazev.toLowerCase().includes(text.toLowerCase()) ||
        animal.nazevLatinsky.toLowerCase().includes(text.toLowerCase())
    );
    if (searchedAnimal.length > 0) {
      setSearchedAnimals(searchedAnimal);
      setSearchTrue(true);
    } else {
      setSearchTrue(false);
    }
  }

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <Search onSearch={onSearch} />
      <div className="container">
          <AnimalList
            /* buď se zobrazí jen zvířata odpovídající vyhledávání (+ určení, zda vyhledávání vyhledalo něco relevantního), nebo všechna */
            list={searchedAnimals || listOfAnimals}
            changeAnimal={changeAnimal}
            searchTrue={searchTrue}
          /> 
        { /*čekám na to, až se načtou data */
        chosenAnimal && (
          <AnimalDetail
            photo={chosenAnimal.foto}
            name={chosenAnimal.nazev}
            latin={chosenAnimal.nazevLatinsky}
            desc={chosenAnimal.popis}
            home={chosenAnimal.domovina}
            bio={chosenAnimal.biotop}
            food={chosenAnimal.potrava}
            size={chosenAnimal.velikost}
            zoos={chosenAnimal.zoo}
            /* předávám seznam všech ZOO, abych uvnitř komponenty teprve porovnala s konkrétním zvířetem a vypsala jména*/
            listOfZoos={listOfZoos}
          />
        )}
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
