import React, {Component} from 'react';

import './Issues.css';

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var month = a.getMonth();
    var date = a.getDate();
    var time = month.toString() + '/' + date;
    return time;
}

export class SolvedIssues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            active: false
        }
    }

    determineItemStyle(i) {
        const isItemSelected = this.state.selectedItem === i;
        return isItemSelected ? "count-active" : "";
        
    }

    increment()  {
        document.getElementById("count").innerHTML = parseInt(document.getElementById("count").innerHTML) + 1;
    };

    componentDidMount() {
        fetch('http://localhost:8000/issues/solved')
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
                <div>
                    {
                    results.map((result, i) => (
                        <div className="inner-section" key={i}>
                        <div className="issue-container">
                            <p>
                                <span>{timeConverter(result.timestamp)}</span><span> {result.message}</span>
                                {/* <span><span className={this.state.active && 'count-active'} onClick={ () => this.setState({active: !this.state.active}) }>+1</span></span> */}
                                <span onClick={() => this.setState({ selectedItem: i })} className={this.determineItemStyle(i)}><span onClick={this.increment}>+1</span></span>
                            </p>
                        </div>
                        <p className="echo">
                                <span id="count">{result.count}</span> tenants have the same issue.
                            </p>
                        </div>
                    ))}
                </div>
            )
    }}
}
