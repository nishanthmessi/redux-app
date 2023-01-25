import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-600 text-white'>
      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-5xl font-bold'>Welcome to our site</h1>
        <p className='text-xl'>One stop solution for all your problems</p>
        <button className='bg-green-700 p-2 w-60 rounded-sm mt-4'>Explore</button>
      </div>
    </div>
  )
}

export default Home