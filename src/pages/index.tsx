import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import InfoBar from '@/components/InfoBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <InfoBar/>
    </div>
  )
}
