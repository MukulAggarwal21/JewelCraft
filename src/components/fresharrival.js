// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import './fresharrival.css';

// const Carousel = ({ cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCardsCount = 5;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex =>
//         prevIndex + 1 >= cards.length - visibleCardsCount + 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [cards.length, visibleCardsCount]);

//   return (
//     <div className="carousel">
//       <div className="carouselcontent">
//         <h1>New Arrivals</h1>
//         <h5>Prepare to elevate your sense of style with our latest collection!</h5>
//       </div>

//       <div className="cards-container">
//         {cards &&
//           cards
//             .slice(currentIndex, currentIndex + visibleCardsCount)
//             .map((card, index) => (
//               <div className="card" key={index}>
//                 <img src={card.image} alt={card.title} />
//                 <div className='cardline2'>
//                   <h2>{card.title}</h2>
//                   <a  href="/"><Button variant="outline-warning">Shop Now</Button> </a>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// fresharrival.js

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(5); // Initialize to 5

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex + 1 >= cards.length - visibleCardsCount + 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length, visibleCardsCount]);

  // Update visible cards count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <=600 ) {
        setVisibleCardsCount(3);
      } else {
        setVisibleCardsCount(5);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="carousel">
      <div className="carouselcontent">
        <h1>New Arrivals</h1>
        <h5>Prepare to elevate your sense of style with our latest collection!</h5>
      </div>

      <div className="cards-container">
        {cards &&
          cards
            .slice(currentIndex, currentIndex + visibleCardsCount)
            .map((card, index) => (
              <div className="card" key={index}>
                <img src={card.image} alt={card.title} />
                <div className='cardline2'>
                  <h2>{card.title}</h2>
                  <a href="/"><Button variant="outline-warning">Shop Now</Button> </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Carousel;
