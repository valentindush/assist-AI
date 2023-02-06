import React from 'react'
import { Message } from '../../data'
import Msg from './message'
import SendMsg from './sendMsg'

const ChatContainer = ({messages}:{messages: Message[]}) => {
  return (
    <div className='w-full bg-slate-100 h-[89vh] pt-4 p-4'>
        <div className="h-[90%] overflow-y-auto">
            {messages.map((msg, index)=>{
                return (
                    <Msg msg={msg} key={index} />
                )
            })}
        </div>
        <SendMsg />
    </div>
  )
}

export default ChatContainer