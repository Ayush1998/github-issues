import React, { useEffect } from 'react'

export const RepoCounts = (props) => {
    
    return (
        <div className="nav_counts" onClick={()=>props.handleCount(props.tag)}>
            <div className="title">
                <img src={props.image} alt="icon" style={{marginRight : '5px'}}/>
                {props.tag}
            </div> 
            <span className="counts">{props.counts>1000 ?`${parseFloat(props.counts/1000).toFixed(1)}k` : props.counts}</span>
        </div>
    )
}


export default RepoCounts
