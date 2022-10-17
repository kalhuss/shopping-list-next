import { FC, SetStateAction, Dispatch } from 'react';

interface ItemModalProps {
    setShowModal : Dispatch<SetStateAction<boolean>>
}

const ItemModal: FC<ItemModalProps> = ({setShowModal}) => {
    return (
        <div className='absolute inset-0 flex items-center justify-center bg-black/75'>
            <div className='rounded-md space-y-4 p-3 bg-white'>
                <h3 className='text-2xl font-semibold'>Name of item</h3>
                <input type = 'text'
                className='w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-300 focus:ring-blue-500 focus:ring-2 focus:outline-none'/>
                <div className='grid grid-cols-2 gap-8'>
                    <button className='bg-green-500 text-white text-xs px-2 py-2 rounded-md hover:bg-green-600'>Add</button>
                    <button onClick={() => setShowModal(false)} className='bg-red-500 text-white text-xs px-2 py-2 rounded-md hover:bg-red-600'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ItemModal