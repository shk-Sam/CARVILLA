import Header from './Header';
//predifined components
import React from 'react';
import Table from './Table'
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const FeaturedTable = () => {
  
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [link, setLink] = useState("")

  // pending for understanding
  const [profiles, setProfiles] = useState([]);
  const [sinlgeProfile, setSingleProfile] = useState({
    id:'',
    link:'',
    name:'',
    desc:'',
  });

  useEffect(()=>{

    // get all profile
    fetch('http://localhost:8000/profiles')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setProfiles(res)
    })
    .catch((error) => {console.log(error)})
  },[]);

  function createProfile(e){
    e.preventDefault()
    const id = profiles.length+1;
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
    .then((res) => {return res.json()})
    .then((res) => {
      setProfiles(res)
      setName("");
      setDesc("");
      setLink("");
    }) 
    .catch((error) => {console.log(error)})
  }

  function updateProfile(e){
    e.preventDefault()
    // const id = profiles.length+1;
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
    .then((res) => {return res.json()})
    .then((res) => {
      setProfiles(res)
      setSingleProfile({
        id:'',
        link:'',
        name:'',
        desc:'',
      })
    }) 
    .catch((error) => {console.log(error)})
  }
  
const style ={
  header:{backgroundColor: 'cornflowerblue', color: 'white',marginTop:'-50px',padding:'15px 20px'
  },
  a:{
    textDecoration:"none"
  },
  Link:{
    textDecoration:"none"
  }
}
  return (
    <>
    <Header stl={style}/>
    <div className="row mb-5" style={{marginTop:'50px'}}>
      <h2 style={{marginTop:'35px',display:'flex', justifyContent:'center',}}>
        Create Featured Cars
      </h2>
      <div>
           <div className="card">
            {/* heading */}
            <div className="card-header">
              <h3 style={{display:'flex' , justifyContent:'center'}}>Create Featured Cars</h3>
            </div>
            {/* body */}
            <div className="card-body">
              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" 
                  // pending for understand
                  onChange={(e)=>{setName(e.target.value)}} value={name}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description" 
                  onChange={(e)=>{setDesc(e.target.value)}} value={desc}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e)=>{setLink(e.target.value)}} value={link}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" onClick={(e)=>{
                  createProfile(e)
                }}>
                  Add Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Profile List */}
        <div className="col-md-8">
          <Table 
          profiles={profiles} set={setSingleProfile} setProfile={setProfiles}
           />
        </div>
        {/* Create Profile Form */}
      <div className="col-md-4">
          <div className="card mt-3">
            {/* heading */}
            <div className="card-header">
              <h3>Update Featured Cars</h3>
            </div>
            {/* body */}
            <div className="card-body">
              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" 
                  // pending for understand
                  onChange={(e)=>
                  {setSingleProfile({...sinlgeProfile,name:e.target.value})}} value={sinlgeProfile.name}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description" 
                  onChange={(e)=>
                    {setSingleProfile({...sinlgeProfile,desc:e.target.value})}} value={sinlgeProfile.desc}
                    />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e)=>
                      {setSingleProfile({...sinlgeProfile,link:e.target.value})}} value={sinlgeProfile.link}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" onClick={(e)=>{
                  // e.preventDefault()
                  // setProfiles((old)=>[{
                  //   name: name,
                  //   desc: desc,
                  //   link: link,
                  // },
                  //   ...old
                  // ])
                  updateProfile(e)
                }}>
                  Edit Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedTable;
