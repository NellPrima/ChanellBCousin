import React from 'react';
import { nanoid } from 'nanoid';
import joneslogo from '../images/joneslogo.png';
import dev from '../style/dev.css';
import About from '../components/About/About';
import '../style/main.scss';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';
import pic10 from '../images/pic10.JPG';
import paullogoo from '../images/paullogoo.jpg';

import App from '../components/App';



function develop (){
    return(

        <main>
            <section>
                <div className="skew">
                    <div className="content">
                        <p className="header">Web Development Projects</p>
                        
                        <p className="subhead">Here are the projects that I have created and worked on using Visual Studio Code.</p>
                    </div>
                </div>

            </section>

            <section>
                <a href="https://jonesbyninajones.netlify.app/"><img className="img" src={joneslogo}/></a>
           
              
                <div className="ninapara">
                    <p className="label">Jones by Nina Jones</p>
                    <br></br>
                    <p>Nina by Nina Jones is my first web development project for my portfolio. I was inspired ny my love of online shopping. I wanted to not only show my development skills, but also show off my web design capabilities as well. For the website I used vanilla HTML5 and CSS3. </p>
                    
                </div>

                <div className="imgdiv">
                

                </div>

               <a href="https://paulspicedesigns.netlify.app" ><img className="img2" src={paullogoo}/></a>

                <div className="ninapara2">
                    <p className="label">Paul Spice Designs</p>
                    <p>My second project is a work in progress. I decided to name my website Paul Spice Designs, because my husband is a huge fan of the book Dune written by Frank Herbert. I'm taking the time to learn more about HTML5, CSS3 and Javascript to inhace my skills as a web developer and designer.  </p>
                </div>


               
            </section>

            <section>

                <a href="http://flroar.space"><img className="img3" src={pic10}/></a>
            <div className="roar">
                    <p className="label">Regional Orlando Applied Rocketry</p>
                    <br></br>
                
                    <br></br>
                    <p>Role:Webmaster</p>
                    <p>ROAR is a non-profit outreach group in STEM. This website is written in GatsbyJS. It uses a responsive design and contains animated features.  </p>
            </div>
                
            </section>

            <section id="footer">


           

                <footer id="footerde">
                <div  className="footerde">

                    <Link  to="/">Back to Home</Link>
                    <br></br>
                    <Link to="/adobexd">Adobe XD Projects</Link>
                    <br></br>
                    <Link  to="/graphic/">Graphic Design Projects</Link>

                    
                    
                

                </div>

                

                
                </footer>
            </section>

           
        </main>

      

        

        

      
        



            


    

























    
    )
};

















export default develop
