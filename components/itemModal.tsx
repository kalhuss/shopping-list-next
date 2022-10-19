import { FC, SetStateAction, Dispatch } from 'react'
import { useState } from 'react'
import { shoppingItem } from "@prisma/client"
import Router from 'next/router'

//Interface for the props
interface ItemModalProps {
    setShowModal : Dispatch<SetStateAction<boolean>>,
    items : shoppingItem[]
}


const ItemModal: FC<ItemModalProps> = ({setShowModal}) => {

    //States for the form
    const [input, setInput] = useState('')

    //Calls the API to create a new item
    const addItem = (item: string) => {
        fetch('/api/addItem', {method: 'POST', body: JSON.stringify({item})})
        .then(() => Router.push('/'))
    }
    
    //Creating the component modal to add a new item
    return (
        <div className='absolute z-10 inset-0 flex items-center justify-center bg-black/75'>
            <div className='rounded-md space-y-4 p-3 bg-white'>
                <h3 className='text-2xl font-semibold'>Name of item</h3>
                <input 
                    type = 'text'
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    className='w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-300 focus:ring-blue-500 focus:ring-2 focus:outline-none'
                />
                <div className='grid grid-cols-2 gap-8'>
                    <button onClick = {() => {addItem(input); setShowModal(false)}} className='bg-green-500 text-white text-xs px-2 py-2 rounded-md hover:bg-green-600'>Add</button>
                    <button onClick={() => setShowModal(false)} className='bg-red-500 text-white text-xs px-2 py-2 rounded-md hover:bg-red-600'>Cancel</button>
                </div>
            </div>
            
        </div>
    )
}

//Default export
export default ItemModal