import React from "react";
import '../styles/Details.css';
import queryString from 'query-string';
import axios from "axios";

class Details extends React.Component{ 

//     //diy 85 diy 2nd question
    constructor(){
        super();
        this.state ={
            restaurant: {}
        }
    }
// //diy 85 diy 2nd question
    componentDidMount(){
        const qs = queryString.parse(this.parse.location.search);
        const { restaurant } = qs;

        axios({
            method:'GET',
            url: `/restaurant/${restaurant}`,
            headers:{"content-Type":'application/json'}
        })
        .then(response =>{
            this.setState({ restaurant: response.data.restaurant })
        })
        .catch(err => console.log(err));

    }
    render(){  
        //diy 85 diy 2nd question
        const { restaurant } = this.state;  
        //previous code
        return(
    <div>
        <div id="carouselExample" className="carousel slide">
                      <div className="carousel-inner">
                      <div className="carousel-item active">
                         <img src="./Assets/cakebg2.png" className="d-block w-100" alt="This is a cake" height="500px" width="100%"/>
                      </div>
                      <div className="carousel-item">
                          <img src="./Assets/multi2.jpg" className="d-block w-100" alt="This is a cake 2" height="500px" width="100%"/>
                      </div>
                      <div className="carousel-item">
                         <img src="./Assets/bffcake.png" className="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
                      </div>
                      <div className="carousel-item">
                         <img src="./Assets/cake.png" className="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
                      </div>
                      <div className="carousel-item">
                          <img src="./Assets/ck5.jpg" className="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
                      </div>
                      <div className="carousel-item">
                          <img src="./Assets/ck7.jpg" className="d-block w-100" alt="This is a cake 3" height="500px" width="100%"/>
                      </div>
        </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                       <span className="carousel-control-next-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Next</span>
                     </button>
             </div>
            <div className="bottomsection"> 
                    <div className="heading">{restaurant.name}</div>
                    <button className="btn-order">Order Online </button>

                 <div className="tabs">
                        <div className="tab">
                         <input type="radio" id="tab-1" name="tab-group-1" checked />
                         <label for="tab-1">Overview</label>

                             <div className="content">
                                   <div className="about">About this place</div><br/>
                                   <div className="head">Cuisine</div>
                                   <div className="value">Bakery, Fast-food</div><br/>
                                   <div className="head">Average Cost</div>
                                   <div className="value">&#8377; {restaurant.min_price} for two people(approx)</div>
                             </div>
                        </div>
                        <div className="tab">
                         <input type="radio" id="tab-2" name="tab-group-1"/>
                         <label for="tab-2">Contact</label>

                            <div className="content">
                            <div className="head">Phone Number</div>
                            <div className="value">{restaurant.phone_number}</div><br/>
                            <div className="head">{restaurant.name}</div>
                            <div className="value">{restaurant.address}</div>
                        </div>
                 </div>
            </div>
        </div>
    </div>
        )
    }
}
export default Details;