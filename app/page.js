"use client";
import Navbar from './navbar'
import Experience from './experience'
import Project from './projects'
import Aboutme from './aboutme'
import { useEffect, useRef } from 'react';
import Skills from './skills'
import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect'

export default function Page() {

  const sectionsRef = useRef([]);

  function removeActiveClass(button) {
    setTimeout(function() {
      button.classList.remove('active');
    }, 0);
  }

  useEffect(() => {
    // Dynamically import Bootstrap JavaScript to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Intersection Observer setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe each section
    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
    return (
    
    <div id="root">
    <div className="container">
      <Navbar></Navbar>
      
      <div id='intro' className='intro fade-in' ref={el => sectionsRef.current[0] = el}>
        <h1 className="Name">
        {'> hi,'}&nbsp;
        <span style={{ color: '#FF4500' }}>manan</span>
        &nbsp;{'here'}
      
        </h1>
      </div>
      <div id='descrip' className='descrip fade-in' ref={el => sectionsRef.current[1] = el}>
        <h3 className="shortDescrip"><Typewriter className='shortDescrip'
          options={{strings: ['i like to make things.', 'aspiring ML engineer', 'aspiring software engineer'], autoStart: true, loop: true}}
        /></h3>
        
        
      </div>

      <div id='littleaboutme' className='littleaboutme fade-in' ref={el => sectionsRef.current[2] = el}>
      <h4 className="littleaboutmedescr">I'm an aspiring software engineer from San Jose. I'm fascinated by all things AI with a strong interest in NLP and reinforcement learning. I'm interested in exploring the way LLMs can be embedded in a variety of different software applications.</h4>
      </div>

      <div id='contactbuttons' className='contactbuttons' ref={el => sectionsRef.current[3] = el}>
      
        <a href='https://drive.google.com/file/d/1vjS_oVNS0MloaUdFsaZ3Z14cN1o5RTMI/view?usp=sharing' target="_blank" 
        rel="noopener noreferrer" className="btn btn-outline-light custom-button me-4" role="button" onClick={(event) => removeActiveClass(event)}>View Resume</a>
        <a href='mailto:manancnz@gmail.com' target="_blank" 
        rel="noopener noreferrer" className="btn btn-outline-light custom-button" role="button" onClick={(event) => removeActiveClass(event)}>Contact Me</a>
      </div>

      <div id='aboutme' className="aboutme fade-in " ref={el => sectionsRef.current[4] = el}>
        <h1 className="aboutme-title">{'> About Me'}</h1>
        <Aboutme></Aboutme>
      </div>

      <div id='skills' className="skills fade-in" ref={el => sectionsRef.current[5] = el}>
        <h1 className="skills-title">{'> Skills'}</h1>
        <Skills></Skills>
      </div>

      <div id='experience' className="experience fade-in" ref={el => sectionsRef.current[6] = el}>
        <h1 className="experience-title">{'> Experience'}</h1>
        <Experience className="experience-tabs"></Experience>
      </div>
      <div id='projects' className="projects fade-in" ref={el => sectionsRef.current[7] = el}>
        <h1 className="projects-title">{'> Projects'}</h1>
        <Project></Project>
      </div>
      
    </div>
    </div>)
  }