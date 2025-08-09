import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react"; // Lucide-react icons

function Header({ stl }) {
  let navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate("/search/" + query);
    }
  };

  return (
    <>
      <header style={stl.header}>
        <Link style={stl.a} to="/carvilla-home" className="car">CARVILLA</Link>

        <form onSubmit={onSearch}>
          <input 
            type="text" 
            name="search" 
            placeholder="Search Your Car..." 
            onChange={(e) => setQuery(e.target.value)}
            value={query} 
          />
          <button type="submit">Search</button>
        </form>

        <nav>
          <Link style={stl.Link} to="/">Home</Link>
          <a href="#service" style={stl.Link}>SERVICE</a>
          <a href="#featured-cars" style={stl.Link}>FEATURED CARS</a>
          <a href="#brands" style={stl.Link}>BRANDS</a>
          <Link style={stl.Link} to="/about-us">About Us</Link>

          {/* CMS Dropdown with Arrow */}
          <div 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="dropdown-title">
              <Link style={stl.Link} to="#">CMS</Link>
              {dropdownOpen ? <ChevronDown className="arrow-icon" /> : <ChevronUp className="arrow-icon" />}
            </div>
            {dropdownOpen && (
              <div className="dropdown-content">
                <Link to="/create-service-cars">Create Service Cars</Link>
                <Link to="/create-featured-cars">Create Featured Cars</Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* CSS Styling */}
      <style>
        {`
        svg{
        margin:-2px 0 0 -25px;
        }
          .dropdown {
            position: relative;
            display: inline-block;
          }
          .dropdown-title {
            display: flex;
            align-items: start;
            gap: 5px;
            cursor: pointer;
          }
          .arrow-icon {
            transition: transform 0.3s ease-in-out;
          }
          .dropdown-content {
            display: block;
            position: absolute;
            background: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            min-width: 200px;
            z-index: 100;
          }
          .dropdown-content a {
            display: block;
            padding:10px;
            color: black;
            text-decoration: none;
          }
          .dropdown-content a:hover {
            background: #f1f1f1;
            color:#000;
          }
        `}
      </style>
    </>
  );
}

export default Header;
