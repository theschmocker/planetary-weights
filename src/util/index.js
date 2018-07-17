const NEWTONS_IN_A_POUND = 4.448;
const KILOGRAMS_IN_A_POUND_ON_EARTH = 0.454;

function roundToTenths(number) {
    return Math.round(10 * number) / 10;
}

// calculates mass in kg from weight in pounds
function calculateMass(weightInPounds) {
    return weightInPounds * KILOGRAMS_IN_A_POUND_ON_EARTH;
}

function calculateWeightInNewtons(weightInPounds) {
    return weightInPounds * NEWTONS_IN_A_POUND;
}

const CELESTIAL_OBJECTS = [
    {
        name: 'Sun',
        accelerationDueToGravity: 274.13,
    },
    {
        name: 'Mercury',
        accelerationDueToGravity: 3.59,
    },
    {
        name: 'Venus',
        accelerationDueToGravity: 8.87,
    },
    {
        name: 'Earth',
        accelerationDueToGravity: 9.8,
    },
    {
        name: 'Moon',
        accelerationDueToGravity: 1.62,
    },
    {
        name: 'Mars',
        accelerationDueToGravity: 3.77,
    },
    {
        name: 'Jupiter',
        accelerationDueToGravity: 25.95,
    },
    {
        name: 'Saturn',
        accelerationDueToGravity: 11.08,
    },
    {
        name: 'Uranus',
        accelerationDueToGravity: 10.67,
    },
    {
        name: 'Neptune',
        accelerationDueToGravity: 14.07,
    },
    {
        name: 'Pluto',
        accelerationDueToGravity: 0.42,
    },
]

export { 
    roundToTenths,
    calculateMass,
    calculateWeightInNewtons,
    CELESTIAL_OBJECTS
};

