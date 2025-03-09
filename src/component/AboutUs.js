// about us component 

import Footer from './Footer';
import Header from './Header'

function AboutUs() {
    const style = {
        header: {
            backgroundColor: 'cornflowerblue', display: 'flex', width: '100%', marginTop: '-65px',
            padding: '15px 20px', marginRight: '150px', marginBottom: '80px',
        },
        a: {
            textDecoration: "none"
        },
        Link: {
            textDecoration: "none"
        }
    }
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
        <div className='aboutPage'>
            <div>
                <Header stl={style} />
            </div>
            <div className='aboutMe' style={{ marginTop: '90px' }}>
                <h2 style={{ marginBottom: '35px' }}>Hello Users</h2>
                <span style={{ MarginBottom: '15px', marginTop: "45px" }}>I am Saad a BCA First Year student<br /></span>
                <p style={{ marginTop: "25px" }}>
                    ● I learn HTML, CSS, SCSS, React.js, Node.js, Express.js, MongoDB(Database), Github, Bootstrap, CRUD Operators, RESTful APIs, CORS, Responsive Design.<br />
                    ● I Know how to make  Reusable components, dynamic tables, real-time updates, API handling.  <br />
                    ● I made plenty of projects and use Reusable components and made them Responsive as well. <br/> 
                    ● This project is special for me because I think only 10% I used AI Recommendation and rest 90% I do it Myself. <br/>
                    ● I am a fresher and I have experienced. Also u can check my projects by the click of github svg which is in footer. 
                    </p >
            </div>
            <Footer stl={styling}/>
        </div>
    )
}
export default AboutUs