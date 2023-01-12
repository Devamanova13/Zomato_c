import React from "react";
import '../styles/Home.css';
import axios from "axios";
import Sample from "./sample";

class Sample2 extends React.Component{
    constructor(){
        super();
        this.state = {
            locations:[]
        }
    }
    componentDidMount(){
        axios({
            method:'GET',
            url:'/locations',
            headers:{'Content-Type':'application/json'}
        })
        .then(response =>{
            this.setState({locations:response.data.locations})
        })
        .catch(err => console.log(err));
    }
    render(){
        const {locations} = this.state;
        return(
            <div>  
            hi this in new year
                <Sample locationsData={locations}/>
           
            </div>
        )
    }
}
export default Sample2;