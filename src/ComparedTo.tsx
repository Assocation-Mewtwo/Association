//dropup menu containing available
import React from 'react';

const ComparedTo = (props) => {
  // props coming from post request response body
  const {compareOptions, setCompareOptions} = props
  const [value, setValue] = React.useState('results');

  // menu selection
  const handleChange = (event) => {
    // this event.target will need to trigger a change to the right container
    setValue(event.target.value);
  };

  return (
    <div id="compare">
      <h3>Compared to ... </h3>

      <div className="dropup">
        <label>
          {' '}
          <select id="compare-menu">
            <option value="blank"> </option>
            <option value="salt">A grain of salt</option>
            <option value="paperclip">A paperclip</option>
            <option value="butter">A tablespoon of butter</option>
            <option value="tomato">A medium tomato</option>
            <option value="pineapple">A pineapple</option>
            <option value="car tire">A car tire</option>
            <option value="refrigerator">A refrigerator</option>
            <option value="pontoon">A medium pontoon boat</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ComparedTo;
