// ========================================
// ELECTRICITY.JS - Electrical Calculators
// ========================================

const ElectricityApp = {
    formulas: {
        'ohms-law-voltage': {
            label: 'V = IR (Ohm\'s Law - Voltage)',
            formula: 'V = IR',
            inputs: ['Current (I)', 'Resistance (R)'],
            units: ['A', 'Ω'],
            calc: (v) => v[0] * v[1],
            unit: 'V',
            description: 'Calculate voltage from current and resistance'
        },
        'ohms-law-current': {
            label: 'I = V/R (Ohm\'s Law - Current)',
            formula: 'I = V/R',
            inputs: ['Voltage (V)', 'Resistance (R)'],
            units: ['V', 'Ω'],
            calc: (v) => v[0] / v[1],
            unit: 'A',
            description: 'Calculate current from voltage and resistance'
        },
        'ohms-law-resistance': {
            label: 'R = V/I (Ohm\'s Law - Resistance)',
            formula: 'R = V/I',
            inputs: ['Voltage (V)', 'Current (I)'],
            units: ['V', 'A'],
            calc: (v) => v[0] / v[1],
            unit: 'Ω',
            description: 'Calculate resistance from voltage and current'
        },
        'power-vi': {
            label: 'P = VI (Electric Power)',
            formula: 'P = VI',
            inputs: ['Voltage (V)', 'Current (I)'],
            units: ['V', 'A'],
            calc: (v) => v[0] * v[1],
            unit: 'W',
            description: 'Power from voltage and current'
        },
        'power-ir': {
            label: 'P = I²R (Power Loss)',
            formula: 'P = I²R',
            inputs: ['Current (I)', 'Resistance (R)'],
            units: ['A', 'Ω'],
            calc: (v) => Math.pow(v[0], 2) * v[1],
            unit: 'W',
            description: 'Power dissipation in resistance'
        },
        'power-vr': {
            label: 'P = V²/R (Power from Voltage)',
            formula: 'P = V²/R',
            inputs: ['Voltage (V)', 'Resistance (R)'],
            units: ['V', 'Ω'],
            calc: (v) => Math.pow(v[0], 2) / v[1],
            unit: 'W',
            description: 'Power from voltage and resistance'
        },
        'energy': {
            label: 'E = Pt (Electrical Energy)',
            formula: 'E = Pt',
            inputs: ['Power (P)', 'Time (t)'],
            units: ['W', 'hours'],
            calc: (v) => v[0] * v[1],
            unit: 'Wh',
            description: 'Energy consumption over time'
        },
        'energy-kwh': {
            label: 'E = Pt (Energy in kWh)',
            formula: 'E = Pt',
            inputs: ['Power (P)', 'Time (t)'],
            units: ['kW', 'hours'],
            calc: (v) => v[0] * v[1],
            unit: 'kWh',
            description: 'Energy consumption in kilowatt-hours'
        },
        'resistors-series': {
            label: 'R = R₁ + R₂ + R₃ (Series Resistors)',
            formula: 'R_total = R₁ + R₂ + R₃',
            inputs: ['Resistor 1 (R₁)', 'Resistor 2 (R₂)', 'Resistor 3 (R₃)'],
            units: ['Ω', 'Ω', 'Ω'],
            calc: (v) => v[0] + v[1] + v[2],
            unit: 'Ω',
            description: 'Total resistance in series'
        },
        'resistors-parallel-2': {
            label: '1/R = 1/R₁ + 1/R₂ (Parallel - 2 Resistors)',
            formula: '1/R = 1/R₁ + 1/R₂',
            inputs: ['Resistor 1 (R₁)', 'Resistor 2 (R₂)'],
            units: ['Ω', 'Ω'],
            calc: (v) => (v[0] * v[1]) / (v[0] + v[1]),
            unit: 'Ω',
            description: 'Total resistance of 2 resistors in parallel'
        },
        'resistors-parallel-3': {
            label: '1/R = 1/R₁ + 1/R₂ + 1/R₃ (Parallel - 3 Resistors)',
            formula: '1/R = 1/R₁ + 1/R₂ + 1/R₃',
            inputs: ['Resistor 1 (R₁)', 'Resistor 2 (R₂)', 'Resistor 3 (R₃)'],
            units: ['Ω', 'Ω', 'Ω'],
            calc: (v) => 1 / (1 / v[0] + 1 / v[1] + 1 / v[2]),
            unit: 'Ω',
            description: 'Total resistance of 3 resistors in parallel'
        },
        'capacitors-series': {
            label: '1/C = 1/C₁ + 1/C₂ (Series Capacitors)',
            formula: '1/C = 1/C₁ + 1/C₂',
            inputs: ['Capacitor 1 (C₁)', 'Capacitor 2 (C₂)'],
            units: ['F', 'F'],
            calc: (v) => (v[0] * v[1]) / (v[0] + v[1]),
            unit: 'F',
            description: 'Total capacitance in series'
        },
        'capacitors-parallel': {
            label: 'C = C₁ + C₂ + C₃ (Parallel Capacitors)',
            formula: 'C_total = C₁ + C₂ + C₃',
            inputs: ['Capacitor 1 (C₁)', 'Capacitor 2 (C₂)', 'Capacitor 3 (C₃)'],
            units: ['F', 'F', 'F'],
            calc: (v) => v[0] + v[1] + v[2],
            unit: 'F',
            description: 'Total capacitance in parallel'
        },
        'capacitive-reactance': {
            label: 'Xc = 1/(2πfC) (Capacitive Reactance)',
            formula: 'Xc = 1/(2πfC)',
            inputs: ['Frequency (f)', 'Capacitance (C)'],
            units: ['Hz', 'F'],
            calc: (v) => 1 / (2 * Math.PI * v[0] * v[1]),
            unit: 'Ω',
            description: 'Reactance of capacitor in AC circuit'
        },
        'inductive-reactance': {
            label: 'XL = 2πfL (Inductive Reactance)',
            formula: 'XL = 2πfL',
            inputs: ['Frequency (f)', 'Inductance (L)'],
            units: ['Hz', 'H'],
            calc: (v) => 2 * Math.PI * v[0] * v[1],
            unit: 'Ω',
            description: 'Reactance of inductor in AC circuit'
        },
        'impedance-rc': {
            label: 'Z = √(R² + Xc²) (RC Impedance)',
            formula: 'Z = √(R² + Xc²)',
            inputs: ['Resistance (R)', 'Capacitive Reactance (Xc)'],
            units: ['Ω', 'Ω'],
            calc: (v) => Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2)),
            unit: 'Ω',
            description: 'Impedance of RC circuit'
        },
        'impedance-rl': {
            label: 'Z = √(R² + XL²) (RL Impedance)',
            formula: 'Z = √(R² + XL²)',
            inputs: ['Resistance (R)', 'Inductive Reactance (XL)'],
            units: ['Ω', 'Ω'],
            calc: (v) => Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2)),
            unit: 'Ω',
            description: 'Impedance of RL circuit'
        },
        'power-factor': {
            label: 'PF = cos(φ) = R/Z (Power Factor)',
            formula: 'PF = R/Z',
            inputs: ['Resistance (R)', 'Impedance (Z)'],
            units: ['Ω', 'Ω'],
            calc: (v) => v[0] / v[1],
            unit: '',
            description: 'Power factor of AC circuit'
        },
        'voltage-divider': {
            label: 'Vout = Vin × (R2/(R1+R2)) (Voltage Divider)',
            formula: 'V_out = V_in × (R₂/(R₁+R₂))',
            inputs: ['Input Voltage (V_in)', 'Resistor 1 (R₁)', 'Resistor 2 (R₂)'],
            units: ['V', 'Ω', 'Ω'],
            calc: (v) => v[0] * (v[2] / (v[1] + v[2])),
            unit: 'V',
            description: 'Output voltage from voltage divider'
        },
        'current-divider': {
            label: 'I1 = Itotal × (R2/(R1+R2)) (Current Divider)',
            formula: 'I₁ = I_total × (R₂/(R₁+R₂))',
            inputs: ['Total Current (I_total)', 'Resistor 1 (R₁)', 'Resistor 2 (R₂)'],
            units: ['A', 'Ω', 'Ω'],
            calc: (v) => v[0] * (v[2] / (v[1] + v[2])),
            unit: 'A',
            description: 'Current through R1 in parallel circuit'
        },
        'wire-resistance': {
            label: 'R = ρL/A (Wire Resistance)',
            formula: 'R = ρL/A',
            inputs: ['Resistivity (ρ)', 'Length (L)', 'Cross-section Area (A)'],
            units: ['Ω⋅m', 'm', 'm²'],
            calc: (v) => v[0] * v[1] / v[2],
            unit: 'Ω',
            description: 'Resistance of a wire'
        },
        'efficiency': {
            label: 'η = (Pout/Pin) × 100% (Efficiency)',
            formula: 'η = (P_out/P_in) × 100%',
            inputs: ['Output Power (P_out)', 'Input Power (P_in)'],
            units: ['W', 'W'],
            calc: (v) => (v[0] / v[1]) * 100,
            unit: '%',
            description: 'Efficiency of electrical device'
        },
        'transformer-ratio': {
            label: 'Vs/Vp = Ns/Np (Transformer)',
            formula: 'V_s/V_p = N_s/N_p',
            inputs: ['Primary Voltage (V_p)', 'Primary Turns (N_p)', 'Secondary Turns (N_s)'],
            units: ['V', 'turns', 'turns'],
            calc: (v) => v[0] * (v[2] / v[1]),
            unit: 'V',
            description: 'Secondary voltage of transformer'
        },
        'charge': {
            label: 'Q = It (Electric Charge)',
            formula: 'Q = It',
            inputs: ['Current (I)', 'Time (t)'],
            units: ['A', 's'],
            calc: (v) => v[0] * v[1],
            unit: 'C',
            description: 'Charge from current and time'
        },
        'capacitor-energy': {
            label: 'E = ½CV² (Capacitor Energy)',
            formula: 'E = ½CV²',
            inputs: ['Capacitance (C)', 'Voltage (V)'],
            units: ['F', 'V'],
            calc: (v) => 0.5 * v[0] * Math.pow(v[1], 2),
            unit: 'J',
            description: 'Energy stored in capacitor'
        },
        'inductor-energy': {
            label: 'E = ½LI² (Inductor Energy)',
            formula: 'E = ½LI²',
            inputs: ['Inductance (L)', 'Current (I)'],
            units: ['H', 'A'],
            calc: (v) => 0.5 * v[0] * Math.pow(v[1], 2),
            unit: 'J',
            description: 'Energy stored in inductor'
        },
        'time-constant-rc': {
            label: 'τ = RC (RC Time Constant)',
            formula: 'τ = RC',
            inputs: ['Resistance (R)', 'Capacitance (C)'],
            units: ['Ω', 'F'],
            calc: (v) => v[0] * v[1],
            unit: 's',
            description: 'Time constant of RC circuit'
        },
        'time-constant-rl': {
            label: 'τ = L/R (RL Time Constant)',
            formula: 'τ = L/R',
            inputs: ['Inductance (L)', 'Resistance (R)'],
            units: ['H', 'Ω'],
            calc: (v) => v[0] / v[1],
            unit: 's',
            description: 'Time constant of RL circuit'
        },
        'resonance-frequency': {
            label: 'f = 1/(2π√(LC)) (Resonance Frequency)',
            formula: 'f = 1/(2π√(LC))',
            inputs: ['Inductance (L)', 'Capacitance (C)'],
            units: ['H', 'F'],
            calc: (v) => 1 / (2 * Math.PI * Math.sqrt(v[0] * v[1])),
            unit: 'Hz',
            description: 'Resonant frequency of LC circuit'
        },
        'three-phase-power': {
            label: 'P = √3 × VL × IL × PF (3-Phase Power)',
            formula: 'P = √3 × V_L × I_L × PF',
            inputs: ['Line Voltage (V_L)', 'Line Current (I_L)', 'Power Factor (PF)'],
            units: ['V', 'A', 'unitless'],
            calc: (v) => Math.sqrt(3) * v[0] * v[1] * v[2],
            unit: 'W',
            description: 'Power in 3-phase system'
        },
        'electricity-cost': {
            label: 'Cost = Power × Time × Rate (Electricity Cost)',
            formula: 'Cost = Power × Time × Rate',
            inputs: ['Power (P)', 'Time (t)', 'Rate (r)'],
            units: ['kW', 'hours', '$/kWh'],
            calc: (v) => v[0] * v[1] * v[2],
            unit: '$',
            description: 'Cost of electricity consumption'
        },
        'current-density': {
            label: 'J = I/A (Current Density)',
            formula: 'J = I/A',
            inputs: ['Current (I)', 'Cross-section Area (A)'],
            units: ['A', 'm²'],
            calc: (v) => v[0] / v[1],
            unit: 'A/m²',
            description: 'Current density in conductor'
        }
    },

    init() {
        this.changeFormula();
    },

    changeFormula() {
        const type = document.getElementById('electricity-type').value;
        const inputsContainer = document.getElementById('electricity-inputs');
        const formula = this.formulas[type];

        if (!inputsContainer || !formula) return;

        // Show formula description
        const descContainer = document.getElementById('electricity-description');
        if (descContainer) {
            descContainer.textContent = formula.description;
        }

        inputsContainer.innerHTML = '';
        formula.inputs.forEach((input, i) => {
            const div = document.createElement('div');
            div.className = 'input-row';
            div.innerHTML = `
                <label for="elec-input-${i}">${input} [${formula.units[i]}]:</label>
                <input type="text" id="elec-input-${i}" class="number-input" placeholder="Enter number">
            `;
            inputsContainer.appendChild(div);

            // Add input validation
            const inputElement = div.querySelector('input');
            inputElement.addEventListener('keypress', (e) => {
                const char = String.fromCharCode(e.which);
                if (!/[\d.e\-]/.test(char)) {
                    e.preventDefault();
                }
            });
        });

        const resultContainer = document.getElementById('electricity-result');
        if (resultContainer) resultContainer.textContent = '';
    },

    calculate() {
        const type = document.getElementById('electricity-type').value;
        const formula = this.formulas[type];
        const values = [];
        const inputs = document.querySelectorAll('#electricity-inputs input');

        inputs.forEach(input => {
            const value = parseFloat(input.value);
            values.push(value);
        });

        const resultContainer = document.getElementById('electricity-result');
        if (!resultContainer) return;

        if (values.some(isNaN)) {
            resultContainer.innerHTML = '<p style="color: #ef4444;">Please fill all fields with valid numbers</p>';
            return;
        }

        const result = formula.calc(values);
        const unitText = formula.unit ? ` ${formula.unit}` : '';
        resultContainer.innerHTML = `
            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Result: ${result.toFixed(6)}${unitText}</p>
            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Formula used: ${formula.formula}</p>
        `;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ElectricityApp.init();
});