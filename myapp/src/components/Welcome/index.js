import { Component } from "react";

import './index.css'


class Welcome extends Component{
    state={
        isLogin:false
    }

    render(){
        const {isLogin}=this.state
        let authBtn
        if(isLogin){
            authBtn=<button onClick={()=>this.setState({isLogin: false})}>Logout</button>
        }else{
            authBtn=<button onClick={()=>this.setState({isLogin: true})}>Login</button>
        }

    return(
        <div className="welcome">
            <div className="box1">
            {isLogin? <h1>Welcome User</h1>:<h1>Welcome User, Please Login</h1>}
            {authBtn}
            </div>
        </div>
    )}
}
export default Welcome;