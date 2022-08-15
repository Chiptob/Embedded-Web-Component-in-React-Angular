import './App.css';
import { useState } from 'react';
import './web-components/search-result';


function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <h1>React Web-Component Prototype</h1>

      <input 
        placeholder = "Enter your Search request"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        >
      </input>
      
      <div className="search">Your search request: {search}</div>

      <search-result search-attribute={search}></search-result>
    </div>
  );
}

export default App;
