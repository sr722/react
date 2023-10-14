
import pic from "./assets/b1.png";
import "./About.css";
export function About()
{
    return(
        <section class="about" id="about">
            <img className="pic" src={pic} alt="pic" width="420px" height="420px"></img>
            <div id="about_content">
            <h1 class="about_me">About Me</h1>
            <h3 class="h3">Hello there! I'm Bhavya Teja, a passionate and <br/>
            and ambitious BTech student currently in my 3rd <br/> year at VIT-AP University</h3>
            <p class="c1">I have always been fascinated by the world of web development and its endless possibilities.<br/> 
            As a result, I am actively honing my skills in HTML, CSS, and JavaScript to craft captivating <br/>
            and user-friendly websites that leave a lasting impact. The process of transforming ideas into <br/>
            functional and visually appealing web pages gives me immense joy and satisfaction. Besides <br/> 
            my proficiency in web technologies like HTML, CSS, and JavaScript, I also know the Python <br/>
            and Java programming languages, adding versatility to my skillset. I am eager to put my skills <br/> 
            to the test and gain practical experience through internships. I am actively seeking opportunities<br/>
            to work with like-minded individuals and contribute my expertise to real-world projects.</p>
            </div>
        </section>
    )
}