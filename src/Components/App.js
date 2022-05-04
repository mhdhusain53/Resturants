import React, {useState} from "react";
import Home from "./Home";
import Contact from "./Contact";
import Order from "./Order";
import Login from "./Login";
import { render } from "@testing-library/react";


class App extends React.Component{ 

        state={
            'signin':false,
        }

    onSignin =(props)=>{
        this.setState({'signin':props});
    }
    page = (props)=>{
        if(window.location.pathname==="/"){
            return <Home />
        }
        else if(window.location.pathname==="/contact"){
            return <Contact />
        }
        else if(window.location.pathname==="/order"){
            if(this.state['signin']==false){
                return <Login signin={this.onSignin()}/>
            }else{
                console.log("order")
                return <Order />
            }
        }
        else if (window.location.pathname==="/login"){
            if(this.state['signin']==false){
                return <Login  signin={this.onSignin}/>
            }
        }
        
    }
    render(){
    return (
        <div>
            {this.page()}

        </div>
        )
    }

}

export default App;