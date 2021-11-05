import React from 'react'

const headerValues = ['Auther', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

const IssueTableHeader = (props) => {
    return (
        <div className="issue_table_header">
            <div className="issue_table_header_left" style={{paddingLeft : '18px', display: 'flex'}}>
                <div>
                <a href="https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue">253 open</a>
                </div>
                <div style={{display :'flex', marginLeft : '10px'}}>
                <img src="/images/tick.svg" style={{width : '1.5rem'}} alt="icon"/>
                <a href="https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue" style={{float : 'right'}}>6378 closed</a>
                </div>
            </div>
            <div className="issue_table_header_right" style={{display : 'flex'}}>
                {headerValues.map((val, i)=> (
                <span key={i} className="issue_table_value">
                    {val}
                    <img src="/images/down.svg" alt="icon"/>
                </span>))}
            </div>
        </div>
    )
}

export default IssueTableHeader
