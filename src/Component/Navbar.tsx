import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "../hooks/useMediaQuery"
import {useState} from "react"
import SidebarFilters from "./ResponsiveDropdown";




type Props = {

    isTopOfPage: boolean;
   
}

type dataprops ={
    title: string;
    details: string;
}
type Initiativesdata ={
    title: string;
    details: string;
}
type aboutData ={
    title: string;
    details: string;
}

const servicesdata:Array<dataprops> =[
    {title: "Web Application Penetration Testing",details:"Track the latest vulnerabilities and cyber treats to your Application"},
    {title: "Mobile Apllication penetration Texting",details:"All in one network security for your mobile application"},
    {title: "Network penetration testing",details:"Track the latest vulnerabilities and cyber treats to your Application"},
    {title: "Cloud security",details:"Track the latest vulnerabilities and cyber treats to your Application"},
    {title: "Web Application Penetration Testing",details:"Track the latest vulnerabilities and cyber treats to your Application"},
    
]
const Initiativesdata: Array<Initiativesdata> =[
    {title: "Web Application Penetration Testing",details:"Track the latest vulnerabilities and cyber treats to your Application"},
    {title: "Mobile Apllication penetration Texting",details:"All in one network security for your mobile application"},
    
]
const aboutData: Array<aboutData> =[
    {title: "Web Application Penetration Testing",details:"Track the latest vulnerabilities and cyber treats to your Application"},
    {title: "Mobile Apllication penetration Texting",details:"All in one network security for your mobile application"},
    {title: "Web Application Penetration Testing",details:"Track the latest vulnerabilities and cyber treats to your Application"},
    {title: "Mobile Apllication penetration Texting",details:"All in one network security for your mobile application"},
    
]


const Navbar = ({isTopOfPage,}: Props) => {
    
    const flexbetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false)
    const navbarBackground = isTopOfPage ? " " : "bg-primary-100 drop-shadow";

    const [showdiv,setShowDiv] = useState(false)
    const [hoverDivdata, setHoverDivData] = useState(servicesdata)
    const hoverdiv=(text:string)=>{
        setShowDiv(true)
        if(text === "Services"){
            setHoverDivData(servicesdata)
        }
        if(text === "Initiatives"){
           
            setHoverDivData(Initiativesdata)
        }
        if(text === "About Us"){
           
            setHoverDivData(aboutData)
        }
        
    }
  return <nav >
    <div  className={`${navbarBackground} ${flexbetween} hslacolor backdrop-blur-xl fixed top-0 px-0 py-8 z-30 w-full text-white  `}>

    <div className={`${flexbetween} mx-auto w-11/12 `}>
        <div className={`${flexbetween} gap-16 w-full `}>
            {/* <img src={logo} alt="" /> */}
           <h1 className="text-4xl font-bold flex">Prime <span className="font-normal">Fort</span></h1>

            {/* Right Side */}
            {
                isAboveMediumScreens ?
            
            <div className={`${flexbetween} ms-16 w-full relative `}>
                <div className={`${flexbetween} gap-8 text-base `}>
                    <a className="aa"  onMouseLeave={()=> setShowDiv(false)} onMouseEnter={(e)=>hoverdiv((e.target as HTMLElement).innerText)} href="/">Services</a>
                    <a className="aa" href="">Managed Security Services</a>
                    <a className="aa"  onMouseLeave={()=> setShowDiv(false)} onMouseEnter={(e)=>hoverdiv((e.target as HTMLElement).innerText)} href="">Initiatives</a>
                    <a className="aa" onMouseLeave={()=> setShowDiv(false)} onMouseEnter={(e)=>hoverdiv((e.target as HTMLElement).innerText)} href="/">About Us</a>
                    <a className="aa" href="/">Blog</a>
                </div>
                <div className="border-2 border-s-8 border-[#4858e8] hover:bg-white hover:border-0 hover:text-black font-bold transition-all duration-200 w-36 h-10 flex justify-center items-center" >
                    CONTACT US
                </div>
                {
                    showdiv && 
                    <>
                    <div onMouseEnter={()=>setShowDiv(true)} className="w-[550px] top-6 h-10 absolute "></div>
                    <div onMouseLeave={()=>setShowDiv(false)} onMouseEnter={()=>setShowDiv(true)} className={`absolute flex   flex-wrap gap-10 p-10 bg-[#0e0e30] w-[760px] min-h-[200px] top-12 -left-[10%] border-b-4 border-[#4858e8]  `}>
                    {
                            hoverDivdata.map((item,key)=>(
                                <div className="w-80 " key={key}>
                                    <p className="text-lg max-w-[250px]">{item.title}</p>
                                    <p className="text-xs text-gray-400 max-w-[200px]">{item.details}</p>
                                </div>
                            ))
                    }
            </div>
            </>
                }
               
            </div>
            :
            (
                <div className="flex gap-5">
                <button
                    className="bg-secondary-500 p-2 rounded-full"
                    onClick={()=> setIsMenuToggled(!isMenuToggled)}
                >
                    <Bars3Icon className="h-6 w-6 text-white" />

                </button>
                 <div className="max-md:hidden border-2 border-s-8 border-[#4858e8] hover:bg-white hover:border-0 hover:text-black font-bold transition-all duration-200 w-36 h-10 flex justify-center items-center" >
                 CONTACT US
             </div>
             </div>
            )
            }
        </div>
    </div>
    </div>

            {/* Mobile menu//// */}
           {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed left-0 bottom-0 z-40 h-full w-[50%] bg-[#0e0e30] drop-shadow-xl">

               
                    {/* Menu items //// */}
                    <div className=" h-2/3 overflow-y-scroll flex justify-start ps-10 pt-10 items-start text-2xl gap-10">
                    <div className="flex flex-col gap-10 w-full">
                    <SidebarFilters  filtername={"Services"} data={servicesdata}/>
                    <a className="text-white text-2lg font-medium ps-5" href="">Managed Security Services</a>
                    <SidebarFilters  filtername={"Initiatives"} data={servicesdata}/>
                    <SidebarFilters  filtername={"About Us"} data={servicesdata}/>
                    <a className="text-white text-2lg font-medium ps-5" href="">Blog</a>
                    </div>
                </div>
                 <div className="flex justify-between p-12 ">
                 <div className=" border-2 border-s-8 border-[#4858e8] text-[#4858e8] hover:bg-white hover:border-0 hover:text-black font-bold transition-all duration-200 w-36 h-10 flex justify-center items-center" >
                 CONTACT US
             </div>
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                    </div>
                
            </div>
           )}


  </nav>
    
  
}

export default Navbar