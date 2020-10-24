import React, {useState} from 'react';
import data from '../data.json';
import './File.css';

const Files = () => {
    const [search, setsearch] = useState("");
    const [searchResults, setsearchResults] = useState([]);
  
    const handleChange = e => {
      setsearch(e.target.value);
    };
    
    React.useEffect(() => {
      const results = data.files.filter(issue =>
        issue.name.toLowerCase().includes(search));
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
            {searchResults.map((data) => {
                return (
                    <div className="file-container">
                        <div className="file-row">
                            <div className="file">
                                <p><a href={data.url}>{data.name}</a></p>
                                <p>{data.date}</p>
                                <p>{data.size}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default Files
