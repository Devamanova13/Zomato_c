/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../styles/filter.css';

class Filter extends React.Component{
    render(){
        return(
<div>
        <div className="container">
            <div className="row heading">
                Breakfast places in Mumbai
            </div>
            <div className="row">
                <div className="col-3 col-sm-12 col-md-4 col-lg-3">
                    <div className="filterPanel">
                        <div className="filterPanelHeading">
                            Filters
                        </div>
                        <div className="filterPanelSubHeading">
                            Select Location
                        </div>
                        <select className="locationSelection">
                            <option disabled selected>Select location</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Kolkota</option>
                            <option>Chennai</option>
                        </select>
                        <div className="filterPanelSubHeading">
                            Cuisine
                        </div>
                        <input type="checkbox" className="cuisineOption" />
                            <label>North Indian</label>
                        <br/>
                        <input type="checkbox" className="cuisineOption"/>
                            <label>South Indian</label>
                        <br/>

                        <input type="checkbox" className="cuisineOption"/>
                            <label>Chinese</label>
                        <br/>

                        <input type="checkbox" className="cuisineOption"/>
                            <label>Fast food</label>
                         <br/>

                         <input type="checkbox" className="cuisineOption"/>
                             <label>Street food</label>
                         <br/>

                         <div className="filterPanelSubHeading">
                                 Cost for two
                         </div>
                        <input type="checkbox" className="cuisineOption"/>
                            <label>less than  &#8377;500</label>
                        <br/>
                        <input type="checkbox" className="cuisineOption"/>
                             <label>&#8377;500 to &#8377;1,000</label>
                        <br/>

                        <input type="checkbox" className="cuisineOption"/>
                          <label>&#8377;1000 to &#8377;1,500</label>
                        <br/>

                        <input type="checkbox" className="cuisineOption"/>
                             <label>&#8377;1,500 to &#8377;2,000</label>
                        <br/>

                        <input type="checkbox" className="cuisineOption"/>
                            <label>More than &#8377;2,000</label>
                        <br/>

                        <div className="filterPanelSubHeading">
                         Sort
                         <br/>
                         <input type="checkbox" className="cuisineOption"/>
                             <label>price low to high</label>
                          <br/>
                          <input type="checkbox" className="cuisineOption"/>
                              <label>price high to low</label>
                           <br/>
                    </div>
                
                </div>
            </div>
                

            <div className="col-9 col-sm-12 col-md-8 col-lg-9">
                    <div className="resultsPanel">
                        <div className="row upperSection">
                            <div className="col-2">
                                <img src="./Assets/cake1.jpg" className="resultsImage"/>
                            </div>
                            <div className="col-10">
                                <div className="resultsHeading">The Big Chill Cake</div>
                                <div className="resultsSubHeading">FORT</div>
                                <div className="resultsAddress">Shop 1, Plot D, Samruddhi complex, shinsholi.</div>
                            </div>
                        </div>
                        <hr />
                        <div className="row lowerSection">
                            <div className="col-2">
                                <div className="resultsAddress">CUISINES:</div>
                                <div className="resultsAddress">COST FOR TWO:</div>
                            </div>
                            <div className="col-10">
                                <div className="resultsSubHeading">Bakery:</div>
                                <div className="resultsSubHeading">&#8377;700</div>
                            </div>
                        </div>
                    </div>
                    <div className="resultsPanel">
                        <div className="row upperSection">
                            <div className="col-2">
                                <img src="./Assets/cake2.jpg" className="resultsImage"/>

                            </div>
                            <div className="col-10">
                                <div className="resultsHeading">The Big Chill Cake</div>
                                <div className="resultsSubHeading">FORT</div>
                                <div className="resultsAddress">Shop 1, Plot D, Samruddhi complex, shinsholi.</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row lowerSection">
                            <div className="col-2">
                                <div className="resultsAddress">CUISINES:</div>
                                <div className="resultsAddress">COST FOR TWO:</div>
                            </div>
                            <div className="col-10">
                                <div className="resultsSubHeading">Bakery:</div>
                                <div className="resultsSubHeading">&#8377;700</div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <div className="paginationButton"></div>
                        <div className="paginationButton">1</div>
                        <div className="paginationButton">2</div>
                        <div className="paginationButton">3</div>
                        <div className="paginationButton">4</div>
                        <div className="paginationButton">5</div>
                        <div className="paginationButton"></div>
                    </div>
                </div>
            </div>
        </div>
</div>
        )
    }
}
export default Filter;

