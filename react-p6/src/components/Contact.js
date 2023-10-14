import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {AiOutlineCopyrightCircle} from "react-icons/ai";

export function Contact()
{
    return(
        <section className="contact" id="contact">
            <h1 className="a1">Contact Me</h1>
            <p className="a2">
                <FaPaperPlane color="red"/> <span className="a3">contact@example.com</span>
            </p>
            <p className="a4">
                <IoIosCall color="red"/> <span className="a5">9876543210</span>
            </p>
            <div className="icons">
                <AiOutlineInstagram size="40px"/>
                <BsWhatsapp size="40px"/>
                <AiFillLinkedin size="40px"/>
            </div>
            <div className="right">
                <form>
                    <input type="text" placeholder="Your Name"></input>
                    <input type="email" placeholder="Your Email"></input>
                    <textarea rows={3} cols={100} placeholder="Your Message"></textarea>
                </form>
            </div>
            <a href="#" className="button">Submit</a>
            <p className="m1">copyright <AiOutlineCopyrightCircle/> Teja</p>
        </section>
    )
}
