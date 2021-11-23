import React  from "react";
//arow functions
let User=(props)=>{
    return(
        <div className="col-sm-12">
                    <div className="card mb-4">
                        <div className="card-header">
                            <h3>User Name:{props.userName}</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
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
                                <tr>
                                    <td colSpan="5">
                                        <div className="contentCenter">

                                <input type="text" className="form-control" onChange={props.nameChange}/>
                                </div>
                                </td>
                                </tr>
                                </table>
                             
                        </div>
                        <div className="card-footer">
                            <div className="">
                            <button type="button" className="btn btn-info  mr-3" onClick={props.userNameChange} >changename</button>
                            <button type="button" className="btn btn-danger " onClick={props.deleteUserRecord}>Delete</button>
                            </div>
                        </div>
                    </div>
                

                </div>

    )
}
   
export default User;