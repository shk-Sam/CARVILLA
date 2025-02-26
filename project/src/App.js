import './App.scss';
import Home from './component/Home';
import Footer from './component/Footer';

import ServiceTable from "./component/ServiceTable";
import FeaturedTable from "./component/FeaturedTable";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Search from './component/Search';




function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/service" element={<ServiceTable />} />
          <Route path="/featured-cars" element={<ServiceTable />} />
          <Route path="/new-cars" element={<ServiceTable />} />
          <Route path="/brands" element={<ServiceTable />} />
          <Route path="/contact" element={<ServiceTable />} />
          <Route path="/create-service-cars" element={<ServiceTable />} />
          <Route path="/create-featured-cars" element={<FeaturedTable />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </div>
  
      <Footer />
      
    </div>
  );
}

export default App;
