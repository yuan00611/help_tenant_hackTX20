import React, {Component} from 'react';

import './File.css';

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var time = month.toString() + '/' + date + '/' + year;
    return time;
}

export class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/files/all')
        .then(response => response.json())
        .then(
            data => {this.setState({results: data})},
            error => {this.setState({error: error})})
    }

    render() {
        const { error, results } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else {
            console.log(results);
            return(
                <div className="section">
                <h3>All files</h3>
                <div className="file-table">
                    <div className="file-container">
                        <div className="file-row">
                            <div className="file">
                                <p><a href="">Name</a></p>
                                <p>Data Created</p>
                                <p>Size</p>
                            </div>
                        </div>
                    </div>
                    {
                    results.map((result, i) => (
                        <div className="file-container">
                        <div className="file-row">
                            <div className="file">
                                <p><a href={result.url}>{result.name}</a></p>
                                <p>{timeConverter(result.timestamp)}</p>
                                <p>1.5MB</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                </div>
            )
    }}
}
