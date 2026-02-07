// ========================================
// FINANCE CALCULATORS
// ========================================

const financeCalculators = {
    interest: {
        title: 'Interest Calculations',
        calculators: {
            simpleInterest: {
                name: 'Simple Interest (I = P×r×t)',
                formula: 'I = P × r × t',
                inputs: [
                    { id: 'principal', label: 'Principal Amount', symbol: 'P', unit: '$' },
                    { id: 'rate', label: 'Annual Rate', symbol: 'r', unit: '%' },
                    { id: 'time', label: 'Time Period', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => inputs.principal * (inputs.rate / 100) * inputs.time,
                resultUnit: '$',
                explanation: 'Simple interest calculates interest only on the principal amount. Total = Principal + Interest. Used for short-term loans and bonds.'
            },
            compoundInterest: {
                name: 'Compound Interest (A = P(1+r/n)^(nt))',
                formula: 'A = P × (1 + r/n)^(n×t)',
                inputs: [
                    { id: 'principal', label: 'Principal Amount', symbol: 'P', unit: '$' },
                    { id: 'rate', label: 'Annual Rate', symbol: 'r', unit: '%' },
                    { id: 'time', label: 'Time Period', symbol: 't', unit: 'years' },
                    { id: 'frequency', label: 'Compounds/Year', symbol: 'n', unit: '' }
                ],
                calculate: (inputs) => inputs.principal * Math.pow(1 + (inputs.rate / 100) / inputs.frequency, inputs.frequency * inputs.time),
                resultUnit: '$',
                explanation: 'Compound interest earns interest on interest. More frequent compounding = higher returns. The power of exponential growth!'
            },
            continuousCompound: {
                name: 'Continuous Compound (A = Pe^(rt))',
                formula: 'A = P × e^(r×t)',
                inputs: [
                    { id: 'principal', label: 'Principal Amount', symbol: 'P', unit: '$' },
                    { id: 'rate', label: 'Annual Rate', symbol: 'r', unit: '%' },
                    { id: 'time', label: 'Time Period', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => inputs.principal * Math.exp((inputs.rate / 100) * inputs.time),
                resultUnit: '$',
                explanation: 'Continuous compounding is the mathematical limit of compounding frequency. Highest possible return for given rate.'
            },
            effectiveRate: {
                name: 'Effective Annual Rate (EAR)',
                formula: 'EAR = (1 + r/n)^n - 1',
                inputs: [
                    { id: 'nominal', label: 'Nominal Rate', symbol: 'r', unit: '%' },
                    { id: 'frequency', label: 'Compounds/Year', symbol: 'n', unit: '' }
                ],
                calculate: (inputs) => (Math.pow(1 + (inputs.nominal / 100) / inputs.frequency, inputs.frequency) - 1) * 100,
                resultUnit: '%',
                explanation: 'EAR shows the true annual return accounting for compounding. Higher than nominal rate when n > 1.'
            }
        }
    },
    loans: {
        title: 'Loan Calculations',
        calculators: {
            loanPayment: {
                name: 'Monthly Loan Payment (PMT)',
                formula: 'PMT = P × [r(1+r)^n] / [(1+r)^n - 1]',
                inputs: [
                    { id: 'principal', label: 'Loan Amount', symbol: 'P', unit: '$' },
                    { id: 'rate', label: 'Annual Rate', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Loan Term', symbol: 'n', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const monthlyRate = inputs.rate / 100 / 12;
                    const numPayments = inputs.years * 12;
                    return inputs.principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
                },
                resultUnit: '$/month',
                explanation: 'Calculates fixed monthly payment for fully amortizing loan. Includes principal and interest.'
            },
            totalLoanCost: {
                name: 'Total Loan Cost',
                formula: 'Total = Monthly Payment × Months',
                inputs: [
                    { id: 'principal', label: 'Loan Amount', symbol: 'P', unit: '$' },
                    { id: 'rate', label: 'Annual Rate', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Loan Term', symbol: 'n', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const monthlyRate = inputs.rate / 100 / 12;
                    const numPayments = inputs.years * 12;
                    const payment = inputs.principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
                    return payment * numPayments;
                },
                resultUnit: '$',
                explanation: 'Total amount paid over loan life. Difference from principal = total interest paid.'
            },
            loanAffordability: {
                name: 'Affordable Loan Amount',
                formula: 'P = PMT × [(1+r)^n - 1] / [r(1+r)^n]',
                inputs: [
                    { id: 'payment', label: 'Monthly Payment', symbol: 'PMT', unit: '$' },
                    { id: 'rate', label: 'Annual Rate', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Loan Term', symbol: 'n', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const monthlyRate = inputs.rate / 100 / 12;
                    const numPayments = inputs.years * 12;
                    return inputs.payment * (Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
                },
                resultUnit: '$',
                explanation: 'Maximum loan amount you can afford with a given monthly payment. Useful for budget planning.'
            }
        }
    },
    investments: {
        title: 'Investment Analysis',
        calculators: {
            roi: {
                name: 'Return on Investment (ROI)',
                formula: 'ROI = [(FV - IV) / IV] × 100',
                inputs: [
                    { id: 'initial', label: 'Initial Investment', symbol: 'IV', unit: '$' },
                    { id: 'final', label: 'Final Value', symbol: 'FV', unit: '$' }
                ],
                calculate: (inputs) => ((inputs.final - inputs.initial) / inputs.initial) * 100,
                resultUnit: '%',
                explanation: 'ROI measures profitability. Positive = profit, negative = loss. 100% ROI = doubled your money.'
            },
            cagr: {
                name: 'Compound Annual Growth Rate',
                formula: 'CAGR = [(FV/IV)^(1/t) - 1] × 100',
                inputs: [
                    { id: 'initial', label: 'Initial Value', symbol: 'IV', unit: '$' },
                    { id: 'final', label: 'Final Value', symbol: 'FV', unit: '$' },
                    { id: 'years', label: 'Years', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => (Math.pow(inputs.final / inputs.initial, 1 / inputs.years) - 1) * 100,
                resultUnit: '%',
                explanation: 'CAGR shows smoothed annual growth rate. Better than average for comparing investments over time.'
            },
            futureValue: {
                name: 'Future Value of Investment',
                formula: 'FV = PV × (1 + r)^t',
                inputs: [
                    { id: 'present', label: 'Present Value', symbol: 'PV', unit: '$' },
                    { id: 'rate', label: 'Annual Return', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Years', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => inputs.present * Math.pow(1 + inputs.rate / 100, inputs.years),
                resultUnit: '$',
                explanation: 'Calculates what money will be worth in the future with compound growth. Time value of money.'
            },
            presentValue: {
                name: 'Present Value (Discount)',
                formula: 'PV = FV / (1 + r)^t',
                inputs: [
                    { id: 'future', label: 'Future Value', symbol: 'FV', unit: '$' },
                    { id: 'rate', label: 'Discount Rate', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Years', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => inputs.future / Math.pow(1 + inputs.rate / 100, inputs.years),
                resultUnit: '$',
                explanation: 'What future money is worth today. Higher discount rate = lower present value. Used in DCF analysis.'
            },
            dividendYield: {
                name: 'Dividend Yield',
                formula: 'Yield = (Annual Dividend / Price) × 100',
                inputs: [
                    { id: 'dividend', label: 'Annual Dividend', symbol: 'D', unit: '$' },
                    { id: 'price', label: 'Stock Price', symbol: 'P', unit: '$' }
                ],
                calculate: (inputs) => (inputs.dividend / inputs.price) * 100,
                resultUnit: '%',
                explanation: 'Dividend yield shows income return from stock. 4% = $4 annual dividend per $100 invested.'
            }
        }
    },
    savings: {
        title: 'Savings & Goals',
        calculators: {
            savingsGoal: {
                name: 'Monthly Savings for Goal',
                formula: 'PMT = FV × [r / ((1+r)^n - 1)]',
                inputs: [
                    { id: 'goal', label: 'Savings Goal', symbol: 'FV', unit: '$' },
                    { id: 'rate', label: 'Annual Return', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Time to Goal', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const monthlyRate = inputs.rate / 100 / 12;
                    const months = inputs.years * 12;
                    return inputs.goal * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
                },
                resultUnit: '$/month',
                explanation: 'Calculates monthly deposit needed to reach savings goal with compound interest.'
            },
            savingsGrowth: {
                name: 'Savings with Regular Deposits',
                formula: 'FV = PMT × [((1+r)^n - 1) / r]',
                inputs: [
                    { id: 'monthly', label: 'Monthly Deposit', symbol: 'PMT', unit: '$' },
                    { id: 'rate', label: 'Annual Return', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Years', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const monthlyRate = inputs.rate / 100 / 12;
                    const months = inputs.years * 12;
                    return inputs.monthly * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
                },
                resultUnit: '$',
                explanation: 'Future value of regular monthly deposits with compound interest. Power of consistent saving!'
            },
            emergencyFund: {
                name: 'Emergency Fund Calculator',
                formula: 'Emergency Fund = Monthly Expenses × Months',
                inputs: [
                    { id: 'expenses', label: 'Monthly Expenses', symbol: 'E', unit: '$' },
                    { id: 'months', label: 'Months Coverage', symbol: 'n', unit: 'months' }
                ],
                calculate: (inputs) => inputs.expenses * inputs.months,
                resultUnit: '$',
                explanation: 'Recommended emergency fund = 3-6 months of expenses. Provides financial safety net.'
            }
        }
    },
    retirement: {
        title: 'Retirement Planning',
        calculators: {
            retirementSavings: {
                name: 'Retirement Nest Egg',
                formula: 'FV = PMT × [((1+r)^n - 1) / r]',
                inputs: [
                    { id: 'monthly', label: 'Monthly Contribution', symbol: 'PMT', unit: '$' },
                    { id: 'rate', label: 'Annual Return', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Years to Retirement', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const monthlyRate = inputs.rate / 100 / 12;
                    const months = inputs.years * 12;
                    return inputs.monthly * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
                },
                resultUnit: '$',
                explanation: 'Total retirement savings from monthly contributions. Start early for maximum compound growth!'
            },
            retirementIncome: {
                name: 'Retirement Monthly Income',
                formula: '4% Rule: Annual = Portfolio × 0.04',
                inputs: [
                    { id: 'portfolio', label: 'Retirement Portfolio', symbol: 'P', unit: '$' }
                ],
                calculate: (inputs) => (inputs.portfolio * 0.04) / 12,
                resultUnit: '$/month',
                explanation: '4% rule: withdraw 4% annually for sustainable retirement income. Adjust for inflation annually.'
            },
            socialSecurityReplace: {
                name: 'Income Replacement Ratio',
                formula: 'Ratio = (Retirement Income / Current Income) × 100',
                inputs: [
                    { id: 'retirement', label: 'Retirement Income', symbol: 'R', unit: '$' },
                    { id: 'current', label: 'Current Income', symbol: 'C', unit: '$' }
                ],
                calculate: (inputs) => (inputs.retirement / inputs.current) * 100,
                resultUnit: '%',
                explanation: 'Percentage of current income replaced in retirement. Target: 70-80% for comfortable retirement.'
            }
        }
    },
    business: {
        title: 'Business Finance',
        calculators: {
            breakEven: {
                name: 'Break-Even Point (Units)',
                formula: 'BEP = Fixed Costs / (Price - Variable Cost)',
                inputs: [
                    { id: 'fixed', label: 'Fixed Costs', symbol: 'FC', unit: '$' },
                    { id: 'price', label: 'Unit Price', symbol: 'P', unit: '$' },
                    { id: 'variable', label: 'Variable Cost/Unit', symbol: 'VC', unit: '$' }
                ],
                calculate: (inputs) => inputs.fixed / (inputs.price - inputs.variable),
                resultUnit: 'units',
                explanation: 'Units needed to cover all costs. Below = loss, above = profit. Critical for pricing decisions.'
            },
            profitMargin: {
                name: 'Profit Margin',
                formula: 'Margin = [(Revenue - Cost) / Revenue] × 100',
                inputs: [
                    { id: 'revenue', label: 'Revenue', symbol: 'R', unit: '$' },
                    { id: 'cost', label: 'Total Cost', symbol: 'C', unit: '$' }
                ],
                calculate: (inputs) => ((inputs.revenue - inputs.cost) / inputs.revenue) * 100,
                resultUnit: '%',
                explanation: 'Percentage of revenue that becomes profit. Higher = more profitable. Industry varies widely.'
            },
            markupPrice: {
                name: 'Markup Pricing',
                formula: 'Price = Cost × (1 + Markup/100)',
                inputs: [
                    { id: 'cost', label: 'Cost', symbol: 'C', unit: '$' },
                    { id: 'markup', label: 'Markup', symbol: 'M', unit: '%' }
                ],
                calculate: (inputs) => inputs.cost * (1 + inputs.markup / 100),
                resultUnit: '$',
                explanation: 'Selling price based on cost plus markup percentage. Common retail pricing method.'
            },
            cashFlow: {
                name: 'Operating Cash Flow',
                formula: 'OCF = Revenue - Operating Expenses',
                inputs: [
                    { id: 'revenue', label: 'Revenue', symbol: 'R', unit: '$' },
                    { id: 'expenses', label: 'Operating Expenses', symbol: 'E', unit: '$' }
                ],
                calculate: (inputs) => inputs.revenue - inputs.expenses,
                resultUnit: '$',
                explanation: 'Cash generated from operations. Positive = healthy, negative = burning cash. Key metric for sustainability.'
            }
        }
    },
    mortgage: {
        title: 'Mortgage & Real Estate',
        calculators: {
            mortgagePayment: {
                name: 'Monthly Mortgage Payment',
                formula: 'PMT = P × [r(1+r)^n] / [(1+r)^n - 1]',
                inputs: [
                    { id: 'price', label: 'Home Price', symbol: 'P', unit: '$' },
                    { id: 'down', label: 'Down Payment', symbol: 'D', unit: '%' },
                    { id: 'rate', label: 'Annual Rate', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Loan Term', symbol: 'n', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const principal = inputs.price * (1 - inputs.down / 100);
                    const monthlyRate = inputs.rate / 100 / 12;
                    const numPayments = inputs.years * 12;
                    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
                },
                resultUnit: '$/month',
                explanation: 'Principal & interest payment. Add taxes, insurance, HOA for total housing cost.'
            },
            affordableHome: {
                name: 'Affordable Home Price',
                formula: 'Price = (Income × 0.28) / Payment Ratio',
                inputs: [
                    { id: 'income', label: 'Annual Income', symbol: 'I', unit: '$' },
                    { id: 'rate', label: 'Mortgage Rate', symbol: 'r', unit: '%' },
                    { id: 'years', label: 'Loan Term', symbol: 'n', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const monthlyIncome = inputs.income / 12;
                    const maxPayment = monthlyIncome * 0.28; // 28% rule
                    const monthlyRate = inputs.rate / 100 / 12;
                    const numPayments = inputs.years * 12;
                    return maxPayment * (Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments));
                },
                resultUnit: '$',
                explanation: 'Max home price using 28% rule: monthly payment ≤ 28% of gross income. Conservative guideline.'
            },
            refinanceSavings: {
                name: 'Refinance Savings',
                formula: 'Savings = (Old Payment - New Payment) × Months',
                inputs: [
                    { id: 'oldRate', label: 'Current Rate', symbol: 'r₁', unit: '%' },
                    { id: 'newRate', label: 'New Rate', symbol: 'r₂', unit: '%' },
                    { id: 'balance', label: 'Loan Balance', symbol: 'B', unit: '$' },
                    { id: 'years', label: 'Remaining Years', symbol: 'n', unit: 'years' }
                ],
                calculate: (inputs) => {
                    const months = inputs.years * 12;
                    const oldMonthlyRate = inputs.oldRate / 100 / 12;
                    const newMonthlyRate = inputs.newRate / 100 / 12;
                    const oldPayment = inputs.balance * (oldMonthlyRate * Math.pow(1 + oldMonthlyRate, months)) / (Math.pow(1 + oldMonthlyRate, months) - 1);
                    const newPayment = inputs.balance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, months)) / (Math.pow(1 + newMonthlyRate, months) - 1);
                    return (oldPayment - newPayment) * months;
                },
                resultUnit: '$',
                explanation: 'Total savings from refinancing. Compare to closing costs to determine if worthwhile.'
            }
        }
    },
    currency: {
        title: 'Currency & Exchange',
        calculators: {
            currencyConversion: {
                name: 'Currency Conversion',
                formula: 'Converted = Amount × Exchange Rate',
                inputs: [
                    { id: 'amount', label: 'Amount', symbol: 'A', unit: '' },
                    { id: 'rate', label: 'Exchange Rate', symbol: 'R', unit: '' }
                ],
                calculate: (inputs) => inputs.amount * inputs.rate,
                resultUnit: '',
                explanation: 'Converts currency using exchange rate. Example: $100 × 0.85 = €85. Rates fluctuate daily.'
            },
            inflation: {
                name: 'Inflation-Adjusted Value',
                formula: 'Adjusted = Amount × (1 + inflation)^years',
                inputs: [
                    { id: 'amount', label: 'Amount', symbol: 'A', unit: '$' },
                    { id: 'inflation', label: 'Inflation Rate', symbol: 'i', unit: '%' },
                    { id: 'years', label: 'Years', symbol: 't', unit: 'years' }
                ],
                calculate: (inputs) => inputs.amount * Math.pow(1 + inputs.inflation / 100, inputs.years),
                resultUnit: '$',
                explanation: 'Future cost accounting for inflation. $100 at 3% inflation = $103 next year. Money loses purchasing power.'
            },
            realReturn: {
                name: 'Real Return (After Inflation)',
                formula: 'Real Return = [(1+nominal)/(1+inflation) - 1] × 100',
                inputs: [
                    { id: 'nominal', label: 'Nominal Return', symbol: 'r_n', unit: '%' },
                    { id: 'inflation', label: 'Inflation Rate', symbol: 'i', unit: '%' }
                ],
                calculate: (inputs) => ((1 + inputs.nominal / 100) / (1 + inputs.inflation / 100) - 1) * 100,
                resultUnit: '%',
                explanation: 'Actual purchasing power gain. 10% return - 3% inflation = ~6.8% real return. Wealth increase in real terms.'
            }
        }
    }
};

// ========================================
// FINANCE CALCULATOR CLASS
// ========================================
class FinanceCalculator {
    constructor() {
        this.currentCategory = 'interest';
        this.currentCalculator = null;

        this.initializeElements();
        this.attachEventListeners();
        this.loadCategory('interest');
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
        const data = financeCalculators[category];

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

        const data = financeCalculators[this.currentCategory];
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
                           class="finance-input" 
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
        // For currency, show 2 decimal places
        if (Math.abs(value) < 0.01) {
            return value.toExponential(4);
        }
        return value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
}

// ========================================
// INITIALIZE FINANCE CALCULATOR
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    window.financeCalculator = new FinanceCalculator();
});