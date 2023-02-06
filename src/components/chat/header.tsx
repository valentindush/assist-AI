import React from 'react'
import {FaBars} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='w-full flex p-4 items-center gap-7 bg-white shadow-sm'>
        <div className="">
            <FaBars className='text-gray-900 text-xl' />
        </div>
        <div className="">
            <h2 className='text-xl font-semibold text-gray-800'>Real Assist AI</h2>
            <p className='text-xs text-gray-500'>This a private message between you and assistant</p>
        </div>
    </div>
  )
}

export default Header