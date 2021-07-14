import React from 'react';
//import '../style/main.scss';
import graph from '../style/graph.css';
import fogpanda from '../images/fogpanda.png';
import sfflyer from '../images/sfflyer.PNG';
import pandamas from '../images/pandamas.png';
import neontrianglesquare from '../images/neontrianglesquare.png'
import header5 from '../images/header5.png';
import { Link } from 'gatsby';










function graphic(){
    return(
<section>
    <div className="skew">
                    <div className="content">
                        <p className="header">Graphic Design Projects</p>
                        
                        <p className="subhead">Here are the projects that I have created and worked on using Gimp.</p>
                    </div>
                </div>
  
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <section>
        <p >This first section consists of some of the graphics I created during my time in the Santa Fe IT Club. Listed below are background images, mascots and flyers I made using Gimp and Microsoft Word. </p>
    </section>

    <section>
        <p className="label">Santa Fe IT Club background Concept</p>
        <img src={fogpanda} style={{width:"900px", height:"550px"}} />
    </section>




    <article>
  
        <div>
        
        <p>When I was the secretary for IT Club, I was tasked to make the flyer for our open house. My idea was to do a reto look to get the attention of students who wanted to join our club. </p>

            <p className="label">Santa Fe Open House Flyer</p>

            <img src={sfflyer} style={{width:"900px", height:"600px"}} alt=""/>
            
        </div>
    </article>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>





    <article>
  
  <div>
  
        <p>As a team the IT Club decided to have a panda as our mascot with a cyber punk and retro 80s theme. </p>
    
      <p className="label">Santa Fe It Club Mascot</p>

      <img src={pandamas} style={{width:"600px", height:"600px"}} alt=""/>
      
  </div>

  <div>
  
        <p>To go along with the cyber punk theme I created this image as a background for the IT Club website.</p>
    
      <p className="label">It Club Background Concept</p>

      <img src={neontrianglesquare} style={{width:"1200px", height:"650px"}} alt=""/>
      
  </div>
</article>

<br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>





<article>
  
  <div>
  
        <p>During my intenship for my class with IGY Marinas I was tasked to write the newsletters and create the headers. This is one of the headers that I designed for the newsletters that I wrote. </p>
    
      <p className="label">IGY Marinas Header Concept</p>

      <img src={header5} style={{width:"1200px", height:"400px"}} alt=""/>
      
  </div>
</article>
<br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


<article>
  
  
</article>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>



<footer className="footergra">

<div  >

    <Link  to="/">Back to Home</Link>
    <br></br>
    <Link to="/adobexd">Adobe XD Projects</Link>
    <br></br>
    <Link  to="/develop/"> Web Development Projects</Link>





</div>
</footer>


</section>


        
    )
}

export default graphic
