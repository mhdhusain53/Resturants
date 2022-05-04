import React, { useState } from "react";

const Navbar = ({location})=>{
  const [nav,setNav]=useState(false);
    return (
        <div>
            <nav class="flex items-center justify-between flex-wrap bg-yellow-300 p-6">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Black Spoon</span>
  </div>
  <div class="block sm:hidden">
    <button onClick={()=>setNav(!nav)} class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Home</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
    <div class="text-sm sm:flex-grow">
    
      
    </div>
    <div className={`${nav?"":"hidden"} sm:block text-gray-400`}>
    <a href="/" class={`${location==="1"? "text-gray-800 ":""} block mt-4 sm:inline-block md:mt-0  hover:text-gray-900 mr-4`}>
        Home
      </a>
      <a href="/contact" class={`${location==="2"? "text-gray-800 ":""} block mt-4 sm:inline-block md:mt-0  hover:text-gray-900 mr-4`}>
        Contact Us
      </a>
      <a href="/order" class={`${location==="3"? "text-gray-800 ":""} block mt-4 sm:inline-block md:mt-0  hover:text-gray-900 mr-4`}>
        Order
      </a>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;