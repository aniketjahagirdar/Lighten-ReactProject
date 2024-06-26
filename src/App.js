// import logo fwrom './logo.svg';
import React from 'react'
import './App.css';
// import 'public/index.html'
import Header from './Componant/Header';
import Home from './Componant/Home';
// import About from './Componant/About';
// import Services from './Componant/Services';
import Product from './Componant/Product';
// import Client from './Componant/Client';
// import Map from './Componant/Map';
import Footer from './Componant/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Componant/About';
import Blog from './Componant/Blog';
import Contact from './Componant/Contact';
// import ScrollToTop from './Componant/ScrollToTop';


function App() {
  useEffect(() => {
    // Scroll to the top on initial render (refresh or page load)
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <BrowserRouter>
    
      <Header />  
      {/* <ScrollToTop/> */}
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contact' element={<Contact/>}/>

   
    </Routes> 
    <Footer/>

     
    
    </BrowserRouter>
    
    
     
    </>
  );
}

export default App;
