import Image from 'next/image'
import './aboutme.css'
export default function Aboutme(){
    return(<div className="aboutme-content-wrapper">
        <div className="aboutme-text">
        My name is Manan Choksi, and I am currently a Master's student at San Jose State University. 
        I completed my Bachelor's degree in Computer Science from The University of Sydney. Since then, 
        I have had the opportunity to intern in different fields before pursuing full-time work at Deloitte. 
        Now, I am focusing on strengthening my passion for Artificial Intelligence.
        <br></br>
        <br></br>
        Outside of work, I'm interested in following the developments within the AI space. I also like playing basketball and following e-sports.
        </div>
        <div className="aboutme-picture">
            <Image className="me" src="/images/mananpic.JPG" alt="React Image" width={307} height={230} />
        </div>
    </div>)

}