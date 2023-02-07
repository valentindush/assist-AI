import React from 'react'
import { Message } from '../../data'
import { FiCopy } from 'react-icons/fi'


const Msg = ({msg}: {msg: Message}) => {
  return (
    <div className= {`p-3 relative w-fit mt-4 font-medium text-sm max-w-[70%]  break-words ${msg.sender !== "assistant"?"bg-blue-500 text-white mr-0 ml-auto rounded-l-2xl rounded-br-2xl" : "bg-white text-gray-900 rounded-r-2xl rounded-bl-2xl"}`}>
        <div className={`${msg.sender ==="assistant"?"pr-8": ""}`}>
            {msg.text}
            
        </div>
        <div className={`absolute min-w-[50px] text-gray-500 -bottom-4 text-xs ${msg.sender !== "assistant"?"right-0":""}`}>
            {`${msg.date.getHours()}:${msg.date.getMinutes()} ${msg.date.getHours() > 12 ? "PM" : "AM"}`}
        </div>
        {msg.sender === "assistant" && <button className='absolute right-3 top-[30%]'>
            <FiCopy className='text-gray-500'/>
        </button>}
    </div>
  )
}

export default Msg