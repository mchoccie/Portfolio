import './skills.css'
import Image from 'next/image'
export default function Skills(){
    return(<div className="skills-container">
        <div className="skills-wrapper">
            <div className="wrapper-title">
                <span className="skill-title">Programming Languages</span>
            </div>
            <div className="skills-element">
                <div className="svg-container">
                    <img src="/images/python.svg" alt="Python" height={50} width={50}/>
                    <figcaption className="svg-caption">Python</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/java.svg" alt="Java" height={50} width={50}/>
                    <figcaption className="svg-caption">Java</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/javascript.svg" alt="Javascript" height={50} width={50}/>
                    <figcaption className="svg-caption">Javascript</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/C.svg" alt="C" height={50} width={50}/>
                    <figcaption className="svg-caption">C</figcaption>
                </div>
            </div>
        </div>
        <div className="skills-wrapper">
            <div className="wrapper-title">
                <span className="skill-title">Backend</span>
            </div>
            <div className="skills-element">
                <div className="svg-container">
                    <img src="/images/nodejs.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">NodeJS</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/flask.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">Flask</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/django-icon.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">Django</figcaption>
                </div>
            </div>
        </div>
        <div className="skills-wrapper">
            <div className="wrapper-title">
                <span className="skill-title">Databases</span>
            </div>
            <div className="skills-element">
                <div className="svg-container">
                    <img src="/images/mongodb-icon.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">MongoDB</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/postgresql.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">PostgreSQL</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/firebase.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">Firebase</figcaption>
                </div>
            </div>
        </div>
        <div className="skills-wrapper">
            <div className="wrapper-title">
                <span className="skill-title">Cloud</span>
            </div>
            <div className="skills-element">
                <div className="svg-container">
                    <img src="/images/docker-icon.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">Docker</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/git.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">Git</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/microsoft-azure.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">Microsoft Azure</figcaption>
                </div>
            </div>
        </div>
        <div className="skills-wrapper">
            <div className="wrapper-title">
                <span className="skill-title">Machine Learning</span>
            </div>
            <div className="skills-element">
                <div className="svg-container">
                    <img src="/images/pytorch-icon.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">PyTorch</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/numpy.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">NumPy</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/tensorflow.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">Tensorflow</figcaption>
                </div>
            </div>
        </div>
        <div className="skills-wrapper">
            <div className="wrapper-title">
                <span className="skill-title">Frontend</span>
            </div>
            <div className="skills-element">
                <div className="svg-container">
                    <img src="/images/html-5.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">HTML</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/css-3.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">CSS</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/react.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">ReactJS</figcaption>
                </div>
                <div className="svg-container">
                    <img src="/images/nextjs-icon.svg" alt="Star Icon" height={50} width={50}/>
                    <figcaption className="svg-caption">NextJS</figcaption>
                </div>
            </div>
        </div>
    </div>)

}