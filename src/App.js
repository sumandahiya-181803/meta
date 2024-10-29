import logo from './logo.svg';
import './App.css';
import Hero from './Component/Hero';
import Search from './Component/common/Search';
import { Route, Routes } from 'react-router-dom';
import CardDetail from './Component/CardDetail';
import NavBar from './Component/common/NavBar';
import Footer from './Component/common/Footer';
import ContactForm from './Component/common/ContactForm';
import DummyForm from './Component/common/DummyForm';

function App() {
  return (
    <div>
      <DummyForm />
      <ContactForm/>
      {/* <NavBar /> */}
    <Routes>
    
        {/* <Route path='/blog' element={<Search />} /> */}
        {/* Dynamic route for each card using :id */}
        {/* <Route path='/blog/:id' element={<CardDetail />} /> */}
        {/* Other static routes */}
        {/* <Route path='/home' element={<Hero />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
