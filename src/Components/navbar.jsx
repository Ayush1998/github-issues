import React from 'react'
import RepoCounts from './navCounts/repoCounts'
import { connect } from 'react-redux'
import { addToWatch, removeFromWatch, addToFork, addToStar, removeFromFork, removeFromStar } from '../redux/actions'


const Navbar = (props) => {

    const handleWatchCount = (tag) => {
        tag === "Watch"? props.addToWatch() : props.removeFromWatch()
    }
    const handleForkCount = (tag) => {
        tag === "Fork"? props.addToFork() : props.removeFromFork()
    }
    const handleStarCount = (tag) => {
        tag === "Star"? props.addToStar() : props.removeFromStar()
    }
    return (
        <div className="nav">
            <div className="nav_left">
                <img src="/images/repo.svg" alt="icon" style={{marginRight : '5px'}}/>
                <a href="#">{props.user}</a>{" "}/{" "}
                <a className="repo_name" href="#">{props.repo}</a>
            </div>
            <div className="nav_right" style={{display : 'flex'}}>
                <RepoCounts image={"/images/eye.svg"} tag={props.repoDetails.isWatch? "Unwatch" : "Watch"} counts={props.repoDetails.watchCount} handleCount={handleWatchCount} />
                <RepoCounts image={props.repoDetails.isStar? "/images/fillStar.svg" : "/images/emptyStar.svg"} tag={props.repoDetails.isStar? "Unstar" : "Star"}  counts={props.repoDetails.starCount} handleCount={handleStarCount}/>
                <RepoCounts  image={"/images/fork.svg"} tag={props.repoDetails.isForked? "Unfork" : "Fork"}  counts={props.repoDetails.forkCount} handleCount={handleForkCount}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    repoDetails : state.repoDetails
})

export default connect(mapStateToProps, {addToWatch,
    removeFromWatch,
    addToFork, 
    addToStar, 
    removeFromFork, 
    removeFromStar })(Navbar)
