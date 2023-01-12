/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class QuicksearchItem extends React.Component{
    render(){
        /* diy 86 first question */
        const {name, content, image} = this.props.quicksearchitemData;
        return(
            <div className="col-sm-12 col-md-10 col-lg-4">
                     <div className="qs-box">
                        <div className="qs-box-contents">
                            <img src={`./${image}`} className="qs-image" />
                            <h4 className="qs-item-heading">{name}</h4>
                            <p className="qs-item-description">{content}</p>
                        </div>
                    </div>
               
                    
                    {/* <div className="qs-box">
                        <div className="qs-box-contents">
                            <img src="./Assets/lunch.jpg" className="qs-image" />
                            <h4 className="qs-item-heading">lunch</h4>
                            <p className="qs-item-description">Enjoy your meals with our exclusive lunch</p>
                        </div>
                    </div>
                    <div className="qs-box">
                        <div className="qs-box-contents">
                            <img src="./Assets/dinner.jpg" className="qs-image" />
                            <h4 className="qs-item-heading">dinner</h4>
                            <p className="qs-item-description">Enjoy your day end by our special dinner</p>
                        </div>
                    </div>
                    
                    <div className="qs-box">
                        <div className="qs-box-contents">
                            <img src="./Assets/juice.jpg" className="qs-image" />
                            <h4 className="qs-item-heading">Juices</h4>
                            <p className="qs-item-description">For refreshing you drink our fresh juice</p>
                        </div>
                    </div>
                    <div className="qs-box">
                        <div className="qs-box-contents">
                            <img src="./Assets/soups.jpg" className="qs-image" />
                            <h4 className="qs-item-heading">soups</h4>
                            <p className="qs-item-description">For warm and healthy drink drink our  healthy soup</p>
                        </div>
                    </div>
                    <div className="qs-box">
                        <div className="qs-box-contents">
                            <img src="./Assets/snacks.jpg" className="qs-image" />
                            <h4 className="qs-item-heading">Snacks</h4>
                            <p className="qs-item-description">Enjoy your everlasting evening with our Snacks.</p>
                        </div>
                    </div>
               */}
            </div>
        )
    }
}
export default QuicksearchItem;