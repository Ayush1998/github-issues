import React from 'react'

const Filters = () => {
    return (
        <div className="filters">
            <div style={{display : 'flex'}} className="filters_left">
                <div style={{display : 'flex'}} >
                    <div className="filter_options">Filter
                        <img src="/images/down.svg" alt="icon"/>
                    </div>
                    <div className="filter_input">
                        <input type="text" defaultValue="is:issue is:open " />
                    </div>
                </div>
                <div className="other_filter_options">
                    <a href="https://github.com/facebook/react/labels">Labels</a>
                    <a href="https://github.com/facebook/react/milestones">Milestones</a>
                </div>
            </div>
            <a href="https://github.com/facebook/react/issues/new" className="new_issue">New issue</a>
        </div>
    )
}

export default Filters
