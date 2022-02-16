import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../client/App.jsx'

const App = () => (
  <div>
    <h1>Air Quality Check</h1>
    <form>Test your air quality!
      <button>submit</button>
    </form>
  </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));