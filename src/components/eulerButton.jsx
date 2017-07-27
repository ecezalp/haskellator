import React from 'react';

const EulerButton = ({eulerId, clickHandler, selectedButtonId}) => {
  return <div id="euler-id-button"
              onClick={() => clickHandler(eulerId)}
              className={eulerId === selectedButtonId ? "active" : "passive"}>
    {eulerId}
  </div>
};

export default EulerButton;