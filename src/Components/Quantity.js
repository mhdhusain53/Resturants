import React from "react";

const Quantity =({no,id,add,remove})=>{
    if(no==0){
        return <div onClick={()=>add(id)} className="mt-2 border-2 w-24 h-10 border-red-300 rounded-xl flex justify-center">
                <button  className="text-red-500 text-xl" >ADD</button>
            </div>
    }else{
        return <div className="mt-2 border-2 w-24 h-10 border-red-300 rounded-xl flex justify-center">
        <button onClick={()=>add(id)} className="mr-1 text-red-500 text-3xl">+</button>
        <span className="p-1 text-2xl">{no}</span>
        <button onClick={()=>remove(id)} className="ml-1 text-red-500 text-3xl" >-</button>
    </div>
    }

}

export default Quantity;