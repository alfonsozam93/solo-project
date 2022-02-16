import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/App.jsx'


// const App = () => (
//   <div>
//     <h1>Check Your Air Quality!</h1>
//     <form>
//       <label>
//         City:
//         <input type='text' name ='location'/>
//       </label>
//       <button>submit</button>
//     </form>
//   </div>
// )

ReactDOM.render(<App/>, document.getElementById('root'));