import React from 'react';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentWillMount() {
    let name = window.prompt('gimme a name', 'Noname');
    this.setState({
      name : name
    });

    // fetch example for connecting to server
    fetch(window.location.href + 'api/hello/?name=' + name)
      .then((response) => {
        if (response.status !== 200) {
          // do error stuff
          console.log('Error. Status Code: ' + response.status);
          return
        };

        return response.json();
      })
      .then((data) => {
        console.log('Server sends:', data);
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  };

  render() {
    return(
      <div>
        <h1>{this.props.greet} {this.state.name}</h1>
      </div>
    );
  };
};

export default Greetings;