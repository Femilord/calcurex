// ========================================
// PHYSICS CALCULATORS DATA & LOGIC
// ========================================

const physicsCalculators = {
    kinematics: {
        title: 'Kinematics',
        calculators: {
            velocity: {
                name: 'Velocity (v = d/t)',
                formula: 'v = d / t',
                inputs: [
                    { id: 'distance', label: 'Distance', symbol: 'd', unit: 'm' },
                    { id: 'time', label: 'Time', symbol: 't', unit: 's' }
                ],
                calculate: (inputs) => inputs.distance / inputs.time,
                resultUnit: 'm/s',
                explanation: 'Velocity is the rate of change of position. It equals distance divided by time. Positive values indicate motion in the positive direction.'
            },
            acceleration: {
                name: 'Acceleration (a = Δv/t)',
                formula: 'a = (vf - vi) / t',
                inputs: [
                    { id: 'finalVelocity', label: 'Final Velocity', symbol: 'vf', unit: 'm/s' },
                    { id: 'initialVelocity', label: 'Initial Velocity', symbol: 'vi', unit: 'm/s' },
                    { id: 'time', label: 'Time', symbol: 't', unit: 's' }
                ],
                calculate: (inputs) => (inputs.finalVelocity - inputs.initialVelocity) / inputs.time,
                resultUnit: 'm/s²',
                explanation: 'Acceleration is the rate of change of velocity. It measures how quickly an object speeds up or slows down over time.'
            },
            displacement: {
                name: 'Displacement (s = ut + ½at²)',
                formula: 's = u×t + ½×a×t²',
                inputs: [
                    { id: 'initialVelocity', label: 'Initial Velocity', symbol: 'u', unit: 'm/s' },
                    { id: 'acceleration', label: 'Acceleration', symbol: 'a', unit: 'm/s²' },
                    { id: 'time', label: 'Time', symbol: 't', unit: 's' }
                ],
                calculate: (inputs) => inputs.initialVelocity * inputs.time + 0.5 * inputs.acceleration * Math.pow(inputs.time, 2),
                resultUnit: 'm',
                explanation: 'This equation calculates displacement when initial velocity, acceleration, and time are known. It\'s derived from the basic kinematic equations.'
            },
            finalVelocity: {
                name: 'Final Velocity (v² = u² + 2as)',
                formula: 'v = √(u² + 2as)',
                inputs: [
                    { id: 'initialVelocity', label: 'Initial Velocity', symbol: 'u', unit: 'm/s' },
                    { id: 'acceleration', label: 'Acceleration', symbol: 'a', unit: 'm/s²' },
                    { id: 'displacement', label: 'Displacement', symbol: 's', unit: 'm' }
                ],
                calculate: (inputs) => Math.sqrt(Math.pow(inputs.initialVelocity, 2) + 2 * inputs.acceleration * inputs.displacement),
                resultUnit: 'm/s',
                explanation: 'This equation relates final velocity to initial velocity, acceleration, and displacement without requiring time.'
            }
        }
    },
    dynamics: {
        title: 'Dynamics (Forces)',
        calculators: {
            force: {
                name: 'Force (F = ma)',
                formula: 'F = m × a',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'kg' },
                    { id: 'acceleration', label: 'Acceleration', symbol: 'a', unit: 'm/s²' }
                ],
                calculate: (inputs) => inputs.mass * inputs.acceleration,
                resultUnit: 'N',
                explanation: 'Newton\'s Second Law: Force equals mass times acceleration. This fundamental equation describes how forces affect motion.'
            },
            weight: {
                name: 'Weight (W = mg)',
                formula: 'W = m × g',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'kg' }
                ],
                calculate: (inputs) => inputs.mass * 9.81,
                resultUnit: 'N',
                explanation: 'Weight is the force of gravity on an object. On Earth, g = 9.81 m/s². Weight varies with location, while mass stays constant.'
            },
            friction: {
                name: 'Friction Force (f = μN)',
                formula: 'f = μ × N',
                inputs: [
                    { id: 'coefficient', label: 'Coefficient of Friction', symbol: 'μ', unit: '' },
                    { id: 'normalForce', label: 'Normal Force', symbol: 'N', unit: 'N' }
                ],
                calculate: (inputs) => inputs.coefficient * inputs.normalForce,
                resultUnit: 'N',
                explanation: 'Friction force opposes motion and is proportional to the normal force. The coefficient μ depends on the surfaces in contact.'
            },
            pressure: {
                name: 'Pressure (P = F/A)',
                formula: 'P = F / A',
                inputs: [
                    { id: 'force', label: 'Force', symbol: 'F', unit: 'N' },
                    { id: 'area', label: 'Area', symbol: 'A', unit: 'm²' }
                ],
                calculate: (inputs) => inputs.force / inputs.area,
                resultUnit: 'Pa',
                explanation: 'Pressure is force per unit area. Smaller areas result in higher pressure for the same force.'
            }
        }
    },
    energy: {
        title: 'Energy & Work',
        calculators: {
            kineticEnergy: {
                name: 'Kinetic Energy (KE = ½mv²)',
                formula: 'KE = ½ × m × v²',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'kg' },
                    { id: 'velocity', label: 'Velocity', symbol: 'v', unit: 'm/s' }
                ],
                calculate: (inputs) => 0.5 * inputs.mass * Math.pow(inputs.velocity, 2),
                resultUnit: 'J',
                explanation: 'Kinetic energy is the energy of motion. It increases with the square of velocity, so doubling speed quadruples kinetic energy.'
            },
            potentialEnergy: {
                name: 'Gravitational PE (PE = mgh)',
                formula: 'PE = m × g × h',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'kg' },
                    { id: 'height', label: 'Height', symbol: 'h', unit: 'm' }
                ],
                calculate: (inputs) => inputs.mass * 9.81 * inputs.height,
                resultUnit: 'J',
                explanation: 'Gravitational potential energy is the energy stored due to an object\'s height. It converts to kinetic energy when the object falls.'
            },
            work: {
                name: 'Work (W = Fd cosθ)',
                formula: 'W = F × d × cos(θ)',
                inputs: [
                    { id: 'force', label: 'Force', symbol: 'F', unit: 'N' },
                    { id: 'distance', label: 'Distance', symbol: 'd', unit: 'm' },
                    { id: 'angle', label: 'Angle', symbol: 'θ', unit: '°' }
                ],
                calculate: (inputs) => inputs.force * inputs.distance * Math.cos(inputs.angle * Math.PI / 180),
                resultUnit: 'J',
                explanation: 'Work is done when a force moves an object. The angle determines how much of the force contributes to motion in the direction of displacement.'
            },
            power: {
                name: 'Power (P = W/t)',
                formula: 'P = W / t',
                inputs: [
                    { id: 'work', label: 'Work', symbol: 'W', unit: 'J' },
                    { id: 'time', label: 'Time', symbol: 't', unit: 's' }
                ],
                calculate: (inputs) => inputs.work / inputs.time,
                resultUnit: 'W',
                explanation: 'Power is the rate at which work is done or energy is transferred. One watt equals one joule per second.'
            }
        }
    },
    momentum: {
        title: 'Momentum & Collisions',
        calculators: {
            momentum: {
                name: 'Momentum (p = mv)',
                formula: 'p = m × v',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'kg' },
                    { id: 'velocity', label: 'Velocity', symbol: 'v', unit: 'm/s' }
                ],
                calculate: (inputs) => inputs.mass * inputs.velocity,
                resultUnit: 'kg⋅m/s',
                explanation: 'Momentum is mass in motion. It\'s conserved in collisions and determines how hard it is to stop a moving object.'
            },
            impulse: {
                name: 'Impulse (J = FΔt)',
                formula: 'J = F × Δt',
                inputs: [
                    { id: 'force', label: 'Force', symbol: 'F', unit: 'N' },
                    { id: 'time', label: 'Time Interval', symbol: 'Δt', unit: 's' }
                ],
                calculate: (inputs) => inputs.force * inputs.time,
                resultUnit: 'N⋅s',
                explanation: 'Impulse equals the change in momentum. A force applied over time changes an object\'s momentum by the impulse amount.'
            }
        }
    },
    gravity: {
        title: 'Gravity & Orbits',
        calculators: {
            gravitationalForce: {
                name: 'Gravitational Force (F = Gm₁m₂/r²)',
                formula: 'F = G × m₁ × m₂ / r²',
                inputs: [
                    { id: 'mass1', label: 'Mass 1', symbol: 'm₁', unit: 'kg' },
                    { id: 'mass2', label: 'Mass 2', symbol: 'm₂', unit: 'kg' },
                    { id: 'distance', label: 'Distance', symbol: 'r', unit: 'm' }
                ],
                calculate: (inputs) => (6.674e-11 * inputs.mass1 * inputs.mass2) / Math.pow(inputs.distance, 2),
                resultUnit: 'N',
                explanation: 'Newton\'s Law of Universal Gravitation. Every mass attracts every other mass with a force proportional to their masses and inversely proportional to the square of the distance.'
            },
            orbitalVelocity: {
                name: 'Orbital Velocity (v = √(GM/r))',
                formula: 'v = √(G × M / r)',
                inputs: [
                    { id: 'centralMass', label: 'Central Mass', symbol: 'M', unit: 'kg' },
                    { id: 'radius', label: 'Orbital Radius', symbol: 'r', unit: 'm' }
                ],
                calculate: (inputs) => Math.sqrt((6.674e-11 * inputs.centralMass) / inputs.radius),
                resultUnit: 'm/s',
                explanation: 'The velocity needed to maintain a circular orbit around a massive body. At this speed, gravity provides exactly the centripetal force needed.'
            }
        }
    },
    waves: {
        title: 'Waves & Sound',
        calculators: {
            waveSpeed: {
                name: 'Wave Speed (v = fλ)',
                formula: 'v = f × λ',
                inputs: [
                    { id: 'frequency', label: 'Frequency', symbol: 'f', unit: 'Hz' },
                    { id: 'wavelength', label: 'Wavelength', symbol: 'λ', unit: 'm' }
                ],
                calculate: (inputs) => inputs.frequency * inputs.wavelength,
                resultUnit: 'm/s',
                explanation: 'Wave speed equals frequency times wavelength. This applies to all waves including sound, light, and water waves.'
            },
            frequency: {
                name: 'Frequency (f = 1/T)',
                formula: 'f = 1 / T',
                inputs: [
                    { id: 'period', label: 'Period', symbol: 'T', unit: 's' }
                ],
                calculate: (inputs) => 1 / inputs.period,
                resultUnit: 'Hz',
                explanation: 'Frequency is the number of oscillations per second. It\'s the inverse of the period (time for one complete oscillation).'
            }
        }
    },
    thermodynamics: {
        title: 'Thermodynamics',
        calculators: {
            heatTransfer: {
                name: 'Heat Transfer (Q = mcΔT)',
                formula: 'Q = m × c × ΔT',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'kg' },
                    { id: 'specificHeat', label: 'Specific Heat', symbol: 'c', unit: 'J/(kg⋅K)' },
                    { id: 'tempChange', label: 'Temperature Change', symbol: 'ΔT', unit: 'K' }
                ],
                calculate: (inputs) => inputs.mass * inputs.specificHeat * inputs.tempChange,
                resultUnit: 'J',
                explanation: 'The amount of heat energy needed to change the temperature of a substance. Specific heat determines how much energy is needed per degree.'
            },
            idealGas: {
                name: 'Ideal Gas Law (PV = nRT)',
                formula: 'P = (n × R × T) / V',
                inputs: [
                    { id: 'moles', label: 'Amount (moles)', symbol: 'n', unit: 'mol' },
                    { id: 'temperature', label: 'Temperature', symbol: 'T', unit: 'K' },
                    { id: 'volume', label: 'Volume', symbol: 'V', unit: 'm³' }
                ],
                calculate: (inputs) => (inputs.moles * 8.314 * inputs.temperature) / inputs.volume,
                resultUnit: 'Pa',
                explanation: 'The Ideal Gas Law relates pressure, volume, and temperature for an ideal gas. R = 8.314 J/(mol⋅K) is the universal gas constant.'
            }
        }
    },
    electricity: {
        title: 'Electricity',
        calculators: {
            ohmsLaw: {
                name: 'Ohm\'s Law (V = IR)',
                formula: 'V = I × R',
                inputs: [
                    { id: 'current', label: 'Current', symbol: 'I', unit: 'A' },
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' }
                ],
                calculate: (inputs) => inputs.current * inputs.resistance,
                resultUnit: 'V',
                explanation: 'Ohm\'s Law: Voltage equals current times resistance. This fundamental relationship governs current flow in electrical circuits.'
            },
            electricPower: {
                name: 'Electric Power (P = VI)',
                formula: 'P = V × I',
                inputs: [
                    { id: 'voltage', label: 'Voltage', symbol: 'V', unit: 'V' },
                    { id: 'current', label: 'Current', symbol: 'I', unit: 'A' }
                ],
                calculate: (inputs) => inputs.voltage * inputs.current,
                resultUnit: 'W',
                explanation: 'Electrical power is the rate of energy transfer in a circuit. It equals voltage times current.'
            },
            electricField: {
                name: 'Electric Field (E = F/q)',
                formula: 'E = F / q',
                inputs: [
                    { id: 'force', label: 'Force', symbol: 'F', unit: 'N' },
                    { id: 'charge', label: 'Charge', symbol: 'q', unit: 'C' }
                ],
                calculate: (inputs) => inputs.force / inputs.charge,
                resultUnit: 'N/C',
                explanation: 'Electric field strength is the force per unit charge. It describes how strongly an electric field affects charges.'
            }
        }
    },
    magnetism: {
        title: 'Magnetism',
        calculators: {
            magneticForce: {
                name: 'Magnetic Force (F = qvB)',
                formula: 'F = q × v × B × sin(θ)',
                inputs: [
                    { id: 'charge', label: 'Charge', symbol: 'q', unit: 'C' },
                    { id: 'velocity', label: 'Velocity', symbol: 'v', unit: 'm/s' },
                    { id: 'magneticField', label: 'Magnetic Field', symbol: 'B', unit: 'T' },
                    { id: 'angle', label: 'Angle', symbol: 'θ', unit: '°' }
                ],
                calculate: (inputs) => inputs.charge * inputs.velocity * inputs.magneticField * Math.sin(inputs.angle * Math.PI / 180),
                resultUnit: 'N',
                explanation: 'The Lorentz force on a moving charge in a magnetic field. Maximum when motion is perpendicular to the field (90°).'
            }
        }
    },
    optics: {
        title: 'Optics',
        calculators: {
            lensEquation: {
                name: 'Thin Lens Equation (1/f = 1/u + 1/v)',
                formula: '1/f = 1/u + 1/v → v = (u×f)/(u-f)',
                inputs: [
                    { id: 'objectDistance', label: 'Object Distance', symbol: 'u', unit: 'm' },
                    { id: 'focalLength', label: 'Focal Length', symbol: 'f', unit: 'm' }
                ],
                calculate: (inputs) => (inputs.objectDistance * inputs.focalLength) / (inputs.objectDistance - inputs.focalLength),
                resultUnit: 'm',
                explanation: 'Calculates image distance from object distance and focal length. Positive image distance means real image; negative means virtual.'
            },
            magnification: {
                name: 'Magnification (M = v/u)',
                formula: 'M = v / u',
                inputs: [
                    { id: 'imageDistance', label: 'Image Distance', symbol: 'v', unit: 'm' },
                    { id: 'objectDistance', label: 'Object Distance', symbol: 'u', unit: 'm' }
                ],
                calculate: (inputs) => inputs.imageDistance / inputs.objectDistance,
                resultUnit: '',
                explanation: 'Magnification is the ratio of image size to object size. Values > 1 mean enlarged; < 1 mean reduced; negative means inverted.'
            },
            snellsLaw: {
                name: 'Snell\'s Law (n₁sinθ₁ = n₂sinθ₂)',
                formula: 'θ₂ = arcsin((n₁/n₂) × sin(θ₁))',
                inputs: [
                    { id: 'n1', label: 'Refractive Index 1', symbol: 'n₁', unit: '' },
                    { id: 'angle1', label: 'Incident Angle', symbol: 'θ₁', unit: '°' },
                    { id: 'n2', label: 'Refractive Index 2', symbol: 'n₂', unit: '' }
                ],
                calculate: (inputs) => Math.asin((inputs.n1 / inputs.n2) * Math.sin(inputs.angle1 * Math.PI / 180)) * 180 / Math.PI,
                resultUnit: '°',
                explanation: 'Describes how light bends when passing between media with different refractive indices. Used in lens and prism calculations.'
            }
        }
    }
};

