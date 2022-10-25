import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>chatME</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Feifan</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar