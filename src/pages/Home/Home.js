import React from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
const Home = () => {
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
                building products for customers by making their web designs come to life. 
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
          </div>
          
        </main>
    </div>
  )
}

export default Home