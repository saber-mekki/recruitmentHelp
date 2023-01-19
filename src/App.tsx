import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom';

import  {Home}  from './pages/Home';
import  Contact  from './components/Contact';
import Layout  from './components/Layout';
import { About } from './pages/About/about';
import { Login } from './pages/Login/login';


function App() {
  return (
    <BrowserRouter ><Routes>
      <Route   element={<Layout />} >
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/login" index element={<Login />} />

        
     </Route >
    </Routes></BrowserRouter>
    
  );
}

export default App; 
