// ========================================
// PHYSICS.JS - Physics Calculators
// ========================================

const PhysicsApp = {
    formulas: {
        // KINEMATICS
        velocity: {
            label: 'v = u + at',
            formula: 'v = u + at',
            inputs: ['Initial Velocity (u)', 'Acceleration (a)', 'Time (t)'],
            units: ['m/s', 'm/s²', 's'],
            calc: (v) => v[0] + v[1] * v[2],
            unit: 'm/s'
        },
        displacement: {
            label: 's = ut + ½at²',
            formula: 's = ut + ½at²',
            inputs: ['Initial Velocity (u)', 'Acceleration (a)', 'Time (t)'],
            units: ['m/s', 'm/s²', 's'],
            calc: (v) => v[0] * v[2] + 0.5 * v[1] * Math.pow(v[2], 2),
            unit: 'm'
        },
        'velocity-squared': {
            label: 'v² = u² + 2as',
            formula: 'v² = u² + 2as',
            inputs: ['Initial Velocity (u)', 'Acceleration (a)', 'Displacement (s)'],
            units: ['m/s', 'm/s²', 'm'],
            calc: (v) => Math.sqrt(Math.pow(v[0], 2) + 2 * v[1] * v[2]),
            unit: 'm/s'
        },

        // DYNAMICS
        force: {
            label: 'F = ma',
            formula: 'F = ma',
            inputs: ['Mass (m)', 'Acceleration (a)'],
            units: ['kg', 'm/s²'],
            calc: (v) => v[0] * v[1],
            unit: 'N'
        },
        momentum: {
            label: 'p = mv',
            formula: 'p = mv',
            inputs: ['Mass (m)', 'Velocity (v)'],
            units: ['kg', 'm/s'],
            calc: (v) => v[0] * v[1],
            unit: 'kg⋅m/s'
        },
        impulse: {
            label: 'J = FΔt',
            formula: 'J = FΔt',
            inputs: ['Force (F)', 'Time (Δt)'],
            units: ['N', 's'],
            calc: (v) => v[0] * v[1],
            unit: 'N⋅s'
        },

        // ENERGY & WORK
        work: {
            label: 'W = Fd',
            formula: 'W = Fd',
            inputs: ['Force (F)', 'Distance (d)'],
            units: ['N', 'm'],
            calc: (v) => v[0] * v[1],
            unit: 'J'
        },
        power: {
            label: 'P = W/t',
            formula: 'P = W/t',
            inputs: ['Work (W)', 'Time (t)'],
            units: ['J', 's'],
            calc: (v) => v[0] / v[1],
            unit: 'W'
        },
        kinetic: {
            label: 'KE = ½mv²',
            formula: 'KE = ½mv²',
            inputs: ['Mass (m)', 'Velocity (v)'],
            units: ['kg', 'm/s'],
            calc: (v) => 0.5 * v[0] * Math.pow(v[1], 2),
            unit: 'J'
        },
        potential: {
            label: 'PE = mgh',
            formula: 'PE = mgh',
            inputs: ['Mass (m)', 'Gravity (g)', 'Height (h)'],
            units: ['kg', 'm/s²', 'm'],
            calc: (v) => v[0] * v[1] * v[2],
            unit: 'J'
        },

        // WAVES & OPTICS
        'wave-speed': {
            label: 'v = fλ',
            formula: 'v = fλ',
            inputs: ['Frequency (f)', 'Wavelength (λ)'],
            units: ['Hz', 'm'],
            calc: (v) => v[0] * v[1],
            unit: 'm/s'
        },
        lens: {
            label: '1/f = 1/v + 1/u',
            formula: '1/f = 1/v + 1/u',
            inputs: ['Object Distance (u)', 'Image Distance (v)'],
            units: ['cm', 'cm'],
            calc: (v) => 1 / (1 / v[0] + 1 / v[1]),
            unit: 'cm'
        },

        // THERMODYNAMICS
        'heat-energy': {
            label: 'Q = mcΔT (Heat Energy)',
            formula: 'Q = mcΔT',
            inputs: ['Mass (m)', 'Specific Heat (c)', 'Temperature Change (ΔT)'],
            units: ['kg', 'J/kg⋅K', 'K'],
            calc: (v) => v[0] * v[1] * v[2],
            unit: 'J'
        },

        // GRAVITY
        'gravitational-force': {
            label: 'F = GMm/r² (Newton\'s Law of Gravitation)',
            formula: 'F = GMm/r²',
            inputs: ['Mass 1 (M)', 'Mass 2 (m)', 'Distance (r)'],
            units: ['kg', 'kg', 'm'],
            calc: (v) => (6.674e-11 * v[0] * v[1]) / Math.pow(v[2], 2),
            unit: 'N'
        },

        // CIRCULAR MOTION
        'centripetal-force': {
            label: 'F = mv²/r (Centripetal Force)',
            formula: 'F = mv²/r',
            inputs: ['Mass (m)', 'Velocity (v)', 'Radius (r)'],
            units: ['kg', 'm/s', 'm'],
            calc: (v) => (v[0] * Math.pow(v[1], 2)) / v[2],
            unit: 'N'
        },
        'angular-velocity': {
            label: 'ω = v/r (Angular Velocity)',
            formula: 'ω = v/r',
            inputs: ['Linear Velocity (v)', 'Radius (r)'],
            units: ['m/s', 'm'],
            calc: (v) => v[0] / v[1],
            unit: 'rad/s'
        }
    },

    init() {
        this.changeFormula();
    },

    changeFormula() {
        const type = document.getElementById('physics-type').value;
        const inputsContainer = document.getElementById('physics-inputs');
        const formula = this.formulas[type];

        if (!inputsContainer || !formula) return;

        inputsContainer.innerHTML = '';
        formula.inputs.forEach((input, i) => {
            const div = document.createElement('div');
            div.className = 'input-row';
            div.innerHTML = `
                <label for="phys-input-${i}">${input} [${formula.units[i]}]:</label>
                <input type="text" id="phys-input-${i}" class="number-input" placeholder="Enter number">
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

        const resultContainer = document.getElementById('physics-result');
        if (resultContainer) resultContainer.textContent = '';
    },

    calculate() {
        const type = document.getElementById('physics-type').value;
        const formula = this.formulas[type];
        const values = [];
        const inputs = document.querySelectorAll('#physics-inputs input');

        inputs.forEach(input => {
            const value = parseFloat(input.value);
            values.push(value);
        });

        const resultContainer = document.getElementById('physics-result');
        if (!resultContainer) return;

        if (values.some(isNaN)) {
            resultContainer.innerHTML = '<p style="color: #ef4444;">Please fill all fields with valid numbers</p>';
            return;
        }

        const result = formula.calc(values);
        resultContainer.innerHTML = `
            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Result: ${result.toFixed(4)} ${formula.unit}</p>
            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Formula used: ${formula.formula}</p>
        `;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    PhysicsApp.init();
});