// ========================================
// PHYSICS CALCULATOR CLASS
// ========================================
class PhysicsCalculator {
    constructor() {
        this.currentCategory = 'kinematics';
        this.currentCalculator = null;

        this.initializeElements();
        this.attachEventListeners();
        this.loadCategory('kinematics');
    }

    initializeElements() {
        this.categoryBtns = document.querySelectorAll('.category-btn');
        this.calculatorSelect = document.getElementById('calculatorSelect');
        this.calculatorTitle = document.getElementById('calculatorTitle');
        this.formulaEquation = document.getElementById('formulaEquation');
        this.inputFields = document.getElementById('inputFields');
        this.calculateBtn = document.getElementById('calculateBtn');
        this.resultValue = document.getElementById('resultValue');
        this.resultUnit = document.getElementById('resultUnit');
        this.explanationText = document.getElementById('explanationText');
    }

    attachEventListeners() {
        // Category buttons
        this.categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.loadCategory(category);
            });
        });

        // Calculator select
        this.calculatorSelect.addEventListener('change', () => {
            this.loadCalculator();
        });

        // Calculate button
        this.calculateBtn.addEventListener('click', () => {
            this.calculate();
        });
    }

    loadCategory(category) {
        this.currentCategory = category;
        const data = physicsCalculators[category];

        // Update active button
        this.categoryBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // Populate calculator dropdown
        this.calculatorSelect.innerHTML = '<option value="">-- Select Calculator --</option>';
        Object.keys(data.calculators).forEach(key => {
            const calc = data.calculators[key];
            const option = document.createElement('option');
            option.value = key;
            option.textContent = calc.name;
            this.calculatorSelect.appendChild(option);
        });

        // Load first calculator
        const firstKey = Object.keys(data.calculators)[0];
        this.calculatorSelect.value = firstKey;
        this.loadCalculator();
    }

    loadCalculator() {
        const calcKey = this.calculatorSelect.value;
        if (!calcKey) return;

        const data = physicsCalculators[this.currentCategory];
        this.currentCalculator = data.calculators[calcKey];

        // Update title
        this.calculatorTitle.textContent = this.currentCalculator.name;

        // Update formula
        this.formulaEquation.textContent = this.currentCalculator.formula;

        // Create input fields
        this.createInputFields();

        // Update explanation
        this.explanationText.textContent = this.currentCalculator.explanation;

        // Reset result
        this.resultValue.textContent = '-';
        this.resultUnit.textContent = '';
    }

    createInputFields() {
        this.inputFields.innerHTML = '';

        this.currentCalculator.inputs.forEach(input => {
            const group = document.createElement('div');
            group.className = 'input-group';

            group.innerHTML = `
                <label class="input-label">
                    <span class="input-symbol">${input.symbol}</span>
                    ${input.label}
                </label>
                <div class="input-wrapper">
                    <input type="number" 
                           class="physics-input" 
                           id="${input.id}" 
                           placeholder="Enter ${input.label.toLowerCase()}"
                           step="any">
                    <div class="input-unit">${input.unit}</div>
                </div>
            `;

            this.inputFields.appendChild(group);
        });
    }

    calculate() {
        if (!this.currentCalculator) return;

        const inputs = {};
        let allValid = true;

        // Gather inputs
        this.currentCalculator.inputs.forEach(input => {
            const value = parseFloat(document.getElementById(input.id).value);
            if (isNaN(value)) {
                allValid = false;
            }
            inputs[input.id] = value;
        });

        if (!allValid) {
            this.resultValue.textContent = 'Invalid Input';
            this.resultUnit.textContent = '';
            return;
        }

        try {
            // Calculate result
            const result = this.currentCalculator.calculate(inputs);

            // Format and display result
            this.resultValue.textContent = this.formatResult(result);
            this.resultUnit.textContent = this.currentCalculator.resultUnit;
        } catch (error) {
            this.resultValue.textContent = 'Error';
            this.resultUnit.textContent = '';
        }
    }

    formatResult(value) {
        if (Math.abs(value) < 0.001 || Math.abs(value) > 1000000) {
            return value.toExponential(4);
        }
        return parseFloat(value.toFixed(6)).toString();
    }
}

// ========================================
// INITIALIZE PHYSICS CALCULATOR
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    window.physicsCalculator = new PhysicsCalculator();
});