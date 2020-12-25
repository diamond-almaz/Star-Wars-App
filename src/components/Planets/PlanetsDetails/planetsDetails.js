import React from 'react'
import * as axios from 'axios'

class PlanetsDetails extends React.Component {

    render() {
        let {
            climate, created, diameter,
            edited, films, gravity, name,
            orbital_period, population,residents,
            rotation_period, surface_water, terrain,
        } = this.props.planetInfo
        console.log('Прорисовка planetDetails')

        return (

                <ul className="list-group-flush">
                    <li className="list-group-item active title" aria-current="true">{name}</li>
                    <li className="list-group-item">Climate: {climate}</li>
                    <li className="list-group-item">Created: {created}</li>
                    <li className="list-group-item">Diameter: {diameter}</li>
                    <li className="list-group-item">Edited: {edited}</li>
                    <li className="list-group-item">Gravity: {gravity}</li>
                    <li className="list-group-item">Orbital period: {orbital_period}</li>
                    <li className="list-group-item">population: {population}</li>
                    <li className="list-group-item">Rotation_period: {rotation_period}</li>
                    <li className="list-group-item">Surface_water: {surface_water}</li>
                    <li className="list-group-item">Terrain: {terrain}</li>
                </ul>
        )
    }
}

export default PlanetsDetails;