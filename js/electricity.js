// ========================================
// ELECTRICITY/ELECTRONICS CALCULATORS
// ========================================

const electricityCalculators = {
    basic: {
        title: 'Basic Electrical Laws',
        calculators: {
            ohmsLaw: {
                name: 'Ohm\'s Law - Voltage (V = I×R)',
                formula: 'V = I × R',
                inputs: [
                    { id: 'current', label: 'Current', symbol: 'I', unit: 'A' },
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' }
                ],
                calculate: (inputs) => inputs.current * inputs.resistance,
                resultUnit: 'V',
                explanation: 'Ohm\'s Law is fundamental: Voltage equals Current times Resistance. It describes the relationship between voltage, current, and resistance in electrical circuits.'
            },
            currentFromOhm: {
                name: 'Ohm\'s Law - Current (I = V/R)',
                formula: 'I = V / R',
                inputs: [
                    { id: 'voltage', label: 'Voltage', symbol: 'V', unit: 'V' },
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' }
                ],
                calculate: (inputs) => inputs.voltage / inputs.resistance,
                resultUnit: 'A',
                explanation: 'Current flows when voltage is applied across a resistance. Higher voltage or lower resistance results in more current flow.'
            },
            resistanceFromOhm: {
                name: 'Ohm\'s Law - Resistance (R = V/I)',
                formula: 'R = V / I',
                inputs: [
                    { id: 'voltage', label: 'Voltage', symbol: 'V', unit: 'V' },
                    { id: 'current', label: 'Current', symbol: 'I', unit: 'A' }
                ],
                calculate: (inputs) => inputs.voltage / inputs.current,
                resultUnit: 'Ω',
                explanation: 'Resistance opposes current flow. It can be calculated by dividing voltage by current, useful for determining unknown component values.'
            },
            conductance: {
                name: 'Conductance (G = 1/R)',
                formula: 'G = 1 / R',
                inputs: [
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' }
                ],
                calculate: (inputs) => 1 / inputs.resistance,
                resultUnit: 'S (Siemens)',
                explanation: 'Conductance is the inverse of resistance. It measures how easily electricity flows through a material. Higher conductance means easier current flow.'
            }
        }
    },
    power: {
        title: 'Power & Energy',
        calculators: {
            powerVI: {
                name: 'Electrical Power (P = V×I)',
                formula: 'P = V × I',
                inputs: [
                    { id: 'voltage', label: 'Voltage', symbol: 'V', unit: 'V' },
                    { id: 'current', label: 'Current', symbol: 'I', unit: 'A' }
                ],
                calculate: (inputs) => inputs.voltage * inputs.current,
                resultUnit: 'W',
                explanation: 'Power is the rate of energy transfer. It equals voltage times current. This is how much energy is used or produced per second.'
            },
            powerI2R: {
                name: 'Power from Current (P = I²×R)',
                formula: 'P = I² × R',
                inputs: [
                    { id: 'current', label: 'Current', symbol: 'I', unit: 'A' },
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' }
                ],
                calculate: (inputs) => Math.pow(inputs.current, 2) * inputs.resistance,
                resultUnit: 'W',
                explanation: 'Power dissipated in a resistor equals current squared times resistance. Used to calculate heat generation in resistive loads.'
            },
            powerV2R: {
                name: 'Power from Voltage (P = V²/R)',
                formula: 'P = V² / R',
                inputs: [
                    { id: 'voltage', label: 'Voltage', symbol: 'V', unit: 'V' },
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' }
                ],
                calculate: (inputs) => Math.pow(inputs.voltage, 2) / inputs.resistance,
                resultUnit: 'W',
                explanation: 'Alternative power formula using voltage and resistance. Useful when current is unknown but voltage and resistance are known.'
            },
            energy: {
                name: 'Electrical Energy (E = P×t)',
                formula: 'E = P × t',
                inputs: [
                    { id: 'power', label: 'Power', symbol: 'P', unit: 'W' },
                    { id: 'time', label: 'Time', symbol: 't', unit: 'h' }
                ],
                calculate: (inputs) => inputs.power * inputs.time / 1000,
                resultUnit: 'kWh',
                explanation: 'Energy consumed equals power times time. 1 kWh = 1000 watts used for 1 hour. This is what utilities bill you for.'
            },
            electricityCost: {
                name: 'Electricity Cost',
                formula: 'Cost = (P × t × Rate) / 1000',
                inputs: [
                    { id: 'power', label: 'Power', symbol: 'P', unit: 'W' },
                    { id: 'hours', label: 'Hours per Day', symbol: 't', unit: 'h' },
                    { id: 'days', label: 'Days', symbol: 'd', unit: 'days' },
                    { id: 'rate', label: 'Rate per kWh', symbol: 'Rate', unit: '$/kWh' }
                ],
                calculate: (inputs) => (inputs.power * inputs.hours * inputs.days * inputs.rate) / 1000,
                resultUnit: '$',
                explanation: 'Calculates the cost of running an appliance. Multiply power by time and rate to find total electricity cost.'
            }
        }
    },
    resistors: {
        title: 'Resistor Calculations',
        calculators: {
            seriesResistors: {
                name: 'Series Resistors (R_total = R₁ + R₂)',
                formula: 'R_total = R₁ + R₂ + R₃',
                inputs: [
                    { id: 'r1', label: 'Resistor 1', symbol: 'R₁', unit: 'Ω' },
                    { id: 'r2', label: 'Resistor 2', symbol: 'R₂', unit: 'Ω' },
                    { id: 'r3', label: 'Resistor 3', symbol: 'R₃', unit: 'Ω' }
                ],
                calculate: (inputs) => inputs.r1 + inputs.r2 + inputs.r3,
                resultUnit: 'Ω',
                explanation: 'In series, total resistance equals the sum of all resistors. Current is the same through all resistors.'
            },
            parallelResistors: {
                name: 'Parallel Resistors (1/R = 1/R₁ + 1/R₂)',
                formula: '1/R_total = 1/R₁ + 1/R₂',
                inputs: [
                    { id: 'r1', label: 'Resistor 1', symbol: 'R₁', unit: 'Ω' },
                    { id: 'r2', label: 'Resistor 2', symbol: 'R₂', unit: 'Ω' }
                ],
                calculate: (inputs) => 1 / (1 / inputs.r1 + 1 / inputs.r2),
                resultUnit: 'Ω',
                explanation: 'In parallel, total resistance is less than the smallest resistor. Voltage is the same across all resistors.'
            },
            voltageDivider: {
                name: 'Voltage Divider (V_out = V_in × R₂/(R₁+R₂))',
                formula: 'V_out = V_in × (R₂ / (R₁ + R₂))',
                inputs: [
                    { id: 'vin', label: 'Input Voltage', symbol: 'V_in', unit: 'V' },
                    { id: 'r1', label: 'Resistor 1', symbol: 'R₁', unit: 'Ω' },
                    { id: 'r2', label: 'Resistor 2', symbol: 'R₂', unit: 'Ω' }
                ],
                calculate: (inputs) => inputs.vin * (inputs.r2 / (inputs.r1 + inputs.r2)),
                resultUnit: 'V',
                explanation: 'Voltage divider produces a lower voltage from a higher one using two resistors in series. Output is taken across R₂.'
            },
            currentDivider: {
                name: 'Current Divider (I₁ = I_total × R₂/(R₁+R₂))',
                formula: 'I₁ = I_total × (R₂ / (R₁ + R₂))',
                inputs: [
                    { id: 'itotal', label: 'Total Current', symbol: 'I_total', unit: 'A' },
                    { id: 'r1', label: 'Resistor 1', symbol: 'R₁', unit: 'Ω' },
                    { id: 'r2', label: 'Resistor 2', symbol: 'R₂', unit: 'Ω' }
                ],
                calculate: (inputs) => inputs.itotal * (inputs.r2 / (inputs.r1 + inputs.r2)),
                resultUnit: 'A',
                explanation: 'Current divider splits current between parallel resistors. More current flows through the lower resistance path.'
            }
        }
    },
    capacitors: {
        title: 'Capacitor Calculations',
        calculators: {
            capacitance: {
                name: 'Capacitance (Q = C×V)',
                formula: 'Q = C × V',
                inputs: [
                    { id: 'capacitance', label: 'Capacitance', symbol: 'C', unit: 'F' },
                    { id: 'voltage', label: 'Voltage', symbol: 'V', unit: 'V' }
                ],
                calculate: (inputs) => inputs.capacitance * inputs.voltage,
                resultUnit: 'C (Coulombs)',
                explanation: 'Charge stored in a capacitor equals capacitance times voltage. Capacitors store electrical energy in an electric field.'
            },
            capacitorEnergy: {
                name: 'Capacitor Energy (E = ½CV²)',
                formula: 'E = ½ × C × V²',
                inputs: [
                    { id: 'capacitance', label: 'Capacitance', symbol: 'C', unit: 'F' },
                    { id: 'voltage', label: 'Voltage', symbol: 'V', unit: 'V' }
                ],
                calculate: (inputs) => 0.5 * inputs.capacitance * Math.pow(inputs.voltage, 2),
                resultUnit: 'J',
                explanation: 'Energy stored in a capacitor is proportional to capacitance and voltage squared. Doubling voltage quadruples energy.'
            },
            seriesCapacitors: {
                name: 'Series Capacitors (1/C = 1/C₁ + 1/C₂)',
                formula: '1/C_total = 1/C₁ + 1/C₂',
                inputs: [
                    { id: 'c1', label: 'Capacitor 1', symbol: 'C₁', unit: 'F' },
                    { id: 'c2', label: 'Capacitor 2', symbol: 'C₂', unit: 'F' }
                ],
                calculate: (inputs) => 1 / (1 / inputs.c1 + 1 / inputs.c2),
                resultUnit: 'F',
                explanation: 'In series, total capacitance is less than the smallest capacitor. Opposite behavior from resistors in series.'
            },
            parallelCapacitors: {
                name: 'Parallel Capacitors (C = C₁ + C₂)',
                formula: 'C_total = C₁ + C₂ + C₃',
                inputs: [
                    { id: 'c1', label: 'Capacitor 1', symbol: 'C₁', unit: 'F' },
                    { id: 'c2', label: 'Capacitor 2', symbol: 'C₂', unit: 'F' },
                    { id: 'c3', label: 'Capacitor 3', symbol: 'C₃', unit: 'F' }
                ],
                calculate: (inputs) => inputs.c1 + inputs.c2 + inputs.c3,
                resultUnit: 'F',
                explanation: 'In parallel, total capacitance equals the sum of all capacitors. More capacitors = more total capacitance.'
            },
            reactanceCapacitive: {
                name: 'Capacitive Reactance (X_C = 1/(2πfC))',
                formula: 'X_C = 1 / (2π × f × C)',
                inputs: [
                    { id: 'frequency', label: 'Frequency', symbol: 'f', unit: 'Hz' },
                    { id: 'capacitance', label: 'Capacitance', symbol: 'C', unit: 'F' }
                ],
                calculate: (inputs) => 1 / (2 * Math.PI * inputs.frequency * inputs.capacitance),
                resultUnit: 'Ω',
                explanation: 'Capacitive reactance is opposition to AC current. It decreases with higher frequency or capacitance.'
            }
        }
    },
    inductors: {
        title: 'Inductor Calculations',
        calculators: {
            inductorEnergy: {
                name: 'Inductor Energy (E = ½LI²)',
                formula: 'E = ½ × L × I²',
                inputs: [
                    { id: 'inductance', label: 'Inductance', symbol: 'L', unit: 'H' },
                    { id: 'current', label: 'Current', symbol: 'I', unit: 'A' }
                ],
                calculate: (inputs) => 0.5 * inputs.inductance * Math.pow(inputs.current, 2),
                resultUnit: 'J',
                explanation: 'Energy stored in an inductor is proportional to inductance and current squared. Inductors store energy in a magnetic field.'
            },
            seriesInductors: {
                name: 'Series Inductors (L = L₁ + L₂)',
                formula: 'L_total = L₁ + L₂ + L₃',
                inputs: [
                    { id: 'l1', label: 'Inductor 1', symbol: 'L₁', unit: 'H' },
                    { id: 'l2', label: 'Inductor 2', symbol: 'L₂', unit: 'H' },
                    { id: 'l3', label: 'Inductor 3', symbol: 'L₃', unit: 'H' }
                ],
                calculate: (inputs) => inputs.l1 + inputs.l2 + inputs.l3,
                resultUnit: 'H',
                explanation: 'In series, total inductance equals the sum of all inductors. Same rule as series resistors.'
            },
            parallelInductors: {
                name: 'Parallel Inductors (1/L = 1/L₁ + 1/L₂)',
                formula: '1/L_total = 1/L₁ + 1/L₂',
                inputs: [
                    { id: 'l1', label: 'Inductor 1', symbol: 'L₁', unit: 'H' },
                    { id: 'l2', label: 'Inductor 2', symbol: 'L₂', unit: 'H' }
                ],
                calculate: (inputs) => 1 / (1 / inputs.l1 + 1 / inputs.l2),
                resultUnit: 'H',
                explanation: 'In parallel, total inductance is less than the smallest inductor. Same rule as parallel resistors.'
            },
            reactanceInductive: {
                name: 'Inductive Reactance (X_L = 2πfL)',
                formula: 'X_L = 2π × f × L',
                inputs: [
                    { id: 'frequency', label: 'Frequency', symbol: 'f', unit: 'Hz' },
                    { id: 'inductance', label: 'Inductance', symbol: 'L', unit: 'H' }
                ],
                calculate: (inputs) => 2 * Math.PI * inputs.frequency * inputs.inductance,
                resultUnit: 'Ω',
                explanation: 'Inductive reactance is opposition to AC current. It increases with higher frequency or inductance.'
            }
        }
    },
    'ac-circuits': {
        title: 'AC Circuit Analysis',
        calculators: {
            impedance: {
                name: 'Impedance (Z = √(R² + X²))',
                formula: 'Z = √(R² + X²)',
                inputs: [
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' },
                    { id: 'reactance', label: 'Reactance', symbol: 'X', unit: 'Ω' }
                ],
                calculate: (inputs) => Math.sqrt(Math.pow(inputs.resistance, 2) + Math.pow(inputs.reactance, 2)),
                resultUnit: 'Ω',
                explanation: 'Impedance is total opposition to AC current, combining resistance and reactance. Found using Pythagorean theorem.'
            },
            phaseAngle: {
                name: 'Phase Angle (θ = arctan(X/R))',
                formula: 'θ = arctan(X / R)',
                inputs: [
                    { id: 'reactance', label: 'Reactance', symbol: 'X', unit: 'Ω' },
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' }
                ],
                calculate: (inputs) => Math.atan(inputs.reactance / inputs.resistance) * 180 / Math.PI,
                resultUnit: '°',
                explanation: 'Phase angle is the difference between voltage and current in AC circuits. Positive for inductive, negative for capacitive.'
            },
            powerFactor: {
                name: 'Power Factor (PF = cos(θ))',
                formula: 'PF = cos(θ) = R / Z',
                inputs: [
                    { id: 'resistance', label: 'Resistance', symbol: 'R', unit: 'Ω' },
                    { id: 'impedance', label: 'Impedance', symbol: 'Z', unit: 'Ω' }
                ],
                calculate: (inputs) => inputs.resistance / inputs.impedance,
                resultUnit: '',
                explanation: 'Power factor indicates how efficiently AC power is used. 1.0 = perfect (all power used), <1.0 = some power wasted.'
            },
            resonantFrequency: {
                name: 'Resonant Frequency (f = 1/(2π√LC))',
                formula: 'f = 1 / (2π × √(L × C))',
                inputs: [
                    { id: 'inductance', label: 'Inductance', symbol: 'L', unit: 'H' },
                    { id: 'capacitance', label: 'Capacitance', symbol: 'C', unit: 'F' }
                ],
                calculate: (inputs) => 1 / (2 * Math.PI * Math.sqrt(inputs.inductance * inputs.capacitance)),
                resultUnit: 'Hz',
                explanation: 'Resonant frequency is where inductive and capacitive reactances cancel. Used in filters and tuned circuits.'
            }
        }
    },
    transformers: {
        title: 'Transformer Calculations',
        calculators: {
            voltageRatio: {
                name: 'Transformer Voltage Ratio (V₂/V₁ = N₂/N₁)',
                formula: 'V₂ = V₁ × (N₂ / N₁)',
                inputs: [
                    { id: 'v1', label: 'Primary Voltage', symbol: 'V₁', unit: 'V' },
                    { id: 'n1', label: 'Primary Turns', symbol: 'N₁', unit: 'turns' },
                    { id: 'n2', label: 'Secondary Turns', symbol: 'N₂', unit: 'turns' }
                ],
                calculate: (inputs) => inputs.v1 * (inputs.n2 / inputs.n1),
                resultUnit: 'V',
                explanation: 'Transformers change voltage based on turns ratio. More turns on secondary = higher voltage (step-up), fewer = lower voltage (step-down).'
            },
            currentRatio: {
                name: 'Transformer Current Ratio (I₂/I₁ = N₁/N₂)',
                formula: 'I₂ = I₁ × (N₁ / N₂)',
                inputs: [
                    { id: 'i1', label: 'Primary Current', symbol: 'I₁', unit: 'A' },
                    { id: 'n1', label: 'Primary Turns', symbol: 'N₁', unit: 'turns' },
                    { id: 'n2', label: 'Secondary Turns', symbol: 'N₂', unit: 'turns' }
                ],
                calculate: (inputs) => inputs.i1 * (inputs.n1 / inputs.n2),
                resultUnit: 'A',
                explanation: 'Current ratio is inverse of voltage ratio. Higher voltage side has lower current, maintaining power balance (neglecting losses).'
            },
            transformerPower: {
                name: 'Transformer Efficiency (η = P_out/P_in × 100)',
                formula: 'η = (P_out / P_in) × 100',
                inputs: [
                    { id: 'pout', label: 'Output Power', symbol: 'P_out', unit: 'W' },
                    { id: 'pin', label: 'Input Power', symbol: 'P_in', unit: 'W' }
                ],
                calculate: (inputs) => (inputs.pout / inputs.pin) * 100,
                resultUnit: '%',
                explanation: 'Efficiency measures how much input power is converted to useful output. Good transformers are >95% efficient.'
            }
        }
    },
    semiconductors: {
        title: 'Semiconductor Circuits',
        calculators: {
            ledResistor: {
                name: 'LED Current-Limiting Resistor',
                formula: 'R = (V_supply - V_LED) / I_LED',
                inputs: [
                    { id: 'vsupply', label: 'Supply Voltage', symbol: 'V_supply', unit: 'V' },
                    { id: 'vled', label: 'LED Forward Voltage', symbol: 'V_LED', unit: 'V' },
                    { id: 'iled', label: 'LED Current', symbol: 'I_LED', unit: 'A' }
                ],
                calculate: (inputs) => (inputs.vsupply - inputs.vled) / inputs.iled,
                resultUnit: 'Ω',
                explanation: 'Calculates resistor needed to limit LED current. Prevents LED burnout by dropping excess voltage.'
            },
            transistorGain: {
                name: 'Transistor Current Gain (β = I_C/I_B)',
                formula: 'β = I_C / I_B',
                inputs: [
                    { id: 'ic', label: 'Collector Current', symbol: 'I_C', unit: 'A' },
                    { id: 'ib', label: 'Base Current', symbol: 'I_B', unit: 'A' }
                ],
                calculate: (inputs) => inputs.ic / inputs.ib,
                resultUnit: '',
                explanation: 'Beta (β) or hFE is the DC current gain. Shows how much collector current flows for a given base current.'
            },
            zenerPower: {
                name: 'Zener Diode Power Dissipation',
                formula: 'P = V_Z × I_Z',
                inputs: [
                    { id: 'vz', label: 'Zener Voltage', symbol: 'V_Z', unit: 'V' },
                    { id: 'iz', label: 'Zener Current', symbol: 'I_Z', unit: 'A' }
                ],
                calculate: (inputs) => inputs.vz * inputs.iz,
                resultUnit: 'W',
                explanation: 'Power dissipated in a Zener diode. Must be less than the diode\'s maximum power rating to prevent damage.'
            }
        }
    }
};

// ========================================
// ELECTRICITY CALCULATOR CLASS
// ========================================
class ElectricityCalculator {
    constructor() {
        this.currentCategory = 'basic';
        this.currentCalculator = null;

        this.initializeElements();
        this.attachEventListeners();
        this.loadCategory('basic');
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
        const data = electricityCalculators[category];

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

        const data = electricityCalculators[this.currentCategory];
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
                           class="electricity-input" 
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
        if (isNaN(value) || !isFinite(value)) {
            return 'Error';
        }
        if (Math.abs(value) < 0.0001 || Math.abs(value) > 1000000) {
            return value.toExponential(4);
        }
        return parseFloat(value.toFixed(6)).toString();
    }
}

// ========================================
// INITIALIZE ELECTRICITY CALCULATOR
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    window.electricityCalculator = new ElectricityCalculator();
});