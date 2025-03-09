import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Search() {
    let { query } = useParams();
    const [result, setResult] = useState(null); // State to store fetched data

    useEffect(() => {
        fetch("http://localhost:8000/searchEngine", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }) // Sending query in the request body
        })
        .then((res) => res.json())
        .then((data) => {
            setResult(data); // Store response in state
            console.log(data);
        })
        .catch((error) => console.log("Error fetching data:", error));
    }, [query]); // Runs when query changes

    const style = {
        header: {
            backgroundColor: 'cornflowerblue', display: 'flex', width: '100%', marginTop: '-105px',
            padding: '15px 20px', marginRight: '150px', marginBottom: '80px',
        },
        a: {
            textDecoration: "none"
        },
        Link: {
            textDecoration: "none"
        }
    };
    const styling = {
        footer: {
            backgroundColor: '#2A2D54', 
            display: 'flex', 
            width: '100%', 
            marginTop: '0px',  // Adjust this value to move it closer
            padding: '15px 20px', 
            marginBottom: '0px', // Remove any extra bottom margin
        }
    };
    return (
        <>
        
    <Header stl={style}/>
            {/* <h1 style={{
                backgroundColor: 'black', color: 'white', display: 'flex',
                justifyContent: 'center', margin: '50px auto', padding: '15px',
                width: '50%', borderRadius: '10px'
            }}>
                Search Results for: {query}
            </h1> */}

            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', padding: '20px', width: '100%',
                backgroundColor:'black',height:'650px',
                margin: '105px 0px 5px 0px', border: '1px solid #ccc', borderRadius: '10px'
            }}>
                {result === null ? (
                    <h2>Loading...</h2>
                ) : result.length > 0 ? (
                    <ul style={{ listStyleType: 'none', padding: 0, marginLeft:'-185px' }}>
                        {result.map((car, index) => (
                            <li key={index} style={{
                                backgroundColor:'wheat',color:'coral', padding: '50px', margin: '10px ',
                                borderRadius: '8px', width: '120%', textAlign: 'center'
                            }}>
                                <h2>{car.name}</h2>
                                <p><strong>Price:</strong> {car.link}</p>
                                <p><strong>Description:</strong> {car.desc}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h2 style={{
                        color: 'red', padding: '90px', background: '#ffe6e6',
                        borderRadius: '8px', width: '80%', textAlign: 'center'
                    }}>
                        No Results Found
                    </h2>
                )}
            </div>
            
            <Footer stl={styling}/>
        </>
    );
}

export default Search;
