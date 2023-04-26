import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Work from './pages/work';

import GeologicalHeritage from './pages/GeologicalHeritage';
import ExplonationNewWord from './pages/ExplonationNewWord'
import City from './pages/City';


import 'bootstrap/dist/css/bootstrap.min.css';
import Pollution from './pages/Pollution';
import Consumerism from './pages/Consumerism';
import Sustainable from './pages/Sustainable';
import BigDisasters from './pages/BigDisasters';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>

      <Routes>
           <Route path="/work" element={<Work />}></Route> 

          <Route path="/" element={<Home />}></Route>
          <Route path="/work/:The Geological Heritage" exact element={  <GeologicalHeritage />}></Route>
          <Route path="/work/:Exploration of new worlds" exact element={  <ExplonationNewWord />}></Route>

          <Route path="/work/city" exact element={<City />}></Route>
          <Route path="/work/pollution" exact element={<Pollution />}></Route>
          <Route path="/work/:What is consumerism" exact element={<Consumerism />}></Route>
          <Route path="/work/:Sustainable city" exact element={<Sustainable />}></Route>
          <Route path="/work/:Big Disasters" exact element={<BigDisasters />}></Route>
      </Routes>

    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
