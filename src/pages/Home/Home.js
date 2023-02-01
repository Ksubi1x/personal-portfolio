import React, { useRef } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'


const Home = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9gpxkhl', 'template_1hna7ku', form.current, 'LjKVSY5RkUY4dz790')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const [closeMessage, setCloseMessage] = useState(false)

  const popup = () => {
    setCloseMessage(!closeMessage)
    console.log(closeMessage)
  }

  let messageClass = closeMessage ? 'closed' : ''


  return (
    <div className='home'>
       
        <Header />

        <main className='homeContainer'>

          {/* HERO SECTION */}
          <hero className='hero'>
            <div className='background'>
              <div className='heroText'>
                <h5>Ksubi1x</h5>
                <p>Frontend Web Developer</p>
              </div>
            </div>
            
          </hero>

          <div className='sectionsContainer'>
              {/* ABOUT ME */}
            <section className='aboutMe'>
              <div className='sectionName'>
                <h3>About</h3>
                <div className='line'></div>
              </div>
              <p>My name is Jesus Hernandez, and I am a Frontend Web Developer specialized in 
                creating responsive web pages for customers. 
              </p>

              <p>Feel free to <a className='contactLink' href='#'>contact me</a> if you'd like to talk. Wether it's work related or not, it doesn't matter.</p>
            </section>

            <section className='projects'>
              
              

              <div className='projectsGrid'>
                <div className='sectionName'>
                  <h3>Projects</h3>
                  <div className='line'></div>
                </div>
                <section className='project'>
                  <div className='projectDesc'>
                    <h2>MyPages</h2>
                    <p className='technologies'>ReactJS, HTML, CSS, ReactRouter</p>
                    <p>Simple Login and Register pages I made using React.</p>
                    <ul>
                      <li>
                        <a className='projectLink' target="_blank" >- Live Link</a>
                      </li>
                      <li>
                        <a href='https://github.com/Ksubi1x/myPages' target="_blank" className='projectLink'>- Repository Link</a>
                      </li>
                    </ul>
                  </div>
                  
                </section>

                <section className='project'>
                  <div className='projectDesc'>
                    <h2>MyTracker</h2>
                    <p className='technologies'>HTML, CSS, JavaScript, MySQL</p>
                    <p>Basic FullStack application using MySQL to track a users calories and store their data.</p>
                    <ul>
                      <li>
                        <a className='projectLink' target="_blank">- Live Link</a>
                      </li>
                      <li>
                        <a href='https://github.com/kipschetnan/Food-Tracker' target="_blank" className='projectLink'>- Repository Link</a>
                      </li>
                    </ul>
                  </div>
                </section>


                <section className='project'>
                  <div className='projectDesc'>
                    <h2>Password Generator</h2>
                    <p className='technologies'>HTML, CSS, JavaScript</p>
                    <p>Fully functional password generator with custom selections.</p>
                    <ul>
                      <li>
                        <a className='projectLink' href='https://ksubi1x.github.io/password-generator/' target="_blank">- Live Link</a>
                      </li>
                      <li>
                        <a href='https://github.com/Ksubi1x/password-generator' target="_blank" className='projectLink'>- Repository Link</a>
                      </li>
                    </ul>
                  </div>
                </section>


                <section className='project'>
                  <div className='projectDesc'>
                    <h2>Calculator</h2>
                    <p className='technologies'>HTML, CSS, JavaScript</p>
                    <p>Just a fully functional calculator that solves simple problems.</p>
                    <ul>
                      <li>
                        <a className='projectLink' href='https://ksubi1x.github.io/calculator/' target="_blank">- Live Link</a>
                      </li>
                      <li>
                        <a href='https://github.com/Ksubi1x/calculator' target="_blank" className='projectLink'>- Repository Link</a>
                      </li>
                    </ul>
                  </div>
                </section>

                
                <section className='project'>
                  <div className='projectDesc'>
                    <h2>Bill Splitter</h2>
                    <p className='technologies'>HTML, CSS, JavaScript</p>
                    <p>Simple JavaScript powered bill splitter to divide a bill for multiple people</p>
                    <ul>
                      <li>
                        <a href='https://ksubi1x.github.io/bill-splitter/' target="_blank" className='projectLink'>- Live Link</a>
                      </li>
                      <li>
                        <a href='https://github.com/Ksubi1x/bill-splitter' target="_blank" className='projectLink'>- Repository Link</a>
                      </li>
                    </ul>
                  </div>
                </section>
                
                <section className='project'>
                  <div className='projectDesc'>
                    <h2>Forecast Daily</h2>
                    <p className='technologies'>HTML, Tailwind, JavaScript</p>
                    <p>Simple weather forecast app using the OpenWeatherAPI</p>
                    <ul>
                      <li>
                        <a href='https://ksubi1x.github.io/Forecast-Daily/' target="_blank" className='projectLink'>- Live Link</a>
                      </li>
                      <li>
                        <a href='https://github.com/Ksubi1x/Forecast-Daily' target="_blank" className='projectLink'>- Repository Link</a>
                      </li>
                    </ul>
                  </div>
                </section>

              </div>
              
            </section>

            <section className='contactForm'>
              <div className='formContainer' id='contact'>
                <form className='formBox' ref={form} onSubmit={sendEmail}>
                  <h3 className='title'>Contact Me</h3>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <div className='lineSpace'></div>
                  <button onClick={popup}>Submit</button>
                </form>
              </div>
            </section>

            <section className='footer'>
              <h3>Socials:</h3>

              <ul className='socials'>
                <li>
                  <a className='projectLink' href='https://github.com/Ksubi1x' target='_blank'>Github </a>
                </li>
                <li>
                  <a className='projectLink'>xKsubi1x@gmail.com</a>
                </li>
                <li>
                  <a className='projectLink' href='https://www.linkedin.com/in/jesus-hernandez-77a152257/' target='_blank'>LinkedIn </a>
                </li>
                
              </ul>
            </section>

            <div className={`sent ${messageClass}`}>
              <div className='message'>
                <h3>Email has been sent!</h3>
                <button className='formButton' onClick={popup} > X </button>
              </div>
            </div>

          </div>
        </main>
    </div>
  )
}

export default Home