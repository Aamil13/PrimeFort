



const MainSec = () => {
  return (
    <div className="text-white mt-36 lg:mt-0 z-10 w-full h-[900px] flex items-center justify-center">
        <div className="flex  justify-center items-center mt-10 w-full h-full">
            <div className="w-11/12 h-[1200px] lg:h-full hslacolor backdrop-blur-xl flex flex-col lg:flex-row justify-evenly lg:justify-between p-8">
                {/* left getin touch */}
                <div className="w-1/2 max-sm:w-full p-5 pt-14">
                    <div className="flex flex-col h-2/5 justify-between">
                        <div className="flex flex-col gap-4">
                            <p className="text-3xl ">Get in Touch</p>
                            <p className="text-base text-gray-300">Reach out to us. We can make something awesome together</p>
                        </div>
                        <div className="flex flex-col gap-4 text-gray-100">
                            <p>info@primefort.net</p>
                            <p className="max-w-xs">Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
                        </div>
                    </div>
                </div>
                {/* Get in touch End */}

                <div className="lg:w-1/2 w-full h-[730px] lg:h-full border-[#4858e8] border-2 flex justify-center items-center">
                        <div className="bg-[#e3e9ff] w-[96%] h-[96%] max-sm:h-full flex flex-col gap-10 justify-start pt-20 max-sm:pt-10 items-center">
                            <div className="w-4/5 flex flex-col text-[#4858e8] border-b-2 border-[#4858e8]">
                                <label >Full Name</label>
                                <input className="p-2 mb-2 bg-inherit outline-none text-black"  type="text" />
                            </div>
                            <div className="w-4/5 flex flex-col text-[#4858e8] border-b-2 border-[#4858e8]">
                                <label >Email</label>
                                <input className="p-2 mb-2 bg-inherit outline-none text-black"  type="text" />
                            </div>
                            <div className="w-4/5 flex flex-col text-[#4858e8] border-b-2 border-[#4858e8]">
                                <label >Subject</label>
                                <input className="p-2 mb-2 bg-inherit outline-none text-black"  type="text" />
                            </div>
                            <div className="w-4/5 flex flex-col text-[#4858e8] border-b-2 border-[#4858e8]">
                                <label >Message</label>
                                <textarea className="h-32 max-sm:h-28 p-2 mb-2 bg-inherit outline-none text-black"></textarea>
                            </div>
                            <div className="w-full ms-24">
                            <div className="border-2 border-s-8 border-[#4858e8] text-[#4858e8]  hover:border-blue-950 hover:text-black font-bold transition-all duration-200 w-36 h-10 flex justify-center items-center" >
                             Send Message
                                 </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSec