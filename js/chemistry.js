// ========================================
// CHEMISTRY CALCULATORS DATA & LOGIC
// ========================================

const chemistryCalculators = {
    solutions: {
        title: 'Solutions & Concentration',
        calculators: {
            molarity: {
                name: 'Molarity (M = n/V)',
                formula: 'M = n / V',
                inputs: [
                    { id: 'moles', label: 'Moles of Solute', symbol: 'n', unit: 'mol' },
                    { id: 'volume', label: 'Volume of Solution', symbol: 'V', unit: 'L' }
                ],
                calculate: (inputs) => inputs.moles / inputs.volume,
                resultUnit: 'M (mol/L)',
                explanation: 'Molarity is the concentration of a solution expressed as moles of solute per liter of solution. It\'s the most common way to express concentration in chemistry.'
            },
            molality: {
                name: 'Molality (m = n/kg)',
                formula: 'm = n / mass',
                inputs: [
                    { id: 'moles', label: 'Moles of Solute', symbol: 'n', unit: 'mol' },
                    { id: 'mass', label: 'Mass of Solvent', symbol: 'kg', unit: 'kg' }
                ],
                calculate: (inputs) => inputs.moles / inputs.mass,
                resultUnit: 'molal (mol/kg)',
                explanation: 'Molality is concentration expressed as moles of solute per kilogram of solvent. Unlike molarity, it doesn\'t change with temperature.'
            },
            dilution: {
                name: 'Dilution (M₁V₁ = M₂V₂)',
                formula: 'V₂ = (M₁ × V₁) / M₂',
                inputs: [
                    { id: 'concentration1', label: 'Initial Molarity', symbol: 'M₁', unit: 'M' },
                    { id: 'volume1', label: 'Initial Volume', symbol: 'V₁', unit: 'L' },
                    { id: 'concentration2', label: 'Final Molarity', symbol: 'M₂', unit: 'M' }
                ],
                calculate: (inputs) => (inputs.concentration1 * inputs.volume1) / inputs.concentration2,
                resultUnit: 'L',
                explanation: 'The dilution equation relates the concentration and volume before and after dilution. The number of moles stays constant during dilution.'
            },
            percentComposition: {
                name: 'Mass Percent ((mass/total)×100)',
                formula: '% = (mass_solute / mass_solution) × 100',
                inputs: [
                    { id: 'soluteMass', label: 'Mass of Solute', symbol: 'm_solute', unit: 'g' },
                    { id: 'solutionMass', label: 'Mass of Solution', symbol: 'm_total', unit: 'g' }
                ],
                calculate: (inputs) => (inputs.soluteMass / inputs.solutionMass) * 100,
                resultUnit: '%',
                explanation: 'Mass percent expresses the concentration as the mass of solute divided by total mass of solution, multiplied by 100.'
            }
        }
    },
    stoichiometry: {
        title: 'Stoichiometry',
        calculators: {
            molesFromMass: {
                name: 'Moles from Mass (n = m/M)',
                formula: 'n = m / M',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'g' },
                    { id: 'molarMass', label: 'Molar Mass', symbol: 'M', unit: 'g/mol' }
                ],
                calculate: (inputs) => inputs.mass / inputs.molarMass,
                resultUnit: 'mol',
                explanation: 'Converts mass to moles using the molar mass. This is fundamental for all stoichiometric calculations.'
            },
            massFromMoles: {
                name: 'Mass from Moles (m = n×M)',
                formula: 'm = n × M',
                inputs: [
                    { id: 'moles', label: 'Moles', symbol: 'n', unit: 'mol' },
                    { id: 'molarMass', label: 'Molar Mass', symbol: 'M', unit: 'g/mol' }
                ],
                calculate: (inputs) => inputs.moles * inputs.molarMass,
                resultUnit: 'g',
                explanation: 'Converts moles to mass by multiplying by the molar mass of the substance.'
            },
            limitingReactant: {
                name: 'Theoretical Yield (mass = n×M)',
                formula: 'Theoretical Yield = moles × Molar Mass',
                inputs: [
                    { id: 'moles', label: 'Moles of Product', symbol: 'n', unit: 'mol' },
                    { id: 'molarMass', label: 'Molar Mass of Product', symbol: 'M', unit: 'g/mol' }
                ],
                calculate: (inputs) => inputs.moles * inputs.molarMass,
                resultUnit: 'g',
                explanation: 'Calculates the maximum amount of product that can be formed based on stoichiometry, assuming complete reaction.'
            },
            percentYield: {
                name: 'Percent Yield ((actual/theoretical)×100)',
                formula: '% Yield = (Actual / Theoretical) × 100',
                inputs: [
                    { id: 'actual', label: 'Actual Yield', symbol: 'Actual', unit: 'g' },
                    { id: 'theoretical', label: 'Theoretical Yield', symbol: 'Theoretical', unit: 'g' }
                ],
                calculate: (inputs) => (inputs.actual / inputs.theoretical) * 100,
                resultUnit: '%',
                explanation: 'Percent yield compares the actual amount of product obtained to the theoretical maximum, indicating reaction efficiency.'
            }
        }
    },
    'gas-laws': {
        title: 'Gas Laws',
        calculators: {
            idealGas: {
                name: 'Ideal Gas Law (PV = nRT)',
                formula: 'P = (n × R × T) / V',
                inputs: [
                    { id: 'moles', label: 'Moles', symbol: 'n', unit: 'mol' },
                    { id: 'temperature', label: 'Temperature', symbol: 'T', unit: 'K' },
                    { id: 'volume', label: 'Volume', symbol: 'V', unit: 'L' }
                ],
                calculate: (inputs) => (inputs.moles * 0.0821 * inputs.temperature) / inputs.volume,
                resultUnit: 'atm',
                explanation: 'The Ideal Gas Law relates pressure, volume, temperature, and moles. R = 0.0821 L⋅atm/(mol⋅K). Assumes ideal gas behavior.'
            },
            boyles: {
                name: 'Boyle\'s Law (P₁V₁ = P₂V₂)',
                formula: 'P₂ = (P₁ × V₁) / V₂',
                inputs: [
                    { id: 'pressure1', label: 'Initial Pressure', symbol: 'P₁', unit: 'atm' },
                    { id: 'volume1', label: 'Initial Volume', symbol: 'V₁', unit: 'L' },
                    { id: 'volume2', label: 'Final Volume', symbol: 'V₂', unit: 'L' }
                ],
                calculate: (inputs) => (inputs.pressure1 * inputs.volume1) / inputs.volume2,
                resultUnit: 'atm',
                explanation: 'Boyle\'s Law states that pressure and volume are inversely proportional at constant temperature. When volume decreases, pressure increases.'
            },
            charles: {
                name: 'Charles\' Law (V₁/T₁ = V₂/T₂)',
                formula: 'V₂ = (V₁ × T₂) / T₁',
                inputs: [
                    { id: 'volume1', label: 'Initial Volume', symbol: 'V₁', unit: 'L' },
                    { id: 'temp1', label: 'Initial Temperature', symbol: 'T₁', unit: 'K' },
                    { id: 'temp2', label: 'Final Temperature', symbol: 'T₂', unit: 'K' }
                ],
                calculate: (inputs) => (inputs.volume1 * inputs.temp2) / inputs.temp1,
                resultUnit: 'L',
                explanation: 'Charles\' Law states that volume and temperature are directly proportional at constant pressure. Heating a gas increases its volume.'
            },
            combined: {
                name: 'Combined Gas Law (P₁V₁/T₁ = P₂V₂/T₂)',
                formula: 'P₂ = (P₁ × V₁ × T₂) / (T₁ × V₂)',
                inputs: [
                    { id: 'pressure1', label: 'Initial Pressure', symbol: 'P₁', unit: 'atm' },
                    { id: 'volume1', label: 'Initial Volume', symbol: 'V₁', unit: 'L' },
                    { id: 'temp1', label: 'Initial Temperature', symbol: 'T₁', unit: 'K' },
                    { id: 'volume2', label: 'Final Volume', symbol: 'V₂', unit: 'L' },
                    { id: 'temp2', label: 'Final Temperature', symbol: 'T₂', unit: 'K' }
                ],
                calculate: (inputs) => (inputs.pressure1 * inputs.volume1 * inputs.temp2) / (inputs.temp1 * inputs.volume2),
                resultUnit: 'atm',
                explanation: 'The Combined Gas Law combines Boyle\'s, Charles\', and Gay-Lussac\'s laws for changing conditions.'
            }
        }
    },
    'acids-bases': {
        title: 'Acids & Bases',
        calculators: {
            pH: {
                name: 'pH from [H⁺] (pH = -log[H⁺])',
                formula: 'pH = -log₁₀[H⁺]',
                inputs: [
                    { id: 'concentration', label: 'H⁺ Concentration', symbol: '[H⁺]', unit: 'M' }
                ],
                calculate: (inputs) => -Math.log10(inputs.concentration),
                resultUnit: '',
                explanation: 'pH is the negative logarithm of hydrogen ion concentration. pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.'
            },
            pOH: {
                name: 'pOH from [OH⁻] (pOH = -log[OH⁻])',
                formula: 'pOH = -log₁₀[OH⁻]',
                inputs: [
                    { id: 'concentration', label: 'OH⁻ Concentration', symbol: '[OH⁻]', unit: 'M' }
                ],
                calculate: (inputs) => -Math.log10(inputs.concentration),
                resultUnit: '',
                explanation: 'pOH is the negative logarithm of hydroxide ion concentration. pH + pOH = 14 at 25°C.'
            },
            hydrogenConc: {
                name: '[H⁺] from pH ([H⁺] = 10^-pH)',
                formula: '[H⁺] = 10^(-pH)',
                inputs: [
                    { id: 'pH', label: 'pH', symbol: 'pH', unit: '' }
                ],
                calculate: (inputs) => Math.pow(10, -inputs.pH),
                resultUnit: 'M',
                explanation: 'Converts pH to hydrogen ion concentration. Each pH unit represents a 10-fold change in [H⁺].'
            },
            bufferHH: {
                name: 'Henderson-Hasselbalch (pH = pKa + log([A⁻]/[HA]))',
                formula: 'pH = pKa + log₁₀([A⁻]/[HA])',
                inputs: [
                    { id: 'pKa', label: 'pKa', symbol: 'pKa', unit: '' },
                    { id: 'base', label: 'Base Concentration', symbol: '[A⁻]', unit: 'M' },
                    { id: 'acid', label: 'Acid Concentration', symbol: '[HA]', unit: 'M' }
                ],
                calculate: (inputs) => inputs.pKa + Math.log10(inputs.base / inputs.acid),
                resultUnit: '',
                explanation: 'The Henderson-Hasselbalch equation calculates pH of buffer solutions from pKa and the ratio of conjugate base to weak acid.'
            }
        }
    },
    thermochemistry: {
        title: 'Thermochemistry',
        calculators: {
            heatCapacity: {
                name: 'Heat (q = mcΔT)',
                formula: 'q = m × c × ΔT',
                inputs: [
                    { id: 'mass', label: 'Mass', symbol: 'm', unit: 'g' },
                    { id: 'specificHeat', label: 'Specific Heat', symbol: 'c', unit: 'J/(g⋅°C)' },
                    { id: 'tempChange', label: 'Temperature Change', symbol: 'ΔT', unit: '°C' }
                ],
                calculate: (inputs) => inputs.mass * inputs.specificHeat * inputs.tempChange,
                resultUnit: 'J',
                explanation: 'Calculates heat absorbed or released when temperature changes. Specific heat is the energy needed to raise 1g by 1°C.'
            },
            enthalpyReaction: {
                name: 'Enthalpy Change (ΔH = q/n)',
                formula: 'ΔH = q / n',
                inputs: [
                    { id: 'heat', label: 'Heat', symbol: 'q', unit: 'J' },
                    { id: 'moles', label: 'Moles', symbol: 'n', unit: 'mol' }
                ],
                calculate: (inputs) => inputs.heat / inputs.moles,
                resultUnit: 'J/mol',
                explanation: 'Molar enthalpy change is the heat per mole of substance. Negative values indicate exothermic reactions (release heat).'
            },
            heatFusion: {
                name: 'Heat of Fusion (q = nΔHfus)',
                formula: 'q = n × ΔHfus',
                inputs: [
                    { id: 'moles', label: 'Moles', symbol: 'n', unit: 'mol' },
                    { id: 'heatFusion', label: 'Heat of Fusion', symbol: 'ΔHfus', unit: 'kJ/mol' }
                ],
                calculate: (inputs) => inputs.moles * inputs.heatFusion,
                resultUnit: 'kJ',
                explanation: 'Heat required to melt a substance at its melting point. Energy breaks intermolecular forces without temperature change.'
            },
            gibbsFreeEnergy: {
                name: 'Gibbs Free Energy (ΔG = ΔH - TΔS)',
                formula: 'ΔG = ΔH - T × ΔS',
                inputs: [
                    { id: 'enthalpy', label: 'Enthalpy Change', symbol: 'ΔH', unit: 'kJ' },
                    { id: 'temperature', label: 'Temperature', symbol: 'T', unit: 'K' },
                    { id: 'entropy', label: 'Entropy Change', symbol: 'ΔS', unit: 'kJ/K' }
                ],
                calculate: (inputs) => inputs.enthalpy - inputs.temperature * inputs.entropy,
                resultUnit: 'kJ',
                explanation: 'Gibbs free energy determines spontaneity. ΔG < 0 = spontaneous, ΔG = 0 = equilibrium, ΔG > 0 = non-spontaneous.'
            }
        }
    },
    electrochemistry: {
        title: 'Electrochemistry',
        calculators: {
            nernst: {
                name: 'Nernst Equation (E = E° - (RT/nF)lnQ)',
                formula: 'E = E° - (0.0592/n) × log₁₀Q  (at 25°C)',
                inputs: [
                    { id: 'standardPotential', label: 'Standard Potential', symbol: 'E°', unit: 'V' },
                    { id: 'electrons', label: 'Electrons Transferred', symbol: 'n', unit: '' },
                    { id: 'reactionQuotient', label: 'Reaction Quotient', symbol: 'Q', unit: '' }
                ],
                calculate: (inputs) => inputs.standardPotential - (0.0592 / inputs.electrons) * Math.log10(inputs.reactionQuotient),
                resultUnit: 'V',
                explanation: 'The Nernst equation calculates cell potential under non-standard conditions. At equilibrium, E = 0 and Q = K.'
            },
            faradays: {
                name: 'Faraday\'s Law (m = (Q×M)/(n×F))',
                formula: 'm = (Q × M) / (n × F)',
                inputs: [
                    { id: 'charge', label: 'Charge', symbol: 'Q', unit: 'C' },
                    { id: 'molarMass', label: 'Molar Mass', symbol: 'M', unit: 'g/mol' },
                    { id: 'electrons', label: 'Electrons Transferred', symbol: 'n', unit: '' }
                ],
                calculate: (inputs) => (inputs.charge * inputs.molarMass) / (inputs.electrons * 96485),
                resultUnit: 'g',
                explanation: 'Faraday\'s Law relates the mass of substance deposited/dissolved to the charge passed. F = 96,485 C/mol.'
            },
            cellPotential: {
                name: 'Cell Potential (E°cell = E°red - E°ox)',
                formula: 'E°cell = E°cathode - E°anode',
                inputs: [
                    { id: 'cathode', label: 'Cathode Potential', symbol: 'E°cathode', unit: 'V' },
                    { id: 'anode', label: 'Anode Potential', symbol: 'E°anode', unit: 'V' }
                ],
                calculate: (inputs) => inputs.cathode - inputs.anode,
                resultUnit: 'V',
                explanation: 'Standard cell potential is the difference between reduction potentials. Positive E°cell indicates a spontaneous reaction.'
            }
        }
    },
    kinetics: {
        title: 'Chemical Kinetics',
        calculators: {
            rateConstant: {
                name: 'Rate Constant (k from half-life, 1st order)',
                formula: 'k = ln(2) / t₁/₂',
                inputs: [
                    { id: 'halfLife', label: 'Half-life', symbol: 't₁/₂', unit: 's' }
                ],
                calculate: (inputs) => Math.log(2) / inputs.halfLife,
                resultUnit: 's⁻¹',
                explanation: 'For first-order reactions, the rate constant is inversely proportional to half-life. Independent of initial concentration.'
            },
            halfLife: {
                name: 'Half-life (t₁/₂ = ln(2)/k, 1st order)',
                formula: 't₁/₂ = ln(2) / k',
                inputs: [
                    { id: 'rateConstant', label: 'Rate Constant', symbol: 'k', unit: 's⁻¹' }
                ],
                calculate: (inputs) => Math.log(2) / inputs.rateConstant,
                resultUnit: 's',
                explanation: 'Half-life is the time for concentration to decrease to half its initial value. For first-order reactions, it\'s constant.'
            },
            arrhenius: {
                name: 'Arrhenius Equation (k = Ae^(-Ea/RT))',
                formula: 'k = A × e^(-Ea/(R×T))',
                inputs: [
                    { id: 'preExponential', label: 'Pre-exponential Factor', symbol: 'A', unit: 's⁻¹' },
                    { id: 'activationEnergy', label: 'Activation Energy', symbol: 'Ea', unit: 'J/mol' },
                    { id: 'temperature', label: 'Temperature', symbol: 'T', unit: 'K' }
                ],
                calculate: (inputs) => inputs.preExponential * Math.exp(-inputs.activationEnergy / (8.314 * inputs.temperature)),
                resultUnit: 's⁻¹',
                explanation: 'The Arrhenius equation shows how rate constant depends on temperature and activation energy. Higher T or lower Ea increases k.'
            }
        }
    },
    nuclear: {
        title: 'Nuclear Chemistry',
        calculators: {
            radioactiveDecay: {
                name: 'Radioactive Decay (N = N₀e^(-λt))',
                formula: 'N = N₀ × e^(-λt)',
                inputs: [
                    { id: 'initial', label: 'Initial Amount', symbol: 'N₀', unit: 'atoms' },
                    { id: 'decayConstant', label: 'Decay Constant', symbol: 'λ', unit: 's⁻¹' },
                    { id: 'time', label: 'Time', symbol: 't', unit: 's' }
                ],
                calculate: (inputs) => inputs.initial * Math.exp(-inputs.decayConstant * inputs.time),
                resultUnit: 'atoms',
                explanation: 'Exponential decay equation shows how the number of radioactive nuclei decreases over time.'
            },
            nuclearHalfLife: {
                name: 'Nuclear Half-life (t₁/₂ = ln(2)/λ)',
                formula: 't₁/₂ = ln(2) / λ',
                inputs: [
                    { id: 'decayConstant', label: 'Decay Constant', symbol: 'λ', unit: 's⁻¹' }
                ],
                calculate: (inputs) => Math.log(2) / inputs.decayConstant,
                resultUnit: 's',
                explanation: 'Nuclear half-life is the time for half the radioactive nuclei to decay. Each isotope has a characteristic half-life.'
            },
            massDefect: {
                name: 'Mass-Energy (E = mc²)',
                formula: 'E = Δm × c²',
                inputs: [
                    { id: 'massDefect', label: 'Mass Defect', symbol: 'Δm', unit: 'kg' }
                ],
                calculate: (inputs) => inputs.massDefect * Math.pow(299792458, 2),
                resultUnit: 'J',
                explanation: 'Einstein\'s equation converts mass defect to binding energy. c = 2.998×10⁸ m/s. Explains nuclear energy release.'
            }
        }
    }
};

// ========================================
// CHEMISTRY CALCULATOR CLASS
// ========================================
class ChemistryCalculator {
    constructor() {
        this.currentCategory = 'solutions';
        this.currentCalculator = null;

        this.initializeElements();
        this.attachEventListeners();
        this.loadCategory('solutions');
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
        const data = chemistryCalculators[category];

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

        const data = chemistryCalculators[this.currentCategory];
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
                           class="chemistry-input" 
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
// INITIALIZE CHEMISTRY CALCULATOR
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    window.chemistryCalculator = new ChemistryCalculator();
});