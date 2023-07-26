//dropup menu containing available
import React from 'react';
import Options from './Options';

const ComparedTo = (props) => {
  // props coming from post request response body
  const { compareOptions, setCompareOptions, setImageIndex} = props;

  const optionsArray = [];

  const tbdFunction = (event: any) => {
    console.log(event.target.id);
  };

  for (let i = 0; i < compareOptions.length; i++) {
    optionsArray.push(
      <Options
        id={i}
        tbdFunction={tbdFunction}
        compareOptions={compareOptions}
      />
    );
  }

  // menu selection
  const handleChange = (event) => {
    // this event.target will need to trigger a change to the right container
    console.log('selected value: ', event.target.value);
    setImageIndex(event.target.value);
  };

  return (
    <div id="compare">
      <h3>Compared to ... </h3>
      <div className="dropup">
        <label>
          {' '}
          <select id="compare-menu" onChange={handleChange}>
            {optionsArray}
          </select>
        </label>
      </div>
    </div>
  );
};

export default ComparedTo;
