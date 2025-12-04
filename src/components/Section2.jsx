function Section2(){
    return(
    <div className="flex flex-col justify-center items-center h-screen bg-white relative mt-28">
        <h1 className="font-bold text-3xl">MacBook Air</h1>
    <p className="text-2xl font-semibold">Sky Blue Color</p>
        <p className="text-2xl font-semibold">Sky High Perfimance with M4</p>
    <div><button className="bg-blue-600 px-2 py-2 rounded-xl mt-3 text-white" >Learn More</button>
    <button className="py-2 px-6 rounded-xl mt-3 text-white bg-blue-600 ml-5">Buy</button></div>
        <img
        src="mac.webp"
        alt="mac.webp"
        className="w-1/2 object-contain"
      />
        </div>
    )
}

export default Section2;