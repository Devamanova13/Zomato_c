/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../styles/Home.css';
import Wallpaper from "./Wallpaper";
import Quicksearch from "./Quicksearch";
import axios from "axios";

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            locations:[],
            //diy 86 first question
            mealtypes:[]
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

        //diy 86 first question
        axios({
            method:'GET',
            url:'/mealtypes',
            headers:{'Content-Type':'application/json'}
        })
        .then(response =>{
            this.setState({mealtypes:response.data.mealtypes})
        })
        .catch(err => console.log(err));
    }


    render(){//diy 86 first question
        const {locations, mealtypes} = this.state;
        return(
            <div>  
            <Wallpaper locationsData={locations}  />
            {/* diy 86 first question */}
            <Quicksearch quicksearchData={mealtypes}/>
            </div>
        )
    }
}
export default Home;