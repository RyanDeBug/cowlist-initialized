import React from 'react';
import ReactDOM from 'react-dom';
import Cowlist from './Cowlist.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCowData: [],
      clickedCowDescription: '',
      errorMode: false,
      newCowName: '',
      newCowDescr: ''
    };
    this.changeCowState = this.changeCowState.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addCow(event) {}

  changeCowState(data) {
    this.setState(newCow => {
      this.state.allCowData.push(newCow);
    });
    return data;
  }

  onChange(e) {
    this.setState({
      newCowName: e.target.value
    });
  }

  AllCows(props) {
    //in here, we want to send a request to the server, then set the state with the result
    //need to inport axios
    axios
      .get('/allcows')
      .then(results => {
        //what does the data look like?
        console.log('results.data we get back from the server', results.data);
        this.setState({ allCowData: results.data });
        console.log('state is now', this.state.allCowData);
      })
      .catch(err => console.log('allcows error is ', err));
  }

  componentDidMount() {
    console.log('state cows is', this.state.allCowData);
    this.AllCows(this.props);
  }

  //will eventually add the All_Cows and stuff here
  render() {
    return (
      <div>
        <Cowlist allCowData={this.state.allCowData} />
        <h4>Add more cows! Please include a description</h4>
        Enter a cow name:{' '}
        {this.state.errorMode ? 'Please fill in a cow name' : ''}
        <input value={this.state.newCowName} onChange={this.onChange} />
        {'  '}Description:{' '}
        <input value={this.state.newCowDescr} onChange={this.onChange} />
        <button onClick={this.search}> Add Cows </button>
      </div>
    );
  }
}

export default App;

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
