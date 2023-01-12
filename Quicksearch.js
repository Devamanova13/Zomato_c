/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import QuicksearchItem from "./QuicksearchItem";

class Quicksearch extends React.Component{
    render(){
         /* diy 86 first question */
        const {quicksearchData} = this.props;
        return(
            <div>
                 <div className="bottomsection">
                <h1 className="qs-heading" >Quick Searches</h1>
                <h3 className="qs-subheading">Discover restaurants by type of meal</h3>

                <div className="container-fluid">

                    <div className="row" id="gridbox">
                    {/* diy 86 first question */}
                    {
                        quicksearchData.map((item) =>{
                            return <QuicksearchItem  quicksearchitemData={item}/>
                        })
                    }
                    </div>
                </div>
             
            </div>
            </div>
        )
    }
}
export default Quicksearch;