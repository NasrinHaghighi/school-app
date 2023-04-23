import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Work from './pages/work';
import Workitem from './pages/workitem';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
    
      <Routes>
         <Route path="/" element={<Home />}></Route> 
         <Route path="/work" element={<Work />}>        
          </Route> 
          <Route path="/work/:tit" element={<Workitem />} > </Route> 
      </Routes>
    
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
