import React from 'react';
import '../style/main.scss';
import { Link } from 'gatsby';
import mmxd from '../images/mmxd.JPG';
import joneslt from '../images/joneslt.png';
import flora1 from '../images/flora1.png';
import flora2 from '../images/flora2.png';
import flora3 from '../images/flora3.png';
import flora4 from '../images/flora4.png';
import flora5 from '../images/flora5.png';
import contactban from '../images/contactban.jpg';
import frontpg from '../images/frontpg.png';
import shoppg from '../images/shoppg.png';
import adobe from '../style/adobe.css';


import { nanoid } from 'nanoid';



function adobexd(){
    return (

        
        <section className="adosec">
            <div className="skew">

            <p className="content">Adobe XD Projects</p>
            <p className="content2">Here you can see the projects I have created using Adobe Xd. They range from website banners to web page mockups.</p>
            </div>
        
            <article>
           
         
                <div id="one">
                    <p className="label">Webpage Banners</p>
                    <p  className="para">For my webpage banners I like to use images that I catch my eye and construct them into creative banners that may be seen on fashion blogs or clothing websites. The first banner is of Marsai Martin modeling a houndstooth outfit. The images caught my eye because I love the houndstooth pattern and the black and white aspect of the photos looked stunning. My second banner is an image I made for the contact page of my <a href="https://jonesbyninajones.netlify.app/">Nina Jones</a>  website.  </p>

             <img id= "one" src={mmxd} style= {{width: "950px", height:"540px"}} alt="" />
             <img id="one" src= {contactban} style={{width: "950px", height:"540px"}}/>

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
                    <p className="label">Website Designs</p>
                    <br></br>
                    <p>As a visual learner Adobe XD helps me visulize my websites. The first website mock up is for my Jones by Nina Jones site. The second is a floral shop called Flora by Florence. </p>

                    <br></br>
                    
                    

                <img id= "two" src={joneslt} style= {{width: "950px", height:"880px"}} alt="" />
             </div>


            </article>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <article>
            <div>
                    <h2>Flora by Florence Store Website</h2>
                    <br></br>
                    
                    

                <img id= "two" src={flora1} style= {{width: "950px", height:"880px"}} alt="" />
                <br></br>
                <br></br>
                <br></br>
                <img id= "two" src={flora2} style= {{width: "950px", height:"880px"}} alt="" />
                <br></br>
                <br></br>
                <br></br>
                <img id= "two" src={flora3} style= {{width: "950px", height:"880px"}} alt="" />
                <br></br>
                <br></br>
                <br></br>
                <img id= "two" src={flora4} style= {{width: "950px", height:"880px"}} alt="" />
                <br></br>
                <br></br>
                <br></br>
                <img id= "two" src={flora5} style= {{width: "950px", height:"880px"}} alt="" />
                <br></br>
                <br></br>
                <img id= "two" src={frontpg} style= {{width: "600px", height:"600px"}} alt="" />
                <br></br>
                <br></br>
                <img id= "two" src={shoppg} style= {{width: "600px", height:"600px"}} alt="" />
             </div>


            </article>







<section id="footer">


           

                <footer className="footerxd" >
                <div  >

                    <Link  to="/">Back to Home</Link>
                    <br></br>
                    <Link to="/graphic">Graphic Design Projects</Link>
                    <br></br>
                    <Link  to="/develop/">Web Design Projects</Link>

                    
                    
                

                </div>
                
                </footer>
            </section>



        </section>

        
    

        
      


 
        
            

                
           









        
       


        

         


        
        

        

        

         

            

        





           



        
    )
}


export default adobexd
