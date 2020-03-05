import React from 'react';

const CowDescription = props => {
  //in here, we want to send a request to the server, then set the state with the result
  return (
    <div>
      <div>{props.description}</div>
    </div>
  );
};

export default CowDescription;
//rename file
