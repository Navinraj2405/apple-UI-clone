 import iphone16 from '/public/iPhone-16-Pro-Max-1.avif'


function Section1(){
    return(
  <div className="flex flex-col justify-center items-center h-screen bg-white relative mb-5">
    <h1 className="font-bold text-3xl">Iphone</h1>
    <p className="text-2xl font-semibold">Meet the Iphone family</p>
    <div><button className="bg-blue-500 px-2 py-2 rounded-xl mt-3 text-white" >Learn More</button>
    <button className=" px-2 py-2 rounded-xl mt-3 text-white bg-blue-500 ml-5">Shop more</button></div>
    <p className="mt-5">Built for apple intelegent</p>
      <img
        src={iphone16}
        alt="iPhone 16 Pro Max"
        className="w-1/2 object-contain"
      />
    </div>    
    )
};

export default Section1;