
import Login from '@/components/Login'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-gray-300 flex items-center flex-col py-4'>
      <Login />
    </div>
  )
}
