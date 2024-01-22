import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import SPortfolio from './pages/SPortfolio';
import SubProfile from './pages/SubProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/service-portfolio" element={<SPortfolio/>}/>
          <Route exact path="/subscriber-portfolio" element={<SubProfile/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
