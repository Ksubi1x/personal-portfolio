import React from 'react'
import Hamburger from './Hamburger/Hamburger'
import './Header.css'


const Header = () => {
  return (
    <div>
      <header className='header'>
        <nav className='navigation'>
          
          <h3>Ksubi1x</h3>
          
          <ul className='navMenu'>
            

            <li className='navList'>
              <a className='navLink' href='#contact' >Contact Me</a>
            </li>
          </ul>
          
          
          
          <Hamburger />

        </nav>
      </header>
    </div>
  )
}

export default Header