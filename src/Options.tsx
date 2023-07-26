import React from 'react';

type optionsProps = {
  id: number;
  tbdFunction: (event: any) => void;
  compareOptions: object[];
};

const Options = ({ id, compareOptions }: optionsProps) => {
  return (
    // need to build out tbdFunction
    <>
      <option key={`option${id}`} value={`${id}`} className="imageOption">
        {compareOptions[id].name_single}
      </option>
    </>
  );
};

export default Options;
