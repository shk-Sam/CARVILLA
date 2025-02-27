// import { useEffect } from "react";
// import { useParams } from "react-router-dom"

// function Search() {
//     let { query } = useParams();
    
//     //   const [result, setResult] = useState([]);
//     console.log(query)
//     useEffect(() => {
//         fetch("http://localhost:8000/searchEngine/"+query, {
//             method: "POST",
//         })
//             .then((res) => {
//                 return res.json();
//             })
//             .then((res) => {
//                 // setResult(res)
//                 console.log(res)
//             })
//             .catch((error) => { console.log(error) })
//     }, [])
//     return (
//         <>
//         <h1 style={{backgroundColor:'black', color:'white', display:'flex', justifyContent:'center', margin:'150px 200px 150px 200px', padding:'15px'}}>{query}</h1>
//         {result.lenght == 0 } 
//         <div>
//             <ul>
//                 {result.map (()=>{
//                 <li>
//                     <h1></h1>
//                     <p>price</p>
//                     <p>desc</p>
//                 </li>                       
//                  })} 
//             </ul>
//         </div>
//         </>
//     )
// }
// export default Search