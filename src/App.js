import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { simple } from './reducers/simple';
import { getToken } from './reducers/authorization';
import { getGlossaryItems } from './reducers/glossary';
import { connect } from 'react-redux';

const App = ({ simple, simpleReducer, getToken, getGlossaryItems, glossaryItem }) => {

    useEffect(() => {
        const fetchData = async () => {
            await getToken();
        }

        fetchData();
    },[]);

    const handleButtonClick = () => {
        const data = {
            name: 'Chris',
            position: 'Software developer',
        }

        simple(data);
    }

    const handleGetGlossaryItem = async () => {
        await getGlossaryItems();
    }

    console.log('glossaryItem', glossaryItem);
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
              <button type="button" className="btn" onClick={() => handleGetGlossaryItem()}>Get Glossary</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
    simpleReducer: state.simple,
    glossaryItem: state.glossary,
});

const mapDispatchToProps = {
    simple,
    getToken,
    getGlossaryItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
