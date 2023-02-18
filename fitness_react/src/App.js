
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Services from './components/Services';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import {useState} from 'react'

function App() {

  const [token, setToken] = useState();

  function addToken(auth_token){
    setToken(auth_token)
  }

  return (
    
    <>
    <BrowserRouter>
      <Navbar token={token}></Navbar>
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
          <Route path='/login' element={
            <LoginPage addToken={addToken}/>
          }/>
          <Route path='/register' element={
            <RegisterPage/>
          }/>
        </Routes>
      <Footer></Footer>
    </BrowserRouter> 
    </> 
  );
}

export default App;
