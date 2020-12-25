import React from 'react'
import * as axios from "axios";
import {swAPI} from "../../../api/api";


class ResouceDetails extends React.Component {
    state={
        details: {}


    }

    componentDidMount() {
        console.log('componentDidMount из statisticsDetails')
        swAPI.getResourceDetails(this.props.state.actualResourceUrl)
            .then(resp=>{
            this.setState({
                details: this.props.state.actualResourceName=='films'?resp.data.results.map(i=>i.title):resp.data.results.map(i=>i.name)
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps!=this.props)
        {
            console.log('componentDidUpdate из statisticsDetails')
            swAPI.getResourceDetails(this.props.state.actualResourceUrl).then(resp=>{
                this.setState({
                    details: this.props.state.actualResourceName=='films'?resp.data.results.map(i=>i.title):resp.data.results.map(i=>i.name)
                })
            })
        }
    }


    render() {
        let newArr;
        if (Object.keys(this.state.details).length !== 0) {
            newArr=this.state.details.map(i=>{
                return <div>{i}</div>
            })
        }

        console.log('Прорисовка statisticsDetails')

        return (<>
            <h3>{this.props.state.actualResourceName}</h3>
                <div>{newArr}</div>
            </>
        )
    }
}

export default ResouceDetails