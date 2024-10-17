import Link from "next/link";

export default function NavBar(){
    return(
            <div style={{display:"flex", justifyContent:"center", fontSize:"24px", margin:"15px", fontWeight:"bold"}}>
                <a href="#introduction">Introduction</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="#contact">Contact Info</a>&nbsp;|&nbsp;&nbsp;
                <a href="#skills">Skills</a>&nbsp;|&nbsp;&nbsp;
                <a href="#education">Education</a>&nbsp;|&nbsp;&nbsp;
                <a href="#experience">Experience</a>&nbsp;|&nbsp;&nbsp;
                <a href="#portfolio">Porfolio</a>
            </div>
    );
}