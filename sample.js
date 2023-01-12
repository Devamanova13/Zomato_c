/* eslint-disable eqeqeq */
import React from "react";
import axios from 'axios';

class Sample extends React.Component{
   constructor(){
        super();
        this.state = {
            restaurants:[],
            suggestions:[],
            inputText: '',
        }
    }
    // First question answer of diy85
    handleLocation =(event) =>{
    
        // const locationId = event.target.value;

        axios({
            method: 'GET',
            url: `/restaurants`,
            header:{'Content-Type':'application/json'}
        })
        .then(response =>{
            this.setState({ restaurants: response.data.restaurants})
        })
        .catch(err => console.log(err));

    }

    handleSearch = (event) => {
        let inputText = event.target.value;

        const {restaurants } = this.state;
    
        const suggestions = restaurants.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));

        this.setState({ suggestions, inputText});
    }

    showSuggestion =() =>{
        const {suggestions, inputText } = this.state;

        if(suggestions.length == 0 && inputText == undefined){
            return null;
        }
        if(suggestions.length > 0 && inputText == ''){
            return null;
        }
        if(suggestions.length == 0 && inputText){
            return <ul>
                <li>No Search Results found</li>
            </ul>
        }
        return(
            <ul>
                {
                    suggestions.map((item,index) => (<li key={index} onClick={() => this.selectingRestaurant(item)}>{`${item.name}-${item.locality},${item.city}`}</li>))
                }
            </ul>
        )
    }

    render(){
        const {locationsData} = this.props;
        // const {restaurants} = this.state;
        // const {suggestions} = this.state;
        return(
           
            <div>
                {/* <h1>Hello world</h1>
                <select className="locationBox">
                            <option value="0" >select</option>
                            {
                             restaurants.map((item) =>{
                             return <option value="1">{item.name}</option>})   
                             }
                </select> */}
                <p>This is Restaurant list page</p>
                <span>
                        <select className="locationBox" onChange={this.handleLocation}>
                            <option value="0" >select</option>
                            {
                                locationsData.map((item) =>{
                                    return <option value={item.location_id}>{`${item.name},${item.city}`}</option>
                                })
                            }    
                        </select>
                    </span>
                <input id="query" className="restaurantsinput" type="text"
                            placeholder= "Please Enter" onChange ={this.handleSearch}/>

                    <h1>{this.showSuggestion()}</h1>

                {/* <h1> {suggestions.map((item) =>{
                    return <h1>{item.name}</h1>
                })}</h1> */}

            </div>
        )
    }
}
export default Sample;