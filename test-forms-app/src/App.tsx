import React from 'react';
import './App.css';
import EntryComponent from './containers/create-entry/entry-index';
import ListComponent from './containers/list-entry/list-index';
function App() {
  return (
    <div className="App">
       <ListComponent />
    </div>
  );
}

export default App;
