import React from 'react'
import Header from './components/Header'
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';

const App = () => {
  return <Router>

    <Header />

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<div>Page Not Found 404</div>} />

      {/* To show a id from url we can use 'useParam' react hook 
        Write anything after product/ it will show on the page as product id
      */}
      <Route path='/product/:id' element={<Product />} />

    </Routes>




  </Router>
}

export default App