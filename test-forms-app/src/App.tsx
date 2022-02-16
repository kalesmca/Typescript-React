import React from 'react';
import './App.css';
import ChildComponent from './containers/child-test/child-test-Component';
import EntryComponent from './containers/create-entry/entry-index';
import ListComponent from './containers/list-entry/list-index';
function App() {
  const alertType = () =>{
    alert('its triggered');
  }
  return (
    <div className="App">
      
       <ListComponent />
       <ChildComponent alertType={alertType}/>
    </div>
  );
}

export default App;
