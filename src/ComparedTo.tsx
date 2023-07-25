//dropup menu containing available 
import React from 'react'

const ComparedTo = () => {
  return (
    <div id='compare'>
      <h3>ComparedTo</h3>

      <div className='dropup'>
      <button id='dropbtn'>Select</button>
        <div id='dropmenu'>
          <a href="#">paperclip</a>
          <a href="#">pineapple</a>
          <a href="#">pontoon boat</a>
        </div>
      </div>
    </div>
  )
}

export default ComparedTo