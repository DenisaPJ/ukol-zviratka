import React from 'react';
import './style.css';

const AnimalDetail = ({
  photo,
  name,
  latin,
  desc,
  home,
  bio,
  food,
  size,
  zoos,
  listOfZoos
}) => {
    /* Čekám, až se načtou data z API */
    if (!listOfZoos) {
        return null
    }
    return (
        <div className="detail">
          <div className="detail__content">
            <div className="detail__header">
              <img src={photo} alt={name} className="detail__image" />
              <div className="detail__title">
                <h2 className="detail__name">
                  <span>{name}</span>
                </h2>
                <div className="detail__latin">
                  <span>{latin}</span>
                </div>
              </div>
            </div>
            <div className="detail__info">
              <p className="detail__desc">{desc}</p>
              <div className="detail__items">
                <div className="detail__item">
                  <h3>Domovina</h3>
                  <p>{home}</p>
                </div>
                <div className="detail__item">
                  <h3>Biotop</h3>
                  <p>{bio}</p>
                </div>
                <div className="detail__item">
                  <h3>Potrava</h3>
                  <p>{food}</p>
                </div>
                <div className="detail__item">
                  <h3>Velikost</h3>
                  <p>{size}</p>
                </div>
              </div>
              <div className="detail__zoo">
                <h3>Najdete v těchto ZOO</h3>
                {/* Propojení ID zoo u konkrétního zvířete s ID zoo z API, vypíšou se jména zoo */}
                {zoos.map(
                    zoo => <p key={zoo}>{listOfZoos.find((el) => el.id === zoo).jmeno}</p>
                  )}
              </div>
            </div>
          </div>
        </div>
      );
};

export default AnimalDetail;