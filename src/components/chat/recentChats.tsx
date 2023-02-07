import RecentChat from './recentChat'
import {useEffect, useState} from 'react'
import {TiMessages} from 'react-icons/ti'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Message } from '../../data'
const RecentChats = ({chats,setMessages}: {chats: string[], setMessages:Function}) => {
  const [show, setShow] = useState(false)

  const [recentMessages, setRecenteMessages] = useState<string[]>([])

  const handleDelete = (id: number)=>{
    //Delete message from local storage
    const msgs = JSON.parse(localStorage.getItem('messages') || '[]') as Message[]
    const newMsgs = msgs.filter((msg, index)=>index !== id)
    localStorage.setItem('messages', JSON.stringify(newMsgs))

    //Delete message from recent messages
    const newRecentMsgs = recentMessages.filter((msg, index)=>index !== id)
    setRecenteMessages(newRecentMsgs)
    
    const msgsWithDate = msgs.map(msg=>{
      return {...msg, date: new Date(msg.date)}
    })

    setMessages(msgsWithDate)
  }

  //Get recent messages from local storage

  useEffect(()=>{
    const msgs = JSON.parse(localStorage.getItem('messages') || '[]') as Message[]
    //Get array of text messages from messages where sender is not bot
    const recentMsgs = msgs.filter(msg=>msg.sender !== 'bot').map(msg=>msg.text).slice(0,5)
    setRecenteMessages(recentMsgs)
  }, [])

  return (
    <>
    <div className="hidden md:block absolute top-1 right-3">
      <button onClick={()=>setShow(true)}>
        <TiMessages className='text-4xl text-gray-700' />
      </button>
    </div>
    <div className={`min-w-[300px] bg-white ${show?"md:block":"md:hidden"} p-4 relative md:pt-5 md:absolute md:top-0 md:h-full md:bg-white md:bg-opacity-40 md:backdrop-blur-md`}>
        <h2 className='text-xl font-bold text-gray-900'>Recent Chats</h2>

        <div className="mt-3">
            {recentMessages.map((msg, index)=>{
                return (
                    <RecentChat id={index} deleteFunc={handleDelete} msg={msg} key={index} />
                )
            })}
        </div>
        
        {/* Close button */}

        <button onClick={()=>setShow(false)} className='hidden md:block absolute top-3 right-7'>
            <AiOutlineCloseCircle className='text-2xl text-red-400' />
        </button>

    </div>
    </>
  )
}

export default RecentChats