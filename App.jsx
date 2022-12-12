import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div class="about-section">
  <h1> Contact Us Page</h1>
  
</div>
    <section className="contact-us">
    <div className="row">
        <div className="contact-col">
            <div>
              
                <span>
                    <h5>Visit Us </h5>
                        <p> WWHG+28R, Golf Rd,</p> Arivoli Nagar Vivekanandapuram, Kovaipudur,
                        <p> Tamil Nadu-641042</p>
                </span>
            </div>
            <div>
                <span>
                    <h5>Phone &  Working hours</h5>
                    <p>+91-9360339845</p>
                        <p>
                        Monday t0 Saturday, 9:00 AM to 5:00 PM</p>
                </span>
            </div>
            <div>
                <span>
                    <h5>Email us</h5>
                    <p> teamwebuild@gmail.com</p>
                </span>
            </div>
            
        </div>
        <div className="contact-col">

            <form>
                <br/><br/><br/><br/><br/><br/>
                <div className='vel'>
                <input type="text" placeholder="Enter Your Name" required/>
                </div>
                <div className='io'>
                    <input type="email" placeholder="Enter Email address" required/>
                </div>
                <div className='io1'>
                <input type="email" placeholder="Enter Your Subject" required/>
                </div>
                <div className='io2'>
                <input type="text" placeholder="Mobile" required/>
                </div>
                <div className='io3'>
                <textarea  rows="8" placeholder="Message" required></textarea>
                </div>
                <br />
                <div  className='io4'>
                <button type="submit" className="hero-btn red-btn">Send Message</button>
                </div>
            </form>
        </div >
        <div className='image'>
     <img src="./pic1.jpg"/>
</div>
    </div>
 </section>
    </div>
  )
}

export default App
