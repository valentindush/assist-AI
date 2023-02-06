import RecentChat from './recentChat'
import {useState} from 'react'
import {TiMessages} from 'react-icons/ti'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const RecentChats = ({chats}: {chats: string[]}) => {
  const [show, setShow] = useState(false)
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
            {chats.map((msg, index)=>{
                return (
                    <RecentChat msg={msg} key={index} />
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