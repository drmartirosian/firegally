import React from 'react';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/3.jpg';
import Image4 from '../images/4.jpg';
import Image5 from '../images/5.jpg';

const ImgGallery = () => {
  return (
    <div className="ImgGallery">
      <img src={Image1}  alt="image goes here..." />
      <img src={Image2}  alt="image goes here..." />
      <img src={Image3}  alt="image goes here..." />
      <img src={Image4}  alt="image goes here..." />
      <img src={Image5}  alt="image goes here..." />
    </div>
  )
}

export default ImgGallery;