import React from 'react';
import { Routes, Route,BrowserRouter} from 'react-router-dom';

import  {Home}  from './pages/Home';
import  Contact  from './components/Contact';
import Layout  from './components/Layout';
import { About } from './pages/About/about';
import { FACTS } from './pages/About/fact';
import { Fund } from './pages/About/fund';
import { Team } from './pages/About/team';

 


function App() {
  return (
    <BrowserRouter ><Routes>
      <Route   element={<Layout />} >
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route  path="/*" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path='/fact' index element={<FACTS />}/>
        <Route path='/fund' index element={<Fund />}/>
        <Route path='/team' index element={<Team />}/>



        
     </Route >
    </Routes></BrowserRouter>
    
  );
}

export default App; 
