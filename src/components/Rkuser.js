import React,{Component} from "react";
//arow functions
let User=(props)=>{
    return(
        <div className="col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>User Name:{props.userName}</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <tr>
                                    <th>User Id</th>
                                    <th>Email Address</th>
                                    <th>Age</th>
                                    <th>Mobile</th>
                                    <th>Description</th>
                                </tr>
                                <tr>
                                    <td>{props.userId}</td>
                                    <td>{props.userEmail}</td>
                                    <td>{props.userAge}</td>
                                    <td>{props.userMobile}</td>
                                    <td>{props.userDescription}</td>
                                </tr>
                                </table>
                             
                        </div>
                    </div>
                

                </div>

    )
}
   
export default User;