import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import MainSec from './Component/MainSec'
import Footer from './Component/Footer'

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll=()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
      }
      else{
        setIsTopOfPage(false)
      }
    }
    

    window.addEventListener("scroll",handleScroll)
    return()=> window.removeEventListener("scroll",handleScroll)
    
  }, [])

  return (
    <>
     <div className='bg-[#07071B]'>
      <Navbar isTopOfPage={isTopOfPage} />
      <div className=' py-20 pt-28 relative '>
        <img className='w-full h-[1000px] opacity-20 absolute' src="https://cdn.pixabay.com/photo/2020/03/21/22/14/dublin-4955328_1280.jpg" alt="" />
          <MainSec/>
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default App
