// ========================================
// FINANCE.JS - Finance Calculators
// ========================================

const FinanceApp = {
    types: {
        'simple-interest': {
            inputs: ['Principal (P)', 'Rate (r)', 'Time (t)'],
            units: ['$', '% per year', 'years'],
            formula: 'I = P × r × t / 100',
            calc: (v) => v[0] * v[1] * v[2] / 100,
            label: 'Simple Interest ($)'
        },
        'compound-interest': {
            inputs: ['Principal (P)', 'Rate (r)', 'Time (t)', 'Compounds per year (n)'],
            units: ['$', '% per year', 'years', 'times/year'],
            formula: 'A = P(1 + r/100n)^(nt) - P',
            calc: (v) => v[0] * Math.pow((1 + v[1] / 100 / v[3]), v[3] * v[2]) - v[0],
            label: 'Compound Interest ($)'
        },
        loan: {
            inputs: ['Loan Amount (P)', 'Annual Interest Rate (r)', 'Loan Term (n)'],
            units: ['$', '%', 'months'],
            formula: 'M = P × [r(1+r)^n] / [(1+r)^n - 1]',
            calc: (v) => {
                const r = v[1] / 100 / 12;
                const n = v[2];
                return (v[0] * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            },
            label: 'Monthly Payment ($)'
        },
        mortgage: {
            inputs: ['Home Price (P_home)', 'Down Payment (D)', 'Interest Rate (r)', 'Loan Term (t)'],
            units: ['$', '$', '%', 'years'],
            formula: 'M = (P - D) × [r(1+r)^n] / [(1+r)^n - 1]',
            calc: (v) => {
                const principal = v[0] - v[1];
                const r = v[2] / 100 / 12;
                const n = v[3] * 12;
                return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            },
            label: 'Monthly Payment ($)'
        },
        investment: {
            inputs: ['Initial Investment (I_initial)', 'Final Value (V_final)', 'Time Period (t)'],
            units: ['$', '$', 'years'],
            formula: 'Annual Return = [(V_final - I_initial) / I_initial] × 100 / t',
            calc: (v) => ((v[1] - v[0]) / v[0]) * 100 / v[2],
            label: 'Annual Return (%)'
        },
        roi: {
            inputs: ['Gain from Investment (G)', 'Cost of Investment (C)'],
            units: ['$', '$'],
            formula: 'ROI = [(G - C) / C] × 100',
            calc: (v) => ((v[0] - v[1]) / v[1]) * 100,
            label: 'ROI (%)'
        },
        savings: {
            inputs: ['Monthly Deposit (PMT)', 'Annual Interest Rate (r)', 'Years (t)'],
            units: ['$', '%', 'years'],
            formula: 'FV = PMT × [(1 + r)^n - 1] / r',
            calc: (v) => {
                const r = v[1] / 100 / 12;
                const n = v[2] * 12;
                return v[0] * ((Math.pow(1 + r, n) - 1) / r);
            },
            label: 'Future Value ($)'
        },
        discount: {
            inputs: ['Original Price (P)', 'Discount (d)'],
            units: ['$', '%'],
            formula: 'Final Price = P - (P × d / 100)',
            calc: (v) => v[0] - (v[0] * v[1] / 100),
            label: 'Final Price ($)'
        },
        tip: {
            inputs: ['Bill Amount (B)', 'Tip Percentage (t)'],
            units: ['$', '%'],
            formula: 'Tip = B × t / 100',
            calc: (v) => v[0] * v[1] / 100,
            label: 'Tip Amount ($)'
        },
        percentage: {
            inputs: ['Number (N)', 'Percentage (p)'],
            units: ['value', '%'],
            formula: 'Result = N × p / 100',
            calc: (v) => v[0] * v[1] / 100,
            label: 'Result'
        }
    },

    init() {
        this.changeType();
    },

    changeType() {
        const type = document.getElementById('finance-type').value;
        const inputsContainer = document.getElementById('finance-inputs');
        const data = this.types[type];

        if (!inputsContainer || !data) return;

        inputsContainer.innerHTML = '';
        data.inputs.forEach((input, i) => {
            const div = document.createElement('div');
            div.className = 'input-row';
            div.innerHTML = `
                <label for="finance-input-${i}">${input} [${data.units[i]}]:</label>
                <input type="text" id="finance-input-${i}" class="number-input" placeholder="Enter number">
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

        const resultContainer = document.getElementById('finance-result');
        if (resultContainer) resultContainer.textContent = '';
    },

    calculate() {
        const type = document.getElementById('finance-type').value;
        const data = this.types[type];
        const values = [];
        const inputs = document.querySelectorAll('#finance-inputs input');

        inputs.forEach(input => {
            values.push(parseFloat(input.value));
        });

        const resultContainer = document.getElementById('finance-result');
        if (!resultContainer) return;

        if (values.some(isNaN)) {
            resultContainer.innerHTML = '<p style="color: #ef4444;">Please fill all fields with valid numbers</p>';
            return;
        }

        const result = data.calc(values);
        resultContainer.innerHTML = `
            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">${data.label}: ${result.toFixed(2)}</p>
            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Formula used: ${data.formula}</p>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    FinanceApp.init();
});