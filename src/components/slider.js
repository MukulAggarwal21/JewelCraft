// import React from 'react'
// import NecklaceImage from '../images/1.png'
// import Necklace from '../images/2.jpg'
// import rings from '../images/3.jpg'
// import './Slider.css';

// const slider = () => {
//   return (
//     <div className='slider1'>
//         <img className='image1' src= {NecklaceImage} alt="Neclace" />
//     </div>
//   )
// }

// export default slider


// import React, { useState } from 'react';
// import NecklaceImage from '../images/1.png'
// import Necklace from '../images/2.jpg'
// import rings from '../images/3.jpg'
// import './Slider.css';


// const images = [ 
//   NecklaceImage,Necklace , rings
// ]



// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     const newIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(newIndex);
//   };

//   const goToPrevSlide = () => {
//     const newIndex = (currentIndex - 1 + images.length) % images.length;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="slider-container">
//       <button onClick={goToPrevSlide}>Previous</button>
//       <img className='images' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//       <button onClick={goToNextSlide}>Next</button>
//     </div>
//   );
// };

// export default Slider;


import React, { useState, useEffect } from 'react';
import NecklaceImage from '../images/1.png';
import Necklace from '../images/2.jpg';
import Rings from '../images/3.jpg';
import '../App.css';

const images = [NecklaceImage, Necklace, Rings];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <img className="images" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slider;

