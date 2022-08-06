import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <div className="w-screen h-screen bg-blue-500 justify-center items-center">
      <Routes>
        <Route path='/' element={<Home> </Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
