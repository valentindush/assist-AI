import React, { FormEvent } from 'react'
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa'
import {RiSendPlaneLine} from 'react-icons/ri'

const SendMsg = ({sendFunc}: {sendFunc: Function}) => {

    const [smgText, setSmgText] = React.useState<string>('')

    const handleSend = (e:FormEvent)=>{
        e.preventDefault()
        if(smgText === '') return
        sendFunc(smgText)
        setSmgText('')
    }

  return (
    <div>
        <form onSubmit={(e)=>handleSend(e)} action="#" className='flex items-center justify-between mt-2 px-3 relative gap-8'>
            <div className='flex w-full items-center bg-white pr-3 rounded-xl'>
                <input value={smgText} onChange={(e)=>setSmgText(e.target.value)} type="text" placeholder='Message' className='bg-white outline-none p-4 h-12 w-full rounded-2xl' />
                <button type='submit' className='rounded-full w-5 h-5 border border-gray-800 flex items-center justify-center'>
                    <RiSendPlaneLine size={12} />
                </button>
            </div>
            
            <button className='bg-blue-500 rounded-full w-[2.8rem] h-10 flex items-center justify-center '>
                <FaMicrophone size={20} className='text-white' />
            </button>

            {/*  */}

        </form>
    </div>
  )
}

export default SendMsg