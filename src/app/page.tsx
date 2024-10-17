import NavBar from "./components/NavBar";
import "./globals.css";
import Link from "next/link";

export default function Home(){
  return(
    <>
    <NavBar/>
    <div className="container">
      <h1 className="main-heading">Personal Resume</h1>
      <h1 className="name"><strong>HAREEM FAROOQI</strong></h1>
      <h2 className="title"><strong>Passionate Web Developer and Designer</strong></h2>

      <section id="introduction" className="section">
      <h2 className="section-heading"><strong>Introduction</strong></h2>
      <p>Alhamdulillah I am a dedicated professional with experience in social media management, graphic design, video editing, and web development. 
      I have collaborated with global clients like Dr. Quran (UK), HSH Clothing (Canada), Sheraz Properties (Dubai), and Ansaarullah (Pakistan) to create visually compelling content and manage impactful digital strategies.</p>
      <br/>
      <p>Alhamdulillah With a solid foundation in programming languages like C, C#, C++, Java, JavaScript, TypeScript, HTML, and CSS.
      Currently, I am expanding my knowledge in generative AI and Cloud Computing to further enhance my skill set In Shaa Allah.</p>
      <br/>
      <p>Passionate about continuous learning, I aim to contribute my diverse expertise in web development, design, and social media management to deliver creative and effective solutions In Shaa Allah.</p>
    </section>

    <section id="contact" className="section">
      <h2 className="section-heading"><strong>Contact</strong></h2>
    <div className="centre">
      <strong>
      <p>Email: <a href="mailto:hareemfarooqi2134@gmail.com">hareemfarooqi2134@gmail.com</a></p>
      <p>Phone: <a href="tel:+923242762668">+92 324 2762668</a></p>
      <p>
      <a href="https://www.linkedin.com/in/hareemfarooqi/">LinkedIn</a>&nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="https://github.com/Hareem2134">GitHub</a>&nbsp;|&nbsp;&nbsp;
      <a href="https://www.instagram.com/HAREEM.FAROOQI">Instagram</a>
      </p>
      </strong>
    </div>

    </section>

    <section id="skills" className="section">
      <h2 className="section-heading"><strong>Skills</strong></h2>
      <p>
        <strong>Programming Languages:</strong> C, C#, C++, Java, JavaScript, TypeScript, HTML, CSS
      </p>
      <p>
        <strong>Web Development:</strong> DreamWeaver, Wordpress, React.js, Next.js
      </p>
      <p>
        <strong>Design:</strong> Photoshop, Illustrator, Premiere Pro
      </p>
      <p>
        <strong>Social Media Management:</strong> Instagram, Facebook, TikTok, YouTube, Pinterest, X
      </p>
      <p>
        <strong>3D Game Development:</strong> Unity3D, Unreal Engine
      </p>
      <p>
        <strong>Android App Development</strong>
      </p>
      <p>
        <strong>Digital Marketing</strong>
      </p>
      <p>
        <strong>Android App Development</strong>
      </p>
      <p>
        <strong>Photography</strong>
      </p>
      <p>
        <strong>Branding</strong>
      </p>
    </section>

    <section id="education" className="section">
      <h2 className="section-heading"><strong>Education</strong></h2>
      <p>
        <strong>Bachelor in Computer Science</strong>
      </p>
      <p>
        UBIT KARACHI UNIVERSITY 2014- 2017
      </p>
      <p>
        <strong>Web Development</strong>
      </p>
      <p>
        MEMON FOUNDATION 2014
      </p>
      <p>
        <strong>Graphic Designing</strong>
      </p>
      <p>
        MEMON FOUNDATION 2014
      </p>
      <p>
        <strong>Video Editing</strong>
      </p>
      <p>
        MEMON FOUNDATION 2014
      </p>
      <p>
        <strong>Android App Development</strong>
      </p>
      <p>
        SIR SYED UNIVERSITY 2016
      </p>
      <p>
        <strong>Game Development</strong>
      </p>
      <p>
        Software House 2016
      </p>
      <p>
        <strong>Linux Fundamentals</strong>
      </p>
      <p>
        NED UNIVERSITY 2016
      </p>
      <p>
        <strong>Generative AI & Cloud Computing</strong>
      </p>
      <p>
        Currently - 2026 In Shaa Allah
      </p>
    </section>

    <section id="experience" className="section">
      <h2 className="section-heading"><strong>Experience</strong></h2>
      <p>
        <strong>Dr. Quran (UK)</strong> - Social Media Manager, Web Developer
      </p>
      <p>
        <strong>HSH Clothing (Canada)</strong> - Social Media Manager, Web Developer
      </p>
      <p>
        <strong>Sheraz Properties (Dubai)</strong> - Social Media Manager
      </p>
      <p>
        <strong>Ansaarullah (Pakistan)</strong> - Web Developer
      </p>
    </section>

    <section id="portfolio" className="section">
      <h2 className="section-heading"><strong>Portfolio</strong></h2>
      <div className="centre">
        <strong>
       <Link href="https://drive.google.com/drive/folders/1z4Oo_rf5O914FWhMoPjAeBm9Pv4jlrAJ">Video Production</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
       <Link href="https://drive.google.com/drive/folders/1_6VlP8Cjb3RTyzXglEuY5bLnVaO64o8-">Graphic Designing</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
       <Link href="https://drive.google.com/drive/folders/1Ak6Hb04BLqP5DInxXoU38UPo9rjQUFad">Youtube Reels</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
       <Link href="https://drive.google.com/drive/folders/178O2t94ZXzc3ECMkjkHMXuAagIgX2e8-">Video Editing</Link>
       </strong>
       </div>
    </section>

    </div>

    <footer className="footer">
    <p>© 2024 Hareem. All Rights Reserved.</p>
    </footer>

    </>
  );
}

