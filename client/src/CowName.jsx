import React from 'react';

const CowName = props => {
  //in here, we want to send a request to the server, then set the state with the result
  return (
    <div>
      <div>{props.name}</div>
    </div>
  );
};

export default CowName;
