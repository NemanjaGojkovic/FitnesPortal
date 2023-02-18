
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Services from './components/Services';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={
            <MainPage/>
          }/>
          <Route path='/contact' element={
            <ContactPage/>
          }/>
          <Route path='/about' element={
            <AboutPage/>
          }/>
          <Route path='/admin' element={
            <Admin/>
          }/>
          <Route path='/service' element={
            <Services/>
          }/>
        </Routes>
      <Footer></Footer>
    </BrowserRouter> 
    </> 
  );
}

export default App;
