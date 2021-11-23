import React from "react";
import { MyContext } from "../App";
class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {}
  mapUsersList(context) {
    console.log(context);
    return context.store.db.users.map((user, index) => (
      <li className="list-group-item" key={user.id}>
        {user.name}
      </li>
    ));
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container">
            <p className="display-4 text-primary my-4">Users</p>
            <hr />
            <div className="list-group">{this.mapUsersList(context)}</div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Users;