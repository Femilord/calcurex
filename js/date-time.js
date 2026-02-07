// ========================================
// DATE & TIME CALCULATORS
// ========================================

const dateTimeCalculators = {
    age: {
        title: 'Age & Date Calculations',
        calculators: {
            ageCalculator: {
                name: 'Age Calculator',
                formula: 'Age = Today - Birth Date',
                inputs: [
                    { id: 'birthDate', label: 'Birth Date', symbol: 'DOB', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const birth = new Date(inputs.birthDate);
                    const today = new Date();

                    // Calculate exact age in years, months, days
                    let years = today.getFullYear() - birth.getFullYear();
                    let months = today.getMonth() - birth.getMonth();
                    let days = today.getDate() - birth.getDate();

                    if (days < 0) {
                        months--;
                        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                        days = lastMonth.getDate() + days;
                    }

                    if (months < 0) {
                        years--;
                        months = 12 + months;
                    }

                    // Calculate total time in milliseconds
                    const totalMs = today - birth;

                    // Calculate all units
                    const decades = Math.floor(years / 10);
                    const totalYears = years;
                    const totalMonths = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 30.44));
                    const totalWeeks = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 7));
                    const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
                    const totalHours = Math.floor(totalMs / (1000 * 60 * 60));
                    const totalMinutes = Math.floor(totalMs / (1000 * 60));
                    const totalSeconds = Math.floor(totalMs / 1000);

                    // Format the comprehensive result
                    return `
📊 AGE BREAKDOWN:
━━━━━━━━━━━━━━━━━━━━━━
🎂 ${years} years, ${months} months, ${days} days

📈 TOTAL TIME ALIVE:
━━━━━━━━━━━━━━━━━━━━━━
🔟 Decades: ${decades.toLocaleString()}
📅 Years: ${totalYears.toLocaleString()}
📆 Months: ${totalMonths.toLocaleString()}
📋 Weeks: ${totalWeeks.toLocaleString()}
📄 Days: ${totalDays.toLocaleString()}
⏰ Hours: ${totalHours.toLocaleString()}
⏱️ Minutes: ${totalMinutes.toLocaleString()}
⚡ Seconds: ${totalSeconds.toLocaleString()}
                    `.trim();
                },
                resultUnit: '',
                explanation: 'Calculates your age in EVERY unit imaginable! See your life in decades, years, months, weeks, days, hours, minutes, and seconds. Perfect for sharing on social media and making you feel ancient (or young)! 🎉'
            },
            dateDifference: {
                name: 'Date Difference',
                formula: 'Difference = End Date - Start Date',
                inputs: [
                    { id: 'startDate', label: 'Start Date', symbol: 'Start', unit: '', type: 'date' },
                    { id: 'endDate', label: 'End Date', symbol: 'End', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const start = new Date(inputs.startDate);
                    const end = new Date(inputs.endDate);
                    const diffMs = end - start;
                    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                    const weeks = Math.floor(diffDays / 7);
                    const months = Math.floor(diffDays / 30.44);
                    const years = Math.floor(diffDays / 365.25);

                    return `${diffDays} days (${weeks} weeks, ${months} months, ${years} years)`;
                },
                resultUnit: '',
                explanation: 'Calculates the difference between two dates in days, weeks, months, and years. Useful for project timelines and planning.'
            },
            addDays: {
                name: 'Add Days to Date',
                formula: 'New Date = Start Date + Days',
                inputs: [
                    { id: 'startDate', label: 'Start Date', symbol: 'Start', unit: '', type: 'date' },
                    { id: 'days', label: 'Days to Add', symbol: 'Days', unit: 'days', type: 'number' }
                ],
                calculate: (inputs) => {
                    const start = new Date(inputs.startDate);
                    start.setDate(start.getDate() + parseInt(inputs.days));
                    return start.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                },
                resultUnit: '',
                explanation: 'Adds a specified number of days to a date. Automatically handles month and year changes. Negative values subtract days.'
            },
            daysUntil: {
                name: 'Days Until Date',
                formula: 'Days = Target Date - Today',
                inputs: [
                    { id: 'targetDate', label: 'Target Date', symbol: 'Target', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const target = new Date(inputs.targetDate);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const diffMs = target - today;
                    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
                    return diffDays;
                },
                resultUnit: 'days',
                explanation: 'Counts days from today until target date. Positive = future, negative = past. Perfect for countdown to events.'
            }
        }
    },
    duration: {
        title: 'Time Duration',
        calculators: {
            timeDifference: {
                name: 'Time Difference',
                formula: 'Duration = End Time - Start Time',
                inputs: [
                    { id: 'startTime', label: 'Start Time', symbol: 'Start', unit: '', type: 'time' },
                    { id: 'endTime', label: 'End Time', symbol: 'End', unit: '', type: 'time' }
                ],
                calculate: (inputs) => {
                    const start = new Date(`2000-01-01T${inputs.startTime}`);
                    const end = new Date(`2000-01-01T${inputs.endTime}`);
                    let diffMs = end - start;

                    if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000; // Handle overnight

                    const hours = Math.floor(diffMs / (1000 * 60 * 60));
                    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

                    return `${hours} hours, ${minutes} minutes`;
                },
                resultUnit: '',
                explanation: 'Calculates duration between two times. Handles overnight periods automatically. Great for shift work and time tracking.'
            },
            hoursToTime: {
                name: 'Hours to Time Format',
                formula: 'Convert decimal hours to HH:MM',
                inputs: [
                    { id: 'hours', label: 'Hours (decimal)', symbol: 'H', unit: 'hours', type: 'number' }
                ],
                calculate: (inputs) => {
                    const totalMinutes = inputs.hours * 60;
                    const hours = Math.floor(totalMinutes / 60);
                    const minutes = Math.round(totalMinutes % 60);
                    return `${hours}:${minutes.toString().padStart(2, '0')}`;
                },
                resultUnit: '',
                explanation: 'Converts decimal hours (e.g., 2.5 hours) to time format (2:30). Useful for timesheets and time tracking.'
            },
            minutesToHours: {
                name: 'Minutes to Hours',
                formula: 'Hours = Minutes / 60',
                inputs: [
                    { id: 'minutes', label: 'Minutes', symbol: 'M', unit: 'minutes', type: 'number' }
                ],
                calculate: (inputs) => {
                    return inputs.minutes / 60;
                },
                resultUnit: 'hours',
                explanation: 'Converts minutes to hours (decimal). 90 minutes = 1.5 hours. Useful for time calculations and billing.'
            },
            workHours: {
                name: 'Work Hours Calculator',
                formula: 'Work Hours = (End - Start) - Break',
                inputs: [
                    { id: 'startTime', label: 'Start Time', symbol: 'Start', unit: '', type: 'time' },
                    { id: 'endTime', label: 'End Time', symbol: 'End', unit: '', type: 'time' },
                    { id: 'breakMinutes', label: 'Break (minutes)', symbol: 'Break', unit: 'min', type: 'number' }
                ],
                calculate: (inputs) => {
                    const start = new Date(`2000-01-01T${inputs.startTime}`);
                    const end = new Date(`2000-01-01T${inputs.endTime}`);
                    let diffMs = end - start;
                    if (diffMs < 0) diffMs += 24 * 60 * 60 * 1000;

                    const totalMinutes = diffMs / (1000 * 60) - inputs.breakMinutes;
                    return (totalMinutes / 60).toFixed(2);
                },
                resultUnit: 'hours',
                explanation: 'Calculates work hours excluding break time. Perfect for payroll, timesheets, and productivity tracking.'
            }
        }
    },
    business: {
        title: 'Business Days',
        calculators: {
            businessDays: {
                name: 'Business Days Between Dates',
                formula: 'Count weekdays (Mon-Fri)',
                inputs: [
                    { id: 'startDate', label: 'Start Date', symbol: 'Start', unit: '', type: 'date' },
                    { id: 'endDate', label: 'End Date', symbol: 'End', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const start = new Date(inputs.startDate);
                    const end = new Date(inputs.endDate);
                    let count = 0;

                    while (start <= end) {
                        const day = start.getDay();
                        if (day !== 0 && day !== 6) count++; // Not Sunday or Saturday
                        start.setDate(start.getDate() + 1);
                    }

                    return count;
                },
                resultUnit: 'business days',
                explanation: 'Counts only weekdays (Monday-Friday), excluding weekends. Essential for project timelines and delivery estimates.'
            },
            addBusinessDays: {
                name: 'Add Business Days',
                formula: 'Add N business days to date',
                inputs: [
                    { id: 'startDate', label: 'Start Date', symbol: 'Start', unit: '', type: 'date' },
                    { id: 'days', label: 'Business Days', symbol: 'Days', unit: 'days', type: 'number' }
                ],
                calculate: (inputs) => {
                    const start = new Date(inputs.startDate);
                    let daysToAdd = parseInt(inputs.days);

                    while (daysToAdd > 0) {
                        start.setDate(start.getDate() + 1);
                        const day = start.getDay();
                        if (day !== 0 && day !== 6) daysToAdd--;
                    }

                    return start.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                },
                resultUnit: '',
                explanation: 'Adds business days to a date, automatically skipping weekends. Perfect for delivery dates and project deadlines.'
            },
            weekNumber: {
                name: 'Week Number of Year',
                formula: 'ISO week number calculation',
                inputs: [
                    { id: 'date', label: 'Date', symbol: 'Date', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const date = new Date(inputs.date);
                    date.setHours(0, 0, 0, 0);
                    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
                    const week1 = new Date(date.getFullYear(), 0, 4);
                    return 1 + Math.round(((date - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
                },
                resultUnit: '',
                explanation: 'Returns the ISO week number (1-53) for any date. Week 1 contains the first Thursday of the year.'
            }
        }
    },
    timezone: {
        title: 'Time Zone Conversions',
        calculators: {
            utcOffset: {
                name: 'Time Zone Offset',
                formula: 'Local Time = UTC + Offset',
                inputs: [
                    { id: 'offset', label: 'UTC Offset (hours)', symbol: 'Offset', unit: 'hours', type: 'number' }
                ],
                calculate: (inputs) => {
                    const now = new Date();
                    const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
                    const localTime = new Date(utc.getTime() + inputs.offset * 3600000);
                    return localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
                },
                resultUnit: '',
                explanation: 'Converts UTC time to local time using offset. Positive = east of UTC, negative = west. Example: UTC+5:30 for India.'
            },
            timezoneConvert: {
                name: 'Time Zone Difference',
                formula: 'Time Difference = Offset₂ - Offset₁',
                inputs: [
                    { id: 'offset1', label: 'Zone 1 Offset', symbol: 'UTC₁', unit: 'hours', type: 'number' },
                    { id: 'offset2', label: 'Zone 2 Offset', symbol: 'UTC₂', unit: 'hours', type: 'number' }
                ],
                calculate: (inputs) => {
                    return inputs.offset2 - inputs.offset1;
                },
                resultUnit: 'hours',
                explanation: 'Calculates time difference between zones. Example: NYC (UTC-5) to Tokyo (UTC+9) = 14 hours difference.'
            }
        }
    },
    calendar: {
        title: 'Calendar Utilities',
        calculators: {
            dayOfWeek: {
                name: 'Day of Week Finder',
                formula: 'Zeller\'s congruence algorithm',
                inputs: [
                    { id: 'date', label: 'Date', symbol: 'Date', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const date = new Date(inputs.date);
                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    return days[date.getDay()];
                },
                resultUnit: '',
                explanation: 'Finds what day of the week any date falls on. Useful for planning events and checking historical dates.'
            },
            leapYear: {
                name: 'Leap Year Checker',
                formula: 'Divisible by 4, except centuries unless divisible by 400',
                inputs: [
                    { id: 'year', label: 'Year', symbol: 'Year', unit: '', type: 'number' }
                ],
                calculate: (inputs) => {
                    const year = parseInt(inputs.year);
                    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
                    return isLeap ? 'Yes (366 days)' : 'No (365 days)';
                },
                resultUnit: '',
                explanation: 'Determines if a year is a leap year. Leap years have 366 days with Feb 29. Occurs every 4 years with exceptions.'
            },
            daysInMonth: {
                name: 'Days in Month',
                formula: 'Days vary by month and leap year',
                inputs: [
                    { id: 'month', label: 'Month (1-12)', symbol: 'Month', unit: '', type: 'number' },
                    { id: 'year', label: 'Year', symbol: 'Year', unit: '', type: 'number' }
                ],
                calculate: (inputs) => {
                    const month = parseInt(inputs.month);
                    const year = parseInt(inputs.year);
                    return new Date(year, month, 0).getDate();
                },
                resultUnit: 'days',
                explanation: 'Returns number of days in a specific month and year. Accounts for February in leap years (29 vs 28 days).'
            },
            quarterOfYear: {
                name: 'Quarter of Year',
                formula: 'Q1=Jan-Mar, Q2=Apr-Jun, Q3=Jul-Sep, Q4=Oct-Dec',
                inputs: [
                    { id: 'date', label: 'Date', symbol: 'Date', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const date = new Date(inputs.date);
                    const quarter = Math.floor(date.getMonth() / 3) + 1;
                    return `Q${quarter} ${date.getFullYear()}`;
                },
                resultUnit: '',
                explanation: 'Returns the fiscal quarter for any date. Q1=Jan-Mar, Q2=Apr-Jun, Q3=Jul-Sep, Q4=Oct-Dec. Used in business reporting.'
            }
        }
    },
    countdown: {
        title: 'Countdown & Events',
        calculators: {
            birthday: {
                name: 'Next Birthday',
                formula: 'Days until next occurrence',
                inputs: [
                    { id: 'birthDate', label: 'Birth Date', symbol: 'DOB', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const birth = new Date(inputs.birthDate);
                    const today = new Date();
                    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

                    if (nextBirthday < today) {
                        nextBirthday.setFullYear(today.getFullYear() + 1);
                    }

                    const diffMs = nextBirthday - today;
                    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

                    return `${days} days (${nextBirthday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })})`;
                },
                resultUnit: '',
                explanation: 'Calculates days until your next birthday. Shows both countdown and the exact date. Never forget to celebrate!'
            },
            anniversary: {
                name: 'Anniversary Calculator',
                formula: 'Years since event',
                inputs: [
                    { id: 'eventDate', label: 'Event Date', symbol: 'Event', unit: '', type: 'date' }
                ],
                calculate: (inputs) => {
                    const event = new Date(inputs.eventDate);
                    const today = new Date();
                    const years = today.getFullYear() - event.getFullYear();
                    const nextAnniversary = new Date(today.getFullYear(), event.getMonth(), event.getDate());

                    if (nextAnniversary < today) {
                        nextAnniversary.setFullYear(today.getFullYear() + 1);
                    }

                    const diffMs = nextAnniversary - today;
                    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

                    return `${years} years completed, next in ${days} days`;
                },
                resultUnit: '',
                explanation: 'Tracks anniversaries. Shows years since event and days until next occurrence. Perfect for work, wedding, or any milestone!'
            },
            retirement: {
                name: 'Days to Retirement',
                formula: 'Days until target age',
                inputs: [
                    { id: 'birthDate', label: 'Birth Date', symbol: 'DOB', unit: '', type: 'date' },
                    { id: 'retirementAge', label: 'Retirement Age', symbol: 'Age', unit: 'years', type: 'number' }
                ],
                calculate: (inputs) => {
                    const birth = new Date(inputs.birthDate);
                    const retirementDate = new Date(birth);
                    retirementDate.setFullYear(birth.getFullYear() + parseInt(inputs.retirementAge));

                    const today = new Date();
                    const diffMs = retirementDate - today;
                    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
                    const years = (days / 365.25).toFixed(1);

                    return `${days.toLocaleString()} days (${years} years) until ${retirementDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
                },
                resultUnit: '',
                explanation: 'Counts down to retirement based on target age. Shows days, years, and exact retirement date. Plan your freedom!'
            }
        }
    }
};

// ========================================
// DATE TIME CALCULATOR CLASS
// ========================================
class DateTimeCalculator {
    constructor() {
        this.currentCategory = 'age';
        this.currentCalculator = null;

        this.initializeElements();
        this.attachEventListeners();
        this.loadCategory('age');
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
        const data = dateTimeCalculators[category];

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

        const data = dateTimeCalculators[this.currentCategory];
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

            const inputType = input.type || 'text';

            group.innerHTML = `
                <label class="input-label">
                    <span class="input-symbol">${input.symbol}</span>
                    ${input.label}
                </label>
                <div class="input-wrapper">
                    <input type="${inputType}" 
                           class="datetime-input" 
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
            const element = document.getElementById(input.id);
            const value = element.value;

            if (!value) {
                allValid = false;
                return;
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

            // Display result
            this.resultValue.textContent = result;
            this.resultUnit.textContent = this.currentCalculator.resultUnit;
        } catch (error) {
            this.resultValue.textContent = 'Error';
            this.resultUnit.textContent = '';
            console.error(error);
        }
    }
}

// ========================================
// INITIALIZE DATE TIME CALCULATOR
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    window.dateTimeCalculator = new DateTimeCalculator();
});