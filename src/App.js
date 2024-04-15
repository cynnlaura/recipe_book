import './App.css';
import React from 'react';
import Home from './Home';
import Recipes from './Recipes';
import {
  BrowserRouter,
	Link,
  Routes,
  Route
} from 'react-router-dom';

const Nav = () => {
    return (
      <div>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/recipes">Recipes</Link>
      </div>
    )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div style = {{display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <h1>Recipe Book</h1>
          <Nav />
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipes' element={<Recipes/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
