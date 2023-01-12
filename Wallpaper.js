/* eslint-disable eqeqeq */
/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
// import React from "react";

import React from 'react';
import axios from 'axios';
//diy 85 question 2 
import {withRouter} from 'react-router-dom';

class Wallpaper extends React.Component{
    // First question answer of diy85
    constructor(){
            super();
            this.state ={
                restaurants: [],
                inputText: '',
                suggestions:[]
            }
        }
        //select option value capturing 
         // First question answer of diy85
        handleLocation = (event) =>{
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
        //diy 85 
         // First question answer of diy85
        handleSearch = (event) => {
            let inputText = event.target.value;

            const {restaurants } = this.state;

            const suggestions = restaurants.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));

            this.setState({ suggestions, inputText});
        }
        // First question answer of diy85
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
        // Second question answer of diy 85

        selectingRestaurant = (resObj) =>{
            this.props.history.push(`/details?restaurants=${resObj._id}`);

        }
       render(){
        const {locationsData} = this.props;
        return(
            <div>
            <div className="topSection">
            <img src="./Assets/food.jpg" alt="Image not found" className="homeImage" />
                {/* <div className="logo"><p className="p">e!</p></div> */}
                <img src="./Assets/zomatologo.png" className="imglogo"></img>
                <div className="headerText">Find the best restaurants, caffes, and bars
                </div>
                <div className="SearchOptions">
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
                    <div>
                        <span className="glyphicon glypicon-search search"></span>
                        <div id="notebooks">
                            <input id="query" className="restaurantsinput" type="text"
                            placeholder= "Please Enter Restaurant Name" onChange ={this.handleSearch}/>
                            {this.showSuggestion()}
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )}
}
export default withRouter(Wallpaper);