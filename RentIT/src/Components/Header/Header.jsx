import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
    <div className=' flex justify-between bg-amber-100 p-2 border-b-2 border-black'>
    <div className=' cursor-pointer'>
       <h1 className=' text-4xl courgette-regular p-6 pb-0'>Rent<span className='text-yellow-400'>IT</span></h1> 
       <h4 className='p-0 pl-10 m-0 text-sm courgette-regular'>Anyone can drive</h4>
    </div>
    <div className=' flex'>
        <button className=' bg-white courgette-regular rounded-full mt-4 mr-7 px-3 py-2 border-2 border-black h-fit'><span className=' text-3xl pr-4 text-yellow-400 '>R</span>Become a Host</button>
        <ul className=' flex text-lg px-5 pt-8 courgette-regular cursor-pointer'>
          <li className=' pr-3 '>Company Profile</li>
          <li>Signup/Signin</li>
        </ul>
        </div>
    </div>
    <p className='flex justify-center py-3 bg-yellow-400'>RentIT goes public on Nasdaq, now trading under the ticker symbol "RIT". Know more.</p>
    </div>
    
  )
}

export default Header
