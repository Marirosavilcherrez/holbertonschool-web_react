import logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className= "App-header">
          <img src={logo} className="App-logo" alt="logo"/> 
          <h1>School dashboard</h1>
        </div>
        <div className= "App-body">
          <p>Login to access the full dashboard</p>
          <p>Submit to apply</p>
        </div>
        <div className= "App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
      </body>
    </div>
  );
}

export default App;
