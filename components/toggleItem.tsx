import { FC, SetStateAction, Dispatch } from 'react'
import { useState } from 'react'
import { shoppingItem } from "@prisma/client"
import Router from 'next/router'
import { motion } from 'framer-motion'

const toggleItem: FC<shoppingItem> = ({ id, name, checked }) => {

    const [isChecked, setIsChecked] = useState<boolean>(checked)

    //Call the API to delete an item
    const deleteItem = () => {
        fetch('/api/deleteItem', { method: 'POST', body: JSON.stringify({ id }) })
            .then(() => Router.push('/'))
    }

    //Call the API to update an item
  const toggleItem = () => {

    fetch("/api/checkItem", {method: "POST", body: JSON.stringify({
        id,
        checked: !checked,
    })})
    .then(() => {setIsChecked(!checked); Router.push('/')});
    
  }

    return (
        <li key={id} className="flex justify-between items-center bg-gray-100 p-4 mb-3 rounded-md drop-shadow-md">
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 flex origin-left items-center justify-center">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: checked ? '100%' : 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="h-[2px] w-full translate-y-px bg-red-500"
                    />
                </div>
                <span onClick = {() => toggleItem()} className='font-weight-500'>{name}</span>
            </div>
            <button onClick={() => deleteItem()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">X</button>
        </li>
    )
}

export default toggleItem

