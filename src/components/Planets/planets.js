import React from 'react'
import {connect} from "react-redux";
import {getListPlanets} from "../../redux/planet-reducer";
import PlanetsDetails from "./PlanetsDetails/planetsDetails";
import './planets.css'
import Preloader from "../Preloader/Preloader";

class Planets extends React.Component {
    state = {
        selectedPlanet: null,
        loading: false
    }

    componentDidMount() {
        this.props.getListPlanets();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props!=prevProps) {
            this.setState({
                loading: !this.state.loading
            })
        }
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
                    {
                        this.state.loading ? <ul className={'"list-group"'}>
                            <div className={'list-group-item list-group-item-action active title'}>Planets</div>

                            {listPlanets}</ul> : <Preloader/>
                    }

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