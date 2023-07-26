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

    let image = document.getElementById("cat");
    image.style.opacity = 0;
  
  
  for (let i = 0; i < numOfImagesRequired; i++) {
    images.push(<ImageComponent index={i} imageLink={imageLink}/>)
  }
  }
  if (compareOptions.length != 0) {
    populateImages();
  }


  const returnObj = images.length ? images : '';

  return (
    <div id='right-container'>
      {returnObj}
      <img id="cat" src="https://iili.io/HQmW1d7.png" alt="cat"></img>
    </div>
  )
}

export default RightContainer