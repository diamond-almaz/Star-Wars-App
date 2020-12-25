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
            <div>
                <h3>{name}</h3>
                <div>Climate: {climate}</div>
                <div>Created: {created}</div>
                <div>Diameter: {diameter}</div>
                <div>Edited: {edited}</div>
                {/*<div>Films: {films}</div>*/}
                <div>Gravity: {gravity}</div>
                <div>Orbital period: {orbital_period}</div>
                <div>population: {population}</div>
                {/*<div>Residents: {residents}</div>*/}
                <div>Rotation_period: {rotation_period}</div>
                <div>Surface_water: {surface_water}</div>
                <div>Terrain: {terrain}</div>
                <div>population: {population}</div>
            </div>
        )
    }
}

export default PlanetsDetails;