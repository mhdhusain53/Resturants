import React from "react";
import Navbar from "./Navbar";
import CardList from "./CardList";
import Total from "./Total";
import Bill from "./Bill";

class Order extends React.Component{

    constructor(props){
        super(props);
        this.state={
            'a':0,
            'b':0,
            'c':0,
            'd':0,
            'e':0,
            page:true
        }
    }
    add =(props)=>{
       
        switch(props){
            case 'a':{
                this.setState({
            
                    'a':this.state[props]+1
                });
                break;
            }
            case 'b':{
                this.setState({
            
                    'b':this.state[props]+1
                });
                break;
            }
            case 'c':{
                this.setState({
            
                    'c':this.state[props]+1
                });
                break;
            }
            case 'd':{
                this.setState({
            
                    'd':this.state[props]+1
                });
                break;
            }
            case 'e':{
                this.setState({
            
                    'e':this.state[props]+1
                });
                break;
            }
        }
        
    }

    remove =(props)=>{
       
        switch(props){
            case 'a':{
                this.setState({
            
                    'a':this.state[props]-1
                });
                break;
            }
            case 'b':{
                this.setState({
            
                    'b':this.state[props]-1
                });
                break;
            }
            case 'c':{
                this.setState({
            
                    'c':this.state[props]-1
                });
                break;
            }
            case 'd':{
                this.setState({
            
                    'd':this.state[props]-1
                });
                break;
            }
            case 'e':{
                this.setState({
            
                    'e':this.state[props]-1
                });
                break;
            }
        }
        
    }
    changePage=(props)=>{
        this.setState({'page':!(this.state['page'])})
    }
    componentDidMount(props){
        this.setState({'page':true});
    }
    page =(props)=>{
        if(this.state['page']==true){
            return (<div>
                <CardList 
                items={this.state}
                add={this.add}
                remove={this.remove}
                
            />
            <Total 
                items={this.state}
                changePage={this.changePage}
            />
            </div>)
        }
        else{
            return (<Bill 
                items={this.state}
                changePage={this.changePage}
            />)
        }
    }
    render(){
    return (
        <div>
            <Navbar location="3" />
            {this.page()}
            
            
        </div>

    );
}
}

export default Order;
