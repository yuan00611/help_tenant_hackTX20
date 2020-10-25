import React, {Component} from 'react';
import getConnectionDetails from '../services/auth.js'

class TenantRestClient extends Component {
  
  constructor(props) {
    super(props);

  }


  getIssues() {
    fetch('http://localhost:18000/accounts/1/')
      .then(response => response.json())
      .then(data => console.log(data));
  }
}

export default TenantRestClient;
