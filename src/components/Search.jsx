import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className='searchFrom'>
        <input type="text" placeholder='Find a friend'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInf">
          <span>Yang</span>
        </div>
      </div>
    </div>
  )
}

export default Search