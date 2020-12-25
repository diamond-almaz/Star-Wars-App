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
            return <button onClick={() => {
                    this.setState({
                        selectedPlanet: i
                    })
                }} key={i.name}
                           type={'button'}
                           className={'list-group-item list-group-item-action'}>{i.name}</button>

        });

        console.log('Прорисовка planet')
        return (<>
                <div className="planets">
                <div className='list-planet'>
                    <ul className={'"list-group"'}>
                        <div className={'list-group-item list-group-item-action active'}>Planets</div>

                        {listPlanets}</ul>
                </div>
                <div className='planets-details'>
                    {this.state.selectedPlanet && <PlanetsDetails planetInfo={this.state.selectedPlanet}/>}
                </div>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    planets: state.planetsPage.listPlanets
})

export default connect(mapStateToProps, {getListPlanets})(Planets);