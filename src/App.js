import './App.scss';
import Home from './component/Home';

import ServiceTable from "./component/ServiceTable";
import FeaturedTable from "./component/FeaturedTable";
import { Route, Routes } from 'react-router-dom';
import Search from './component/Search';
import AboutUs from './component/AboutUs';

function App() {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/carvilla-home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServiceTable />} />
        <Route path="/featured-cars" element={<ServiceTable />} />
        <Route path="/new-cars" element={<ServiceTable />} />
        <Route path="/brands" element={<ServiceTable />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/create-service-cars" element={<ServiceTable />} />
        <Route path="/create-featured-cars" element={<FeaturedTable />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
      <button className="floating" onClick={goToBtn}>
        <div className="arrow">/\</div>
      </button>

    </div>
  );
}

export default App;
