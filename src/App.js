import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
