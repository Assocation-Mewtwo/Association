//Render number of images 
import React from 'react'
import ImageComponent from './ImageComponent'

const RightContainer = (props) => {
  const {kilo, compareOptions, imageIndex} = props; 
  const images = []
  const populateImages = () => {
  //total grams
  //grams of the currently selected object
  const gramsOfCompareObj = compareOptions[imageIndex].grams;
  const imageLink = compareOptions[imageIndex].image_link;

  //get nearest whole number
  const numOfImagesRequired = Math.floor(kilo * 1000 / gramsOfCompareObj);
  //for loop that many times pushing in image component to an array
  
  for (let i = 0; i < numOfImagesRequired; i++) {
    images.push(<ImageComponent index={i} imageLink={imageLink}/>)
  }
  }
  if (compareOptions.length != 0) {
    populateImages();
  }

  //   let image = document.getElementById("#right-container");
  //   let opacity = 0;
  //   image.style.opacity = opacity;

  const returnObj = images.length ? images : '';

  return (
    <div id='right-container'>
      {returnObj}
    </div>
  )
}

export default RightContainer