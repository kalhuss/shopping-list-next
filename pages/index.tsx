import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import ItemModal from '../components/itemModal'
import { shoppingItem } from '@prisma/client'

const Home: NextPage = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping list</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showModal && <ItemModal setShowModal = { setShowModal }/>}


      <main className='mx-auto my-12 max-w-3xl'>
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Shopping List</h2>
          <button type='button' onClick={ () => setShowModal(true) } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Add Item </button>
        </div>
      </main>
    </div>
  )
}

export default Home
