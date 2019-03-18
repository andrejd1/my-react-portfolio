import React, { Component } from 'react';
import BackgroundSlider from 'react-background-slider'

import image1 from '../images/header-background_1.jpg'
import image2 from '../images/header-background_.jpg'
import image3 from '../images/header-background.jpg'
import image4 from '../images/header-background_2.jpg'
import image5 from '../images/header-background_3.jpg'
import image6 from '../images/header-background_4.jpg'
import image7 from '../images/header-background_5.jpg'
import image8 from '../images/header-background_6.jpg'
import image9 from '../images/header-background_7.jpg'
import image10 from '../images/header-background_8.jpg'
import image11 from '../images/header-background_9.jpg'

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">

            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                          <li key={item.name}>
                            <a href={item.url} target="_blank"><i className={item.className}></i></a>
                          </li>
                        )
                      }
                    )
                  }
               </ul>
            </div>

         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
        <BackgroundSlider images={[ image1, image2, image3, image4, image5, image6
          , image7, image8, image9, image10, image11]} duration={2} transition={3} />
      </header>
      </React.Fragment>
    );
  }
}