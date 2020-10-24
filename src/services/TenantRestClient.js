import React, {Component} from 'react';
import getConnectionDetails from '../services/auth.js'


class TenantRestClient extends Component {
  
  constructor(props) {
    super(props);
    var mysql = require('mysql');
    getConnectionDetails();
    this.connection = mysql.createConnection();
  }


  getIssues() {
    console.log("issuex!")
  }
}

export default TenantRestClient;
