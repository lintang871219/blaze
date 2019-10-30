import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.firstname}</td>
    <td>{props.user.lastname}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>
      <Link to={"/edit/"+props.user._id}>edit</Link>
    </td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {users: [], order: 0};
    this.onSort = this.onSort.bind(this);
  }



  componentDidMount() {
    axios.get('http://localhost:5001/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onSort(sortKey){
  console.log("sort");
    const data = this.state.users;
    if(this.state.order ===0){
      data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]));
      this.setState({order:1});
    }else{
      data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]));
      this.setState({order:0});
    }

    this.setState({users:data})
  }




  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th onClick={e => this.onSort('firstname')} title="click to sort" style={{cursor:"pointer"}}>First Name</th>
              <th onClick={e => this.onSort('lastname')} title="click to sort" style={{cursor:"pointer"}}>Last Name </th>
              <th onClick={e => this.onSort('email')} title="click to sort" style={{cursor:"pointer"}}>email </th>
              <th onClick={e => this.onSort('phone')} title="click to sort" style={{cursor:"pointer"}}>Phone</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>



      </div>
    )
  }
}
