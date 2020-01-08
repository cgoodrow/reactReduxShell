import React from 'react';
import logo from './logo.svg';
import './App.css';
import { simple } from './reducers/simple';
import { connect } from 'react-redux';

const App = ({ simple, simpleReducer }) => {
    const handleButtonClick = () => {
        const data = {
            name: 'Chris',
            position: 'Software developer',
        }

        simple(data);
    }

    console.log('simpleReducer', simpleReducer);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
              <button type="button" className="btn" onClick={() => handleButtonClick()}>Click Me</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
    simpleReducer: state.simple,
});

const mapDispatchToProps = {
    simple,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
