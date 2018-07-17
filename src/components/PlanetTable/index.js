import { h, Component } from 'preact';
import { Router } from 'preact-router';

import {
    roundToTenths,
    CELESTIAL_OBJECTS
} from '../../util';


const NEWTONS_IN_A_POUND = 4.448;

const Planet = ({ planet, inputMass }) => {
    const weightInNewtons = planet.accelerationDueToGravity * inputMass;
    let weightInPounds = weightInNewtons / NEWTONS_IN_A_POUND;

    weightInPounds = 
        planet.name === "Earth" 
            ? Math.round(weightInPounds)
            : roundToTenths(weightInPounds); 

    return (
        
        <div class="planet">
            <div class="planet__label">
                <img 
                    class="planet__icon"
                    src={`/assets/${planet.name.toLowerCase()}.svg`} 
                    alt={`${planet.name}`} 
                />
                <h3 class="planet__name">{planet.name.toUpperCase()}</h3> 
            </div>
            <p class="planet__your-weight">{weightInPounds}lbs</p>
        </div>
    )
}

const AllPlanets = ({ inputMass }) => (
    <div class="planets">
        {CELESTIAL_OBJECTS.map(obj => <Planet key={obj.name} planet={obj} inputMass={inputMass} />)}
    </div>
)

export default AllPlanets;
