
import './App.css';
import Flixgo from './components/flixgo/Flixgo';
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/register/Register';
import Detail from './components/Detail/Detail';
import Review from './components/riview/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Flixgo/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/review' element={<Review/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
