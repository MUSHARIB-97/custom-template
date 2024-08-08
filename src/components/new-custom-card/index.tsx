import React, { useState } from 'react';
import './styles.css';
import IMAGES from '../../assets/images';

const CardSlider = () => {
  // Dummy data for cards
  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    { id: 7, title: 'Card 7' },
    { id: 8, title: 'Card 8' },
    { id: 9, title: 'Card 9' },
    { id: 10, title: 'Card 10' }
  ];

  // State to keep track of the current start index
  const [startIndex, setStartIndex] = useState(0);
  const visibleCardsCount = 5;

  const nextSlide = () => {
    if (startIndex + visibleCardsCount < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="card-slider">
      <button onClick={prevSlide} className="prev-btn" disabled={startIndex === 0}>
        Prev
      </button>
      <div className="card-container">
        {cards.slice(startIndex, startIndex + visibleCardsCount).map(card => (
          <div key={card.id} className="card">
            <div className='cardImgContainer'> 
              <img src={IMAGES.card3} className='cardImg' />
            </div>
            {card.title}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="next-btn" disabled={startIndex + visibleCardsCount >= cards.length}>
        Next
      </button>
    </div>
  );
};

export default CardSlider;
