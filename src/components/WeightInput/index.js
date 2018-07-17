import { h } from 'preact';

import { roundToTenths } from '../../util';

const WeightInput = ({
    handleInput,
    mass,
    weight,
    newtons
}) => (
    <div class="input">
        <label for="weight-input">Weight: </label>
        <input 
            class="input__weight"
            name="weight-input" 
            value={weight} 
            onInput={handleInput} 
        />
        <div class="input__display">
            <p class="input__mass-display">Mass: {roundToTenths(mass) || 0}kg</p>
            <p class="input__newton-display">Newtons: {roundToTenths(newtons) || 0}N</p>
        </div>
    </div>
)

export default WeightInput;
