import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ScrollTop from './Pages/Shared/ScrollTop/ScrollTop';


function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
      </Routes>
      <ScrollTop></ScrollTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
