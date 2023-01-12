/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../styles/Header.css';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'antiquewhite',
      border: 'solid 1px brown'
    },
  };

class Header extends React.Component{
    constructor(){
        super();
        this.state ={
            backgroundColor:'',
            display:'none',
            loginModalIsOpen: false,
            isLoggedIn:false,
            loggedInUser: undefined
        }
    }

    responseGoogle =(response) =>{
        this.setState({ isLoggedIn:true, loggedInUser:response.profileObj.name});
    
    }

    componentDidMount(){
        const path= this.props.history.location.pathname;
        this.setAttributes(path);
    }

    setAttributes =(path) =>{
         let bg, display;
        if(path === '/'){
            bg = 'black';
            display='none';
        }
        else{
            bg = '#ff0000';
            display ='inline-block';
        }
        this.setState({backgroundColor:bg , display:display});
    }

    handleLogout = () =>{
        this.setState({isLoggedIn:false, loggedInUser:undefined});
    }

    handleLogin =() =>{
        this.setState({loginModalIsOpen: true});
    }

    handleCancel =() =>{
        this.setState({loginModalIsOpen: false});
    }

    render(){
        const{backgroundColor, display, loginModalIsOpen, loggedInUser, isLoggedIn} = this.state;
        return(
            <div>
                <div class="header" style={{backgroundColor:backgroundColor}}>
                    <div class="logo" style={{display: display}}>
                        <p class="logo-c" style={{display: display}}>e!</p>
                    </div>

                    { !isLoggedIn ? 
                    <div class="btn">
                        <button class="login" onClick={this.handleLogin}>Login</button>
                        <button class="signup">Create an account</button>
                    </div>:
                     <div class="btn">
                     <button class="login">{loggedInUser}</button>
                     <button class="signup" onClick={this.handleLogout}>Logout</button>
                 </div>
                     }
                </div>
                <Modal
                    isOpen={loginModalIsOpen}
                    style={customStyles}
                 >
               <h2> Login</h2>
               <input type="text" placeholder="Email"/>
               <br/><br/>
               <input type="text" placeholder="password"/>
               <div>  <br/>
                <button>Login</button>
                <button onClick={this.handleCancel}>Cancel</button>
               </div>
                <br/>
               <div>
               <GoogleLogin
                     clientId="1010044192558-6qjhgk6oknil0bp94g303oumg71oo3tk.apps.googleusercontent.com"
                     buttonText="Continue with google"
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}
                     cookiePolicy={'single_host_origin'}
                />
               </div>
                </Modal>
            </div>
        ) } 
     }
export default Header;