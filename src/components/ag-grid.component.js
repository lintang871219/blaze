import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios';



export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {columnDefs: [{
        headerName: "First Name", field: "firstname", sortable: true, filter: true
      }, {
        headerName: "Last Name", field: "lastname", sortable: true, filter: true
      }, {
        headerName: "Email", field: "email", sortable: true, filter: true
      },{
        headerName: "Phone", field: "phone", sortable: true, filter: true
      }],rowData: [],
      order: 0};

  }



  componentDidMount() {
    axios.get('http://localhost:5001/users/')
      .then(response => {
        this.setState({ rowData: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }



  render() {
    return (
      <div>
        <h3>Users List with AG-grid</h3>
        <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '800px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          pagination={true}>
        </AgGridReact>
      </div>
      </div>
    )
  }
}
