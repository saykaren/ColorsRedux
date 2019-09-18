import React from 'react';
import './App.css';
import List from './List';

const App = () =>(
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
        <List />
    </div>
  </div>
);


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learning React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
