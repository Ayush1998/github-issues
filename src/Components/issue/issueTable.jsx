import React, { useCallback, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import IssueTableHeader from './issueTableHeader'
import {getIssues} from '../../redux/actions'
import { getCurrentDateDifference } from '../../constants'
import { Spinner } from 'react-bootstrap'

const IssueTable = (props) => {

    const [page, setPage] = useState(1)
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      }, []);

    useEffect(() => {
        fetchIssues()
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
          };
          const observer = new IntersectionObserver(handleObserver, option);
          if (loader.current) observer.observe(loader.current);
    }, [])

    useEffect(() => {
        fetchIssues()
    }, [page])

    const fetchIssues = async() => {
       try{
           await props.getIssues(page)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="issue_table">
            <IssueTableHeader />
            <div className="whole_table">
                {(props.issues.data || []).map((issue, i)=> (
                    <div className="single_issue" key={i}>
                        <div className="issue_title">
                            <i className="fa fa-exclamation-circle" aria-hidden="true" style={{color : 'rgb(40, 167, 69)'}}></i>
                            <a href={issue.html_url} target="_blank">{issue?.title}</a>
                            <span style={{fontSize : '16px'}}>
                                {(issue.labels || []).map((label) => (
                                    <span key={label.id} className="issue_label" style={{backgroundColor : `#${label.color}`}}>{label.name}</span>
                                ))}
                            </span>
                        </div>
                        <div className="last_opened_issue">
                            <span>{`#${issue.number} opened ${getCurrentDateDifference(issue.created_at)} ago by`} <a href={issue.user?.html_url}>{issue.user?.login || "user"}</a></span>
                        </div>
                    </div>
                ))}
            </div>
            {props.issues.isFetching &&  <Spinner animation="border" variant="primary" />}
            {props.issues.error && <p>Error!</p>}
            <div ref={loader} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    issues : state.issues
})

const mapDispatchToProps = {
    getIssues
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTable)
