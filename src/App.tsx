import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom';

import  {Home}  from './pages/Home';
import  Contact  from './components/Contact';
import Layout  from './components/Layout';


function App() {
  return (
    <BrowserRouter ><Routes>
      <Route   element={<Layout />} >
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" index element={<Home />} />
     </Route >
    </Routes></BrowserRouter>
    
  );
}

export default App; 
