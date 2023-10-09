import  { useState } from 'react'


type datatype={
    title: string;
    details: string;
}
type props={
    filtername: string;
    data:Array<datatype>
}

const SidebarFilters = ({filtername,data}:props) => {

    const [hide, setHide] = useState(false)
  

    
  return (
                <div className=' w-11/12 '>
                    <div className='relative ps-5 flex justify-between w-full  p-1 '>
                    <p className='font-medium text-2xl text-white' onClick={()=>setHide(!hide)}>{filtername} </p>
                    <p className={`${hide ? "rotate-90" : ""} text-white absolute top-1 right-2 transition-all duration-100`}>&gt;</p>
                    </div>
                {
                    hide && 
                    <div className='ps-6 transition-all duration-300 text-gray-400'>
                    <ul>
                        {data.map((item,idx)=>(
                            <li className='text-lg p-4'  key={idx}>{item?.title}</li>
                        ))}
                    </ul>
                </div>
                }
                
            </div>
  )
}

export default SidebarFilters