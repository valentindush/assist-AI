import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaAngleDown, FaEdit, FaRecycle } from 'react-icons/fa'

const RecentChat = ({msg, deleteFunc,id} : {msg: string, deleteFunc:Function, id:number}) => {

    const [showMenu, setShowMenu] = React.useState(false)

    return (
        <div className="text-gray-800 mt-2 flex font-medium items-center gap-4 relative justify-between w-full pr-4 ">
            <p>{msg}</p>
            <FaAngleDown onClick={()=>setShowMenu(!showMenu)} className={`text-gray-600 cursor-pointer ${showMenu?"rotate-[180deg]": ""}`} />

            {/* MEnu */}

            {showMenu && <div className="absolute p-4 w-[200px] shadow-md bg-white right-4 top-9 z-10 font-medium">
                <button className="flex items-center gap-3">
                    <FaEdit />
                    <span>Edit title</span>
                </button>
                <button onClick={()=>deleteFunc(id)} className="flex items-center gap-2 mt-4 ">
                    <AiOutlineDelete className='text-red-500' />
                    <span className='text-red-500'>Delete Chat</span>
                </button>
            </div>}

        </div>
    )
}

export default RecentChat