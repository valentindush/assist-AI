import React from 'react'
import Header from '../components/chat/header'
import RecentChats from '../components/chat/recentChats'
import { messages, recentMessages } from '../data'
import ChatContainer from '../components/chat/chatContainer'

const Chat = () => {
  return (
    <div className='flex md:block'>
        <div className="w-full relative ">
            <Header />
            <ChatContainer messages={messages} />
        </div>
        <div className="">
            <RecentChats chats={recentMessages} />
        </div>
    </div>
  )
}

export default Chat