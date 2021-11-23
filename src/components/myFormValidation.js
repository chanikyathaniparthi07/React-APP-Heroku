import React,{Component} from "react";
class FormValidation extends Component{
    constructor(props){
        super(props);
        //this block is used to hold or access the user input 
        this.state={
            username:"",
            emailaddress:"",
            password:"",
        //this is for to update or hold the errors    

       formErrors:{
            username:"",
            emailaddress:"",
            password:"",
       },
       //here we just intially give false to properties
       usernameValid:false,
       emailaddressValid:false,
       passwordValid:false,
       formValid:false

    }
}
    handleUserInput=(event)=>{
        //here when user enters data here stores and it will send to setState later it will check with validateFeild for right or wrong
        
        const name=event.target.name;
        const value=event.target.value;
        this.setState({[name]:value},
            ()=>{this.validateField(name,value)})
    }

    validateField(fieldName,fieldValue) {
        let fieldvalidationErrors=this.state.formErrors;
        let usernameValid=this.state.usernameValid;
        let emailaddressValid=this.state.emailaddressValid;
        let passwordValid=this.state.passwordValid;
        switch(fieldName){
            case "username":
                usernameValid=fieldValue.match(/^[a-zA-Z0-9]+$/);
                fieldvalidationErrors.username=usernameValid?" ":"is invalid";
                break;

                case "emailaddress":
                emailaddressValid=fieldValue.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
                fieldvalidationErrors.emailaddress=usernameValid?" ":"is invalid";
                break;

                case "password":
                passwordValid=fieldValue.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/);
                fieldvalidationErrors.password=userNameValid?" ":"is invalid";
                break;

                default:
                    break;


        }
        this.setState({
            formErrors:fieldvalidationErrors,
            userNameValid:usernameValid,
            emailaddressValid:emailaddressValid,
            passwordValid:passwordValid
            
        },this.validateForm)
    }
    validateForm() {
        this.setState({
            formValid: this.state.usernameValid && this.state.emailaddressValid && this.state.passwordValid
        })
    }
    

   render(){
       return(
           <div>
        <h1 className="text-center">FormValidation</h1> 
        <br/>
        <form>
            <fieldset className="form-group">
                <div className="row">
                    <label for="username" className="col-sm-5 text-right">Username</label>
                    <div className="col-sm-3">
                        <input type="text"  name="userName"value={this.state.username} className="form-control" required
                         onChange={this.handleUserInput}/>
                        </div>
                </div>

            </fieldset>
            <br/>
            <fieldset className="form-group">
                <div className="row">
                    <label for="Email Address" className="col-sm-5 text-right">Email Address</label>
                    <div className="col-sm-3 ">
                        <input type="text"  name="emailaddress"value={this.state.emailaddress} className="form-control" required 
                        onChange={this.handleUserInput}/>
                        </div>
                </div>

            </fieldset>
            <br/>
            <fieldset className="form-group">
                <div className="row">
                    <label for="Password" className="col-sm-5 text-right">Password</label>
                    <div className="col-sm-3 ">
                        <input type="text" name="password" value={this.state.password} className="form-control" required 
                        onChange={this.handleUserInput}/>
                        </div>
                </div>

            </fieldset>

        
        <br/>
        <fieldset className="form-group">
                <div className="row">
                    <label for="" className="col-sm-5 text-right"></label>
                    <div className="col-sm-3 ">
                    <button type="submit"  className="btn btn-primary">Submit</button>
                        </div>
                </div>
                
            </fieldset>
            </form>
            
        
        </div>
    
        
         
       )
   }
}
export default FormValidation;