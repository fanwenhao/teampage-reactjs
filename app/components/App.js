import React from 'react';
import Greetings from './Greetings';

class App extends React.Component {
  render() {
    return(
      <div>
        <Greetings greet={'hi'} />
      </div>
    );
  };
};

export default App;