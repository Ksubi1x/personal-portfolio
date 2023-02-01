import React from 'react'
import './Hamburger.css'
import { useState } from 'react'

const Hamburger = () => {

    const [opened, setOpened] = useState(false)

    const setChange = () => {
        setOpened(!opened)
    }

    let classAdded = opened ? 'opened' : ''

  return (
    <div className='hamburger'>
        <section onClick={ setChange } className='lines'>
            <div className='line2'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </section>

        <nav className={`menu ${classAdded} `}>
            <ul className='menuList'>
               
                <li className='menuItem'>
                    <a href='#contact' className='link'>Contact me</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Hamburger