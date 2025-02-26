import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"


function Header({ stl }) {
  let navigate = useNavigate(); 
  const [query,setQuery]=useState("")
  const onSearch = ()=>{
    navigate('/search/'+query)
  }

  return (
    <>
      <header style={stl.header}>
        <a style={stl.a} href='' className="car">CARVILLA</a>
        <form onSubmit={onSearch}>
          <input type="text" name="search" placeholder="Search Your Car..." onChange={(e)=>{
            setQuery(e.target.value)
          }} />
          <input type="submit" value={"search"}/>
        </form>
        <nav>
          <Link style={stl.Link} to="/">Home</Link>
          <a href="#service" style={stl.Link}>SERVICE</a>
          <a href="#featured-cars" style={stl.Link}>FEATURED CARS</a>
          <a href="#brands" style={stl.Link}>BRANDS</a>
          <a href="" style={stl.Link}>CONTACT</a>
          <Link style={stl.Link} to="/create-service-cars">CREATE SERVICE CARS</Link>
          <Link style={stl.Link} to="/create-featured-cars">CREATE FEATURED CARS</Link>
        </nav>
      </header>
    </>
  )
}


export default Header