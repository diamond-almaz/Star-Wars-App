import React from 'react'
import {connect} from "react-redux";
import {getRootResource} from "../../redux/statistic-reducer";
import './statistics.css'
import ResouceDetails from "./ResouceDetails/resouceDetails";
import Preloader from "../Preloader/Preloader";



class Statistics extends React.Component {
    state={
        actualResourceUrl: null,
        actualResourceName: null
    }
    componentDidMount() {
        getRootResource()
    }

    render() {
        let arr=[]
        for (let i in this.props.rootResource) {
            arr.push(
                <><div className={'itemPlanet'} onClick={
                    ()=>{
                        this.setState({
                            actualResourceUrl: this.props.rootResource[i],
                            actualResourceName: i
                        })
                    }
                }>{i}</div></>
            )
        }
        return (
            <>
                <div className="statistics">
                    <h3>Root resources</h3>
                    <div>{arr}</div>
                    <div><ResouceDetails state={this.state}/></div>
                </div>
                </>
        )
    }
}

let mapStateToProps=(state)=>({
    rootResource: state.statisticsPage.rootResource
})

export default connect(mapStateToProps,getRootResource)(Statistics);