import logo from './logo.svg';
import {Loginview} from '../src/views/loginview'
import {Homeview} from "./views/homeview";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homeview/>}/>
            <Route path="/login" element={<Loginview/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
