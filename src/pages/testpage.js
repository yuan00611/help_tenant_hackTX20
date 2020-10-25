import React from 'react'
import TenantRestClient from '../services/TenantRestClient.js'

function testpage() {

	let rest = new TenantRestClient();

	rest.getIssues();

    return (
        <div className="container">
            test
        </div>

        
    )
}

export default testpage;
