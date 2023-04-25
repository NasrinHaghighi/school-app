import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Work from './pages/work';

import 'bootstrap/dist/css/bootstrap.min.css';
import WorkDetaild from './components/WorkDetails/WorkDetaild';
import GeologicalHeritage from './pages/GeologicalHeritage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
    
      <Routes>
         <Route path="/" element={<Home />}></Route> 
         <Route path="/work" element={<Work />}>       
          </Route> 
          <Route path="/work/:The Geological Heritage" element={  <GeologicalHeritage />}>
        
        </Route>       
      </Routes>
    
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
