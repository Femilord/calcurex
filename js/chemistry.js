// ========================================
// CHEMISTRY.JS - Chemistry Calculators
// ========================================

const ChemistryApp = {
    types: {
        molarity: {
            inputs: ['Moles of Solute (n)', 'Volume of Solution (V)'],
            units: ['mol', 'L'],
            formula: 'M = n/V',
            calc: (v) => v[0] / v[1],
            label: 'Molarity (M)'
        },
        dilution: {
            inputs: ['Initial Molarity (M₁)', 'Initial Volume (V₁)', 'Final Volume (V₂)'],
            units: ['M', 'L', 'L'],
            formula: 'M₁V₁ = M₂V₂',
            calc: (v) => (v[0] * v[1]) / v[2],
            label: 'Final Molarity M₂ (M)'
        },
        'molecular-weight': {
            inputs: ['Total Mass (m)', 'Number of Moles (n)'],
            units: ['g', 'mol'],
            formula: 'MW = m/n',
            calc: (v) => v[0] / v[1],
            label: 'Molecular Weight (g/mol)'
        },
        'percent-composition': {
            inputs: ['Mass of Element (m_element)', 'Total Mass (m_total)'],
            units: ['g', 'g'],
            formula: '% = (m_element/m_total) × 100',
            calc: (v) => (v[0] / v[1]) * 100,
            label: 'Percent Composition (%)'
        },
        'ideal-gas': {
            inputs: ['Pressure (P)', 'Volume (V)', 'Temperature (T)'],
            units: ['atm', 'L', 'K'],
            formula: 'PV = nRT (where R = 0.0821 L⋅atm/mol⋅K)',
            calc: (v) => (v[0] * v[1]) / (0.0821 * v[2]),
            label: 'Moles n (mol)'
        },
        ph: {
            inputs: ['H⁺ Concentration ([H⁺])'],
            units: ['mol/L'],
            formula: 'pH = -log₁₀[H⁺]',
            calc: (v) => -Math.log10(v[0]),
            label: 'pH'
        },
        density: {
            inputs: ['Mass (m)', 'Volume (V)'],
            units: ['g', 'mL'],
            formula: 'ρ = m/V',
            calc: (v) => v[0] / v[1],
            label: 'Density (g/mL)'
        },
        'percent-yield': {
            inputs: ['Actual Yield (Y_actual)', 'Theoretical Yield (Y_theoretical)'],
            units: ['g', 'g'],
            formula: '% Yield = (Y_actual/Y_theoretical) × 100',
            calc: (v) => (v[0] / v[1]) * 100,
            label: 'Percent Yield (%)'
        }
    },

    init() {
        this.changeType();
    },

    changeType() {
        const type = document.getElementById('chem-type').value;
        const inputsContainer = document.getElementById('chem-inputs');
        const data = this.types[type];

        if (!inputsContainer || !data) return;

        inputsContainer.innerHTML = '';
        data.inputs.forEach((input, i) => {
            const div = document.createElement('div');
            div.className = 'input-row';
            div.innerHTML = `
                <label for="chem-input-${i}">${input} [${data.units[i]}]:</label>
                <input type="text" id="chem-input-${i}" class="number-input" placeholder="Enter number">
            `;
            inputsContainer.appendChild(div);

            const inputElement = div.querySelector('input');
            inputElement.addEventListener('keypress', (e) => {
                const char = String.fromCharCode(e.which);
                if (!/[\d.e\-]/.test(char)) {
                    e.preventDefault();
                }
            });
        });

        const resultContainer = document.getElementById('chem-result');
        if (resultContainer) resultContainer.textContent = '';
    },

    calculate() {
        const type = document.getElementById('chem-type').value;
        const data = this.types[type];
        const values = [];
        const inputs = document.querySelectorAll('#chem-inputs input');

        inputs.forEach(input => {
            values.push(parseFloat(input.value));
        });

        const resultContainer = document.getElementById('chem-result');
        if (!resultContainer) return;

        if (values.some(isNaN)) {
            resultContainer.innerHTML = '<p style="color: #ef4444;">Please fill all fields with valid numbers</p>';
            return;
        }

        const result = data.calc(values);
        resultContainer.innerHTML = `
            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">${data.label}: ${result.toFixed(4)}</p>
            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Formula used: ${data.formula}</p>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ChemistryApp.init();
});