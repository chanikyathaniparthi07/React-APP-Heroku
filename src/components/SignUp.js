import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SignUp extends Component {
    render() {
        return <>
        <div className="container ">
            <h1 className="text-primary mt-3">Sign Up</h1>
            <hr />
            
                <form>
                  
                <div ClassName="mb-3">
                        <label ClassName="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            placeholder="enter your user name here..."
                        />
                    </div>
                    <div ClassName="mb-3">
                        <label ClassName="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            placeholder="enter your last name here..."
                        />
                    </div>
                    <div ClassName="mb-3">
                        <label ClassName="form-label">Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            placeholder="Male/Female"

                        />
                    </div>
                    <div ClassName="mb-3">
                        <label ClassName="form-label">Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            placeholder="enter your user mail here..."

                        />
                    </div>
                    <div ClassName="mb-3">
                        <label for="exampleInputEmail1" ClassName="form-label">Mobile number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            placeholder="enter your user mobile number here..."
                        />
                    </div>
                    <div ClassName="mb-3">
                        <label for="exampleInputPassword1" ClassName="form-label"> Create Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            placeholder="enter your new password here..."
                        />
                    </div>
                    <div ClassName="mb-3">
                        <label for="exampleInputPassword1" ClassName="form-label"> Enter Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userId"
                            placeholder="Re-enter your new password here..."
                        />
                    </div>
                    <div classname= "text-center"></div>
              <p classname="text-dark" >
               Aleady have an account ? <a href="/">SignIn</a> </p> 
                    
              <div/>
                    <div> <button
                        type="button"
                        className="btn btn-primary mt-2"
                    >
                        Submit
                    </button></div>
                   
                </form>
            </div>
        </>;

    }
}

export default SignUp;