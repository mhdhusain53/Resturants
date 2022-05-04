import React from "react";

const Total =({items,changePage})=>{
    var totl=25*items['a']+170*items['b']+220*items['c']+270*items['d']+210*items['e'];
    if(totl!=0){
        return (
            <div className=" border-2 flex justify-center bg-yellow-300 p-5 ">
                <h1 className="text-3xl ">Total is ₹{totl}</h1>
                <a onClick={()=>changePage()} className="bg-white text-yellow-500 text-2xl hover:bg-yellow-100 hover:shadow-2xl rounded-xl ml-12 p-1">Confirm Order</a>
            </div>
        );
    }
    else{
        return <div>
            
        </div>
    }
}

export default Total;