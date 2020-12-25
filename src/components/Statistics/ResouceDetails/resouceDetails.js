import React from 'react'
import * as axios from "axios";
import {swAPI} from "../../../api/api";
import Preloader from "../../Preloader/Preloader";


class ResouceDetails extends React.Component {
    state={
        details: {},
        loading: false


    }

    componentDidMount() {
        console.log('componentDidMount из statisticsDetails')
        swAPI.getResourceDetails(this.props.state.actualResourceUrl)
            .then(resp=>{
            this.setState({
                details: this.props.state.actualResourceName=='films'?resp.data.results.map(i=>i.title):resp.data.results.map(i=>i.name),
                loading: true
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps!=this.props)
        {
            this.setState({
                loading: false
            })
            console.log('componentDidUpdate из statisticsDetails')
            swAPI.getResourceDetails(this.props.state.actualResourceUrl).then(resp=>{
                this.setState({
                    details: this.props.state.actualResourceName=='films'?resp.data.results.map(i=>i.title):resp.data.results.map(i=>i.name),
                    loading: true
                })
            })
        }
    }


    render() {
        let newArr;
        if (Object.keys(this.state.details).length !== 0) {
            newArr=this.state.details.map(i=>{
                return <li className="list-group-item">{i}</li>
            })
        }

        console.log('Прорисовка statisticsDetails')

        return (<>
                {this.state.loading?<ul className="list-group-flush">
                    <li className="list-group-item active title" aria-current="true">{this.props.state.actualResourceName}</li>
                    {newArr}
                </ul>:<Preloader/>}

            </>
        )
    }
}

export default ResouceDetails