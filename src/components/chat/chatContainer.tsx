import React, { useEffect } from 'react'
import { Message } from '../../data'
import Msg from './message'
import SendMsg from './sendMsg'


const ChatContainer = ({messages, setMessages}:{messages: Message[], setMessages:Function}) => {

  useEffect(()=>{
    //Get messages

    const msgs = JSON.parse(localStorage.getItem('messages') || '[]') as Message[]

    //Change dates from string to Date()

    const msgsWithDate = msgs.map(msg=>{
      return {...msg, date: new Date(msg.date)}
    })

    setMessages(msgsWithDate)

  },[])

  const handleSend = (msgText: string) => {
    setMessages([...messages, {text: msgText, sender: "john doe", receiver: "bot", date:new Date(Date.now())}])

    //Use local storage to save messages
    localStorage.setItem('messages', JSON.stringify([...messages, {text: msgText, sender: "john doe", receiver: "bot", date:new Date(Date.now())}]))
  }

  const divRef = React.useRef<HTMLDivElement>(null)

  const autoScroll = () => {
    if(divRef.current){
      divRef.current.scrollTop = divRef.current.scrollHeight
    }
  }

  useEffect(()=>{
    autoScroll()
  },[messages])


  return (
    <div className='w-full bg-slate-100 h-[89vh] pt-4 p-4'>
        <div ref={divRef} className="h-[90%] overflow-y-auto scroll-smooth">
            {messages.map((msg, index)=>{
                return (
                    <Msg msg={msg} key={index} />
                )
            })}
        </div>
        <SendMsg sendFunc={handleSend} />
    </div>
  )
}

export default ChatContainer