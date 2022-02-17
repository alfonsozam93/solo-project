import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      airQuality: null
    }
  }

  callAPI() {
    fetch('http://api.airvisual.com/v2/nearest_city?key=d7a4658b-a141-4a63-9e2c-5b3bf352ca12')
    .then(res => {
      res.json()
      console.log(res)
    })
    .then(res => this.setState({airQuality: res}))
    .catch(err => err);
  }

  // componentDidMount() {
    // const url = 'http://api.airvisual.com/v2/nearest_city?key=d7a4658b-a141-4a63-9e2c-5b3bf352ca12'
    // const response = await fetch(url);
    // const data = response.json();
  //   console.log(data);
  //   .then(res => res.json())
  //   .then(res => this.setState({apiResponse: res}))
  //   .catch(err => err);
  // }


  render(){
    return (  
    <div>
      <h1>Check Your Air Quality!</h1>
      <form>
        <label>
          City:
          <input type='text'/>
        </label>
        <input onClick = {this.callAPI()}type='submit' name='submit!'/>
      </form>
    </div>
    );
  }
}


// const App = () => (
  // <div>
  //   <h1>Check Your Air Quality!</h1>
  //   <form>
  //     <label>
  //       City:
  //       <input type='text' name ='location'/>
  //     </label>
  //     <button>submit</button>
  //   </form>
  // </div>
// )

export default App;