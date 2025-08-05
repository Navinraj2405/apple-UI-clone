import React from "react";
function Navbar(){

    return(
    <nav className="flex justify-between p-5 fixed top-0 z-40 bg-white w-full">
        <ul className="flex justify-between mx-auto gap-8"> 
            <li><img src="/applelogo.png" className="w-10"/></li>
            <li  className="hover:cursor-pointer hover:underline">Store</li>
            <li  className="hover:cursor-pointer hover:underline">Mac</li>
            <li  className="hover:cursor-pointer hover:underline">iPad</li>
            <li  className="hover:cursor-pointer hover:underline">iPhone</li>
            <li  className="hover:cursor-pointer hover:underline">Watch</li>
            <li  className="hover:cursor-pointer hover:underline">AirPods</li>
            <li  className="hover:cursor-pointer hover:underline"> TV & Home</li>
            <li  className="hover:cursor-pointer hover:underline">Entertainment</li>
            <li  className="hover:cursor-pointer hover:underline">Accessories</li>
            <li  className="hover:cursor-pointer hover:underline">Support</li>
             <li><img src="/search-img.png" className="w-6"/></li>
             </ul>
    </nav>
    ) 
}

export default Navbar;