import React from 'react'
import {connect} from "react-redux";
import {getRootResource} from "../../redux/statistic-reducer";
import './statistics.css'
import ResouceDetails from "./ResouceDetails/resouceDetails";
import Preloader from "../Preloader/Preloader";



class Statistics extends React.Component {
    state={
        actualResourceUrl: null,
        actualResourceName: null,
        loading: false
    }
    componentDidMount() {
        getRootResource()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props!=prevProps) {
            this.setState({
                loading: !this.state.loading
            })
        }
    }

    render() {
        let arr=[]
        for (let i in this.props.rootResource) {
            arr.push(
                <><div className={'list-group-item list-group-item-action itemPlanet'} onClick={
                    ()=>{
                        this.setState({
                            actualResourceUrl: this.props.rootResource[i],
                            actualResourceName: i
                        })
                    }
                }>{i}</div></>
            )
        }
        console.log('Прорисовка statistics')
        return (
            <>
                <div className="statistics">
                    {this.state.loading?
                        <ul className={'"list-group"'}>
                            <div className={'list-group-item list-group-item-action active title'} >Root resources</div>
                            {arr}
                        </ul>
                        :<Preloader/>}

                    <div className={'root-details'}>{this.state.actualResourceUrl!=null && <ResouceDetails state={this.state}/>}</div>
                </div>
                </>
        )
    }
}

let mapStateToProps=(state)=>({
    rootResource: state.statisticsPage.rootResource
})

export default connect(mapStateToProps,getRootResource)(Statistics);