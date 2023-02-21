
import './App.css';
import Flixgo from './components/flixgo/Flixgo';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Flixgo/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
