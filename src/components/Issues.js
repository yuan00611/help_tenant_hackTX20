import React, {useState} from 'react';
import data from '../data.json';
import './Issues.css';

export const Issues = () => {
    const [search, setsearch] = useState("");
    const [searchResults, setsearchResults] = useState([]);
  
    const handleChange = e => {
      setsearch(e.target.value);
    };
    
    React.useEffect(() => {
      const results = data.issues.filter(issue =>
        issue.content.toLowerCase().includes(search));
        setsearchResults(results);
    }, [search]);

    return (
        <>
            <div className="section">
                <form>
                    <input type="text" placeholder="search keywords..." className="search-input" value={search} onChange={handleChange} />
                </form>
            </div>
            <div className="section">
                <div className="open-issues">
                {searchResults.map((data) => {
                    return (
                        <div className="inner-section">
                            <div className="issue-container">
                                <p>
                                    <span>{data.date} {data.content}</span>
                                    <span><span>+1</span></span>
                                </p>
                            </div>
                            <p className="echo">
                                    {data.echoNumber} tenants have the same issue.
                                </p>
                        </div>
                    )
                })}
                </div>
            </div>  
        </>
    )
}
