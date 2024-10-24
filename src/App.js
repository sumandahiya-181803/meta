import logo from './logo.svg';
import './App.css';
import Hero from './Component/Hero';
import Search from './Component/Search';
import { Route, Routes } from 'react-router-dom';
import CardDetail from './Component/CardDetail';
import NavBar from './Component/common/NavBar';
import Footer from './Component/common/Footer';

function App() {
  return (
    <div>
      <NavBar />
    <Routes>
    
        <Route path='/' element={<Search />} />
        {/* Dynamic route for each card using :id */}
        <Route path='/blog/:id' element={<CardDetail />} />
        {/* Other static routes */}
        <Route path='/hero' element={<Hero />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;