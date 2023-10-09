
type dataprops ={
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

const Footer = () => {
  return (
    <div className='pt-32 pb-6'>
        <div className='flex max-sm:flex-col max-sm:items-start max-sm:ps-6 justify-center items-center gap-10  h-full'>
            <div className='flex flex-col justify-center mb-16 gap-4 text-white h-full'>
            <h1 className="text-4xl font-bold flex">Prime <span className="font-normal">Fort</span></h1>
                <p className='max-w-xs text-xs'>Primefort is a global provider of IT security
                     solutions that solve real business issues. Our dedicated
                      team of security engineers offers solutions to customers
                       throughout the world for securing innovations.</p>
            </div>
            <div className='flex flex-col  gap-4 text-white hidden lg:block'>
                <p className=" text-[#4858e8] font-bold mb-2">Services</p>
                <div className="flex flex-col gap-4">
                   {
                    servicesdata.map((item,key)=>(
                        <p className="text-xs aa" key={key} >{item.title}</p>
                    ))
                   }
                </div>
            </div>
            {/* about us */}
            <div className='flex flex-col  gap-4 text-white hidden lg:block'>
                <p className=" text-[#4858e8] font-bold mb-2">About Us</p>
                <div className="flex flex-col gap-4">
                   {
                    servicesdata.map((item,key)=>(
                        <p className="text-xs aa" key={key} >{item.title}</p>
                    ))
                   }
                </div>
            </div>

            {/* //contact  */}
            <div className='flex flex-col  gap-4 text-white '>
            <div className="border-2 border-s-8 border-[#4858e8] text-[#4858e8] hover:bg-white hover:border-0 hover:text-black font-bold transition-all duration-200 w-36 h-10 flex justify-center items-center" >
                 CONTACT US
             </div>
             <div className="flex gap-10 text-white font-bold text-xl ">
                <p>F</p>
                <p>t</p>
                <p>i</p>
             </div>
             <div className="flex flex-col gap-3">
                <p className="text-[#4858e8] font-bold">Headquarters</p>
                <p className="max-w-xs text-xs">Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
             </div>
             <div className="flex flex-col gap-3">
                <p className="text-[#4858e8] font-bold">Email</p>
                <p className="max-w-xs text-xs">info@primefort.net</p>
             </div>
                
            </div>
           
        </div>
        <p className="text-white text-center pt-10 text-xs">Privacy Policy | Terms and Conditions</p>
        <p className="text-white text-center pt-2 text-xs ">© Copyright - Primefort Private Limited</p>
    </div>
  )
}

export default Footer