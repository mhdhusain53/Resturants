import React from "react";
import Card from "./Card";
import Data from "./Data";

const CardList = ({items,add,remove})=>{
    
    const Menu =Data.map((data)=>{
        const ID=data.id;
        return (<Card 
            key={ID}
            id={ID}
            data={data}
            no={items[ID]}
            add={add}
            remove={remove}
        />)
        
    })
    
    return (
        <div className="mt-8 mx-3 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
             {Menu}   
        </div>
    )

}

export default CardList;