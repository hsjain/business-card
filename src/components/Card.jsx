import React from 'react';
import image from '../pic.jpg';
import "./card.scss";
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Card(){
    return (
        <div className='container'>
            <div className='box'>
                <div className='card'>
                    <div className='pictureDiv'>
                        <img className='pic' src={image}/>
                    </div>
                    <div className='startDiv'>
                        <div className='title'>
                            <h3 className='name'>Harsh Jain</h3>
                        </div>
                        <div className='title1'>
                            <h5 className='designation'>Software Engineer</h5>
                        </div>
                        <div className='buttons'>
                            {/* <EmailIcon/> */}

                            <a className="emailA" target="_blank" href="mailto:harshsripaljain@gmail.com"> 
                                <button className='email'>Email</button>
                            </a>
                            {/* <LinkedInIcon/> */}
                            <a className="linkA" target="_blank" href="https://www.linkedin.com/in/hsjain"> 
                                <button className='linkedin'>LinkedIn</button>
                            </a>
                        </div>
                    </div>
                    <div className='about'>
                        <h4 className="titless"> About </h4>
                        <p className='about-desc'>
                            Recent UMass Amherst Computer Science graduate with a BS degree and a 3.94 GPA (magna cum laude). Skilled in Python, MySQL, JavaScript, React, and Node. Experience includes two internships in software and data-related fields. Seeking full-time opportunities in the software and data field.
                        </p>
                    </div>
                    <div className='interest'>
                        <h4 className="titless"> Interests </h4>
                        <p className='interest-desc'>
                            Web Development, Data Science, Machine Learning, Business Analytics, Trading, Sports and Photography
                        </p>
                    </div>
                    <div className='foot'>
                        <footer className='icons'>
                            Copyright c All rights reserved
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}