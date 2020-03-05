import React from 'react';
import CowDescription from './CowDescription.jsx';
import CowName from './CowName.jsx';

console.log('cowname is', CowName);

const Cowlist = props => (
  //in here, we want to send a request to the server, then set the state with the result
  <div>
    <h4>Cowlist</h4>
    {console.log('props is', props)}
    {props.allCowData.map(newCow => {
      console.log('get insdie cowlist map');
      return (
        <div>
          <CowName name={newCow.name} />
          <CowDescription description={newCow.description} />
        </div>
      );
    })}
  </div>
);

export default Cowlist;
//rename file
