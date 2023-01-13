

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Layout />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

;

