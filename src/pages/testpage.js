import React from 'react'
// import { GetRequestAsyncAwait } from '../components/TestApi.js';
import TenantRestClient from '../services/TenantRestClient.js'

function testpage() {
	let rest = new TenantRestClient();

	rest.getIssues();

    return (
        <div className="container">
            {/* <GetRequestAsyncAwait /> */}
        </div>

        
    )
}

export default testpage;
