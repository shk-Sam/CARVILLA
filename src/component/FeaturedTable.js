import Header from './Header';
//predifined components
import React from 'react';
import Table from './Table';
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Footer from './Footer';

const FeaturedTable = () => {
  
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  const [profiles, setProfiles] = useState([]);
  const [sinlgeProfile, setSingleProfile] = useState({
    id:'',
    link:'',
    name:'',
    desc:'',
  });

  useEffect(()=>{
    fetch('http://localhost:8000/profiles')
    .then((res) => res.json())
    .then((res) => {
      const featuredProfiles = res.filter((profile) => profile.type === "featured");
      setProfiles(featuredProfiles);
    })
    .catch((error) => console.log(error));
  }, []);

  function createProfile(e){
    e.preventDefault();
    const id = profiles.length + 1;
    fetch("http://localhost:8000/profileCreate",{
      method:"POST",
      headers:{'Content-Type':'Application/json'},
      body: JSON.stringify({
        id:id,
        name:name,
        desc:desc,
        link:link,
      })
    })
    .then((res) => res.json())
    .then((res) => {
      setProfiles(res);
      setName("");
      setDesc("");
      setLink("");
    }) 
    .catch((error) => console.log(error));
  }

  function updateProfile(e){
    e.preventDefault();
    fetch("http://localhost:8000/profileUpdate",{
      method:"PUT",
      headers:{'Content-Type':'Application/json'},
      body: JSON.stringify({
        id:sinlgeProfile.id,
        name:sinlgeProfile.name,
        desc:sinlgeProfile.desc,
        link:sinlgeProfile.link,
      })
    })
    .then((res) => res.json())
    .then((res) => {
      setProfiles(res);
      setSingleProfile({
        id:'',
        link:'',
        name:'',
        desc:'',
      });
    }) 
    .catch((error) => console.log(error));
  }
  
  const style ={
    header:{backgroundColor: 'cornflowerblue', color: 'white',marginTop:'-50px',padding:'15px 20px'},
    a:{textDecoration:"none"},
    Link:{textDecoration:"none"}
  };
  const styling = {
    footer: {
      backgroundColor: '#2A2D54', 
      display: 'flex', 
      width: '100%', 
      marginTop: '50px',
      padding: '15px 20px', 
      marginBottom: '0px',
    }
  };
  return (
    <>
    <Header stl={style}/>
    <div className="row mb-5" style={{marginTop:'50px'}}>
      <h2 style={{marginTop:'35px',display:'flex', justifyContent:'center'}}>
        Create and Update Featured Cars
      </h2>
      <div>
        <div className="card">
          <div className="card-header">
            <h3>Create Featured Cars</h3>
          </div>
          <div className="card-body">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" 
                  onChange={(e)=>{setName(e.target.value)}} value={name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" 
                  onChange={(e)=>{setDesc(e.target.value)}} value={desc}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Github Profile Link"
                  onChange={(e)=>{setLink(e.target.value)}} value={link}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={(e)=>{createProfile(e)}}>
                Add Car Data
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8">
        <Table profiles={profiles} set={setSingleProfile} setProfile={setProfiles} />
      </div>
      <div className="col-md-4" style={{marginTop:"-15px"}}> 
        <div className="card mt-3" style={{height:"470px"}}>
          <div className="card-header">
            <h3>Update Featured Cars</h3>
          </div>
          <div className="card-body">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" 
                  onChange={(e)=>{setSingleProfile({...sinlgeProfile,name:e.target.value})}} value={sinlgeProfile.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" 
                  onChange={(e)=>{setSingleProfile({...sinlgeProfile,desc:e.target.value})}} value={sinlgeProfile.desc}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Github Profile Link"
                  onChange={(e)=>{setSingleProfile({...sinlgeProfile,link:e.target.value})}} value={sinlgeProfile.link}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={(e)=>{updateProfile(e)}}>
                Edit Car Data
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <Footer stl={styling}/>
    </>
  );
};

export default FeaturedTable;
