function Section3(){
    return(
<div className="grid grid-cols-2 gap-4 p-5">
<div className="flex flex-col justify-center items-center h-screen bg-white relative shadow-lg ">
     <h1 className="font-bold text-3xl"> iPad Pro</h1>
     <p  className="text-xl font-semibold">Unbleveble thin. unbleveble Power</p>
         <div><button className="bg-blue-500 px-2 py-2 rounded-xl mt-3 text-white" >Learn More</button>
    <button className="py-2 px-6 rounded-xl mt-3 text-white bg-blue-500 ml-5">Buy</button></div>
    <img
        src="/ipad.jpg"
        alt="ipad.jpg"
        className="w-1/2 object-contain"
      />
</div>
<div className="flex flex-col justify-center items-center h-screen bg-black relative shadow-lg ">
    <h1 className="font-bold text-3xl text-white"> Apple Watch</h1>
    <p className="text-white font-bold text-xl">Serice 10</p>
     <p  className="text-xl font-semibold text-white">Unbleveble thin. unbleveble Power</p>
         <div><button className="bg-blue-500 px-2 py-2 rounded-xl mt-3 text-white" >Learn More</button>
    <button className="py-2 px-6 rounded-xl mt-3 text-white bg-blue-500 ml-5">Buy</button></div>

    <img
        src="/applewatch10.webp"
        alt="applewatch10.webp"
        className="w-1/2 object-contain"
      />
</div>
 <div className="flex flex-col justify-center items-center  h-screen relative overflow-hidden shadow-lg ">
    
  <img
    src="/student.jpeg"
    alt="student.jpeg"
    className="absolute top-0 left-0 w-full h-full object-cover"
  /> 
  <div className="relative z-10 px-4 mt-44">
    <button className="bg-white px-5 py-2 rounded-xl">Learn more</button>
     
  </div>
</div>
<div className=" flex flex-col  items-center h-screen relative overflow-hidden shadow-lg ">
    <div className="relative z-10 text-center ">
        <h1 className="text-3xl font-bold mt-2">Trade In</h1>
    <p className="text-xl">Upgrade and save. It's easy</p>
    <button className="bg-blue-400 px-5 py-3 text-white rounded-xl mt-5">Get your estimate</button>
 
    </div>
     <img
    src="/tradeimg.webp"
    alt="/tradeimg.webp"
    className="absolute top-0 left-0 w-full h-full object-cover"
  /> 
  </div>
</div>
    )

};
export default Section3;