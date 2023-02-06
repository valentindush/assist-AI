import React, { useEffect } from 'react'
import Header from '../components/chat/header'
import RecentChats from '../components/chat/recentChats'
import { Message, dummyMessages, dummyRecentMessages } from '../data'
import ChatContainer from '../components/chat/chatContainer'



const Chat = () => {

  const [messages, setMessages] = React.useState<Message[]>(dummyMessages)

  return (
    <div className='flex md:block'>
        <div className="w-full relative ">
            <Header />
            <ChatContainer setMessages={setMessages} messages={messages} />
        </div>
        <div className="">
            <RecentChats chats={dummyRecentMessages} />
        </div>
    </div>
  )
}

export default Chat