import React from 'react'

const ImageComponent = (props) => {
  
  const { index, imageLink } = props;

  return (
    <div className="imagesDiv">
      <img className="images" src={ imageLink } alt='image'>
        </img>
    </div>
  )
}

export default ImageComponent