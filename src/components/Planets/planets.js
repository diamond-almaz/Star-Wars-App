import React from 'react'
import {connect} from "react-redux";
import {getListPlanets} from "../../redux/planet-reducer";
import PlanetsDetails from "./PlanetsDetails/planetsDetails";
import './planets.css'

class Planets extends React.Component {
    state = {
        selectedPlanet: null,
    }

    componentDidMount() {
        this.props.getListPlanets();
    }


    render() {
        let listPlanets = this.props.planets.map(i => {
            return <><div onClick={() => {
                this.setState({
                    selectedPlanet: i
                })
            }} key={i.name}>
                <span className={'itemPlanet'}>{i.name}</span>
            </div></>
        });


        return (<>
                <div className="planets">
                    <h3>Planets</h3>
                    <div>{listPlanets}</div>
                </div>
                <div>
                    {this.state.selectedPlanet && <PlanetsDetails planetInfo={this.state.selectedPlanet}/>}
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    planets: state.planetsPage.listPlanets
})

export default connect(mapStateToProps, {getListPlanets})(Planets);