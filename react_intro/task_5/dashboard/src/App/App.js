import logo from './holberton_logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

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
            <label htmlFor="email" className="form-label">Email: </label>
            <input type = "email" id="email" name="email" className="form-input"/>
            <label htmlFor="password" className="form-label">Password: </label>
            <input type = "password" id="password" name="password" className="form-input"/>
            <button className="button-body">OK</button>
        </div>
        <div className= "App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
      </body>
    </div>
  );
}

export default App;