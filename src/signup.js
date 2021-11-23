import React, { Component } from "react";

import { MyContext } from "../App";

import { withRouter } from "react-router-dom";



class SignUp extends Component {

  firstNameRef;

  lastNameRef;

  emailAddress;

  gender;
  
  phoneNumber;



  constructor() {

    super();

    this.firstName = "";

    this.lastName = "";

    this.emailAddress =""; 

    this.gender = "";

    this.phoneNumber ="";


    this.state = {

      buttonFlag: true,

      firstNameErrFlag: true,

      lastNameErrFlag: true,

    };

  }



  signUp(context) {

    console.log(this.props);

    let users = context.store.users.filter(

      (user) =>

        user.firstName === this.firstNameRef.value &&

        user.lastName === this.lastNameRef.value

    );

    if (users && users.length === 1) {

      this.props.history.push("/");

    } else console.log("login unsuccessfull");

  }



  textValueChanged() {

    this.setState({

      buttonFlag:

        this.firstNameRef.value.length < 1 || this.lastNameRef.value.length < 1

          ? true

          : false,

      firstNameErrFlag: this.firstNameRef.value.length < 1 ? true : false,

      lastNameErrFlag: this.lastNameRef.value.length < 1 ? true : false,

    });

  }



  render() {

    return (

      <MyContext.Consumer>

        {(context) => (

          <div className="container">

            <h1 className="text-primary mt-3">Sign Up</h1>

            <hr />

            <form>

              <div className="mb-3">

                <label className="form-label">firstName</label>

                <input

                  type="text"

                  className="form-control"

                  id="firstName"

                  placeholder="enter your firstName here..."

                  ref={(input) => {

                    this.firstNameRef = input;

                  }}

                  onInput={() => this.textValueChanged()}

                />

                {this.state.firstNameErrFlag ? (

                  <p className="text-danger mt-2">firstName can't be empty</p>

                ) : (

                  ""

                )}

              </div>



              <div className="mb-3">

                <label className="form-label">lastName</label>

                <input

                  type="lastName"

                  className="form-control"

                  id="password"

                  placeholder="enter your lastName here..."

                  ref={(input) => {

                    this.lastNameRef = input;

                  }}

                  onInput={() => this.textValueChanged()}

                />

                {this.state.lastNameErrFlag ? (

                  <p className="text-danger mt-2">lastName can't be empty</p>

                ) : (

                  ""

                )}

              </div>

              <div className="mb-3">

                <label className="form-label">emailAddress</label>

                <input

                  type="text"

                  className="form-control"

                  id="emailAddress"

                  placeholder="enter your emailAddress here..."

                  ref={(input) => {

                    this.emailAddressRef = input;

                  }}

                  onInput={() => this.textValueChanged()}

                />

               </div>
               <div className="mb-3">

                <label className="form-label">gender</label>

                <input

                  type="text"

                  className="form-control"

                  id="gender"

                  placeholder="enter your gender here..."

                  ref={(input) => {

                    this.genderRef = input;

                  }}

                  onInput={() => this.textValueChanged()}

                />

               </div>
               <div className="mb-3">

                <label className="form-label">phoneNumber</label>

                <input

                  type="text"

                  className="form-control"

                  id="phoneNumber"

                  placeholder="enter your phoneNumber here..."

                  ref={(input) => {

                    this.genderRef = input;

                  }}

                  onInput={() => this.textValueChanged()}

                />

               </div>


              <button

                type="button"

                className="btn btn-primary"

                onClick={() => this.signUp(context)}

                disabled={this.state.buttonFlag}

              >

                Submit

              </button>

            </form>

          </div>

        )}

      </MyContext.Consumer>

    );

  }

}



export default withRouter(SignUp);