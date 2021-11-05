import React, { useState } from 'react'
import { navLinks } from '../constants'
import Filters from './filters'
import  IssueTable  from './issue/issueTable'
import Navbar from './navbar'

const Main = (props) => {
    const [selected] = useState("Issues")
    return (
        <div className="main">
            <div className="main_head">
                <Navbar user="facebook" repo="create-react-app"/>
                <div className="nav_links">
                    {navLinks.map((link, i) => (
                        <div className={`single_link ${link.title === selected ? 'active' : ''}`} key={i}>
                            {link.icon && <img src={link.icon} alt="icon" style={{marginRight : '5px'}}/>}
                            <a href={link.url} style={{textDecoration : 'none'}}>{link.title}{" "}</a>
                            <span>{link.value || ""}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Filters />
            <IssueTable />
        </div>
    )
}

export default Main
