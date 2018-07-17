import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { 
    roundToTenths,
    calculateMass,
    calculateWeightInNewtons
} from '../util';

import AllPlanets from './PlanetTable';
import Header from './header';
import WeightInput from './WeightInput';
import Footer from './Footer';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: 10,
        }

        this.recalculate();
    }

    recalculate() {
        const { weight } = this.state;
        this.setState({
            mass: calculateMass(weight),
            newtons: calculateWeightInNewtons(weight),
        });
    }

    handleInput = e => {
        if (!/\D/.test(e.target.value)) {
            this.setState({ weight: e.target.value });
        } 

        e.target.value = this.state.weight;
        this.recalculate();
    }

	render({}, { weight, mass, newtons }) {
		return (
			<div id="app">
                <Header>
                    <WeightInput 
                        handleInput={this.handleInput} 
                        weight={weight} 
                        mass={mass}
                        newtons={newtons}
                    />
                </Header>
                <AllPlanets inputMass={mass} />
                <Footer />
            </div>
		);
	}
}
