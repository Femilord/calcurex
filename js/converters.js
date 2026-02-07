// ========================================
// UNIT CONVERTER DATA & LOGIC
// ========================================

// Conversion data with base units and multipliers
const conversionData = {
    length: {
        title: 'Length Converter',
        units: {
            meter: { name: 'Meter (m)', multiplier: 1 },
            kilometer: { name: 'Kilometer (km)', multiplier: 1000 },
            centimeter: { name: 'Centimeter (cm)', multiplier: 0.01 },
            millimeter: { name: 'Millimeter (mm)', multiplier: 0.001 },
            mile: { name: 'Mile (mi)', multiplier: 1609.344 },
            yard: { name: 'Yard (yd)', multiplier: 0.9144 },
            foot: { name: 'Foot (ft)', multiplier: 0.3048 },
            inch: { name: 'Inch (in)', multiplier: 0.0254 },
            nautical_mile: { name: 'Nautical Mile', multiplier: 1852 }
        },
        common: [
            { from: 1, fromUnit: 'meter', toUnit: 'foot' },
            { from: 1, fromUnit: 'kilometer', toUnit: 'mile' },
            { from: 1, fromUnit: 'inch', toUnit: 'centimeter' },
            { from: 1, fromUnit: 'mile', toUnit: 'kilometer' }
        ]
    },
    weight: {
        title: 'Weight/Mass Converter',
        units: {
            kilogram: { name: 'Kilogram (kg)', multiplier: 1 },
            gram: { name: 'Gram (g)', multiplier: 0.001 },
            milligram: { name: 'Milligram (mg)', multiplier: 0.000001 },
            metric_ton: { name: 'Metric Ton (t)', multiplier: 1000 },
            pound: { name: 'Pound (lb)', multiplier: 0.45359237 },
            ounce: { name: 'Ounce (oz)', multiplier: 0.028349523125 },
            ton: { name: 'Ton (US)', multiplier: 907.18474 },
            stone: { name: 'Stone (st)', multiplier: 6.35029318 }
        },
        common: [
            { from: 1, fromUnit: 'kilogram', toUnit: 'pound' },
            { from: 1, fromUnit: 'pound', toUnit: 'kilogram' },
            { from: 1, fromUnit: 'ounce', toUnit: 'gram' },
            { from: 1, fromUnit: 'metric_ton', toUnit: 'ton' }
        ]
    },
    temperature: {
        title: 'Temperature Converter',
        units: {
            celsius: { name: 'Celsius (°C)' },
            fahrenheit: { name: 'Fahrenheit (°F)' },
            kelvin: { name: 'Kelvin (K)' }
        },
        convert: function (value, from, to) {
            // Convert to Celsius first
            let celsius;
            if (from === 'celsius') celsius = value;
            else if (from === 'fahrenheit') celsius = (value - 32) * 5 / 9;
            else if (from === 'kelvin') celsius = value - 273.15;

            // Convert from Celsius to target
            if (to === 'celsius') return celsius;
            else if (to === 'fahrenheit') return celsius * 9 / 5 + 32;
            else if (to === 'kelvin') return celsius + 273.15;
        },
        common: [
            { from: 0, fromUnit: 'celsius', toUnit: 'fahrenheit' },
            { from: 100, fromUnit: 'celsius', toUnit: 'fahrenheit' },
            { from: 32, fromUnit: 'fahrenheit', toUnit: 'celsius' },
            { from: 0, fromUnit: 'kelvin', toUnit: 'celsius' }
        ]
    },
    volume: {
        title: 'Volume Converter',
        units: {
            liter: { name: 'Liter (L)', multiplier: 1 },
            milliliter: { name: 'Milliliter (mL)', multiplier: 0.001 },
            cubic_meter: { name: 'Cubic Meter (m³)', multiplier: 1000 },
            cubic_centimeter: { name: 'Cubic Centimeter (cm³)', multiplier: 0.001 },
            gallon: { name: 'Gallon (US)', multiplier: 3.785411784 },
            quart: { name: 'Quart (US)', multiplier: 0.946352946 },
            pint: { name: 'Pint (US)', multiplier: 0.473176473 },
            cup: { name: 'Cup (US)', multiplier: 0.2365882365 },
            fluid_ounce: { name: 'Fluid Ounce (US)', multiplier: 0.0295735296 },
            tablespoon: { name: 'Tablespoon (US)', multiplier: 0.01478676478 },
            teaspoon: { name: 'Teaspoon (US)', multiplier: 0.00492892159 }
        },
        common: [
            { from: 1, fromUnit: 'liter', toUnit: 'gallon' },
            { from: 1, fromUnit: 'gallon', toUnit: 'liter' },
            { from: 1, fromUnit: 'cup', toUnit: 'milliliter' },
            { from: 1, fromUnit: 'tablespoon', toUnit: 'milliliter' }
        ]
    },
    area: {
        title: 'Area Converter',
        units: {
            square_meter: { name: 'Square Meter (m²)', multiplier: 1 },
            square_kilometer: { name: 'Square Kilometer (km²)', multiplier: 1000000 },
            square_centimeter: { name: 'Square Centimeter (cm²)', multiplier: 0.0001 },
            hectare: { name: 'Hectare (ha)', multiplier: 10000 },
            acre: { name: 'Acre', multiplier: 4046.8564224 },
            square_mile: { name: 'Square Mile (mi²)', multiplier: 2589988.110336 },
            square_yard: { name: 'Square Yard (yd²)', multiplier: 0.83612736 },
            square_foot: { name: 'Square Foot (ft²)', multiplier: 0.09290304 },
            square_inch: { name: 'Square Inch (in²)', multiplier: 0.00064516 }
        },
        common: [
            { from: 1, fromUnit: 'square_meter', toUnit: 'square_foot' },
            { from: 1, fromUnit: 'acre', toUnit: 'square_meter' },
            { from: 1, fromUnit: 'hectare', toUnit: 'acre' },
            { from: 1, fromUnit: 'square_kilometer', toUnit: 'square_mile' }
        ]
    },
    speed: {
        title: 'Speed Converter',
        units: {
            meter_per_second: { name: 'Meter/Second (m/s)', multiplier: 1 },
            kilometer_per_hour: { name: 'Kilometer/Hour (km/h)', multiplier: 0.277777778 },
            mile_per_hour: { name: 'Mile/Hour (mph)', multiplier: 0.44704 },
            foot_per_second: { name: 'Foot/Second (ft/s)', multiplier: 0.3048 },
            knot: { name: 'Knot', multiplier: 0.514444444 }
        },
        common: [
            { from: 100, fromUnit: 'kilometer_per_hour', toUnit: 'mile_per_hour' },
            { from: 60, fromUnit: 'mile_per_hour', toUnit: 'kilometer_per_hour' },
            { from: 1, fromUnit: 'meter_per_second', toUnit: 'kilometer_per_hour' },
            { from: 1, fromUnit: 'knot', toUnit: 'kilometer_per_hour' }
        ]
    },
    time: {
        title: 'Time Converter',
        units: {
            second: { name: 'Second (s)', multiplier: 1 },
            minute: { name: 'Minute (min)', multiplier: 60 },
            hour: { name: 'Hour (hr)', multiplier: 3600 },
            day: { name: 'Day', multiplier: 86400 },
            week: { name: 'Week', multiplier: 604800 },
            month: { name: 'Month (30 days)', multiplier: 2592000 },
            year: { name: 'Year (365 days)', multiplier: 31536000 },
            millisecond: { name: 'Millisecond (ms)', multiplier: 0.001 }
        },
        common: [
            { from: 1, fromUnit: 'hour', toUnit: 'minute' },
            { from: 1, fromUnit: 'day', toUnit: 'hour' },
            { from: 1, fromUnit: 'week', toUnit: 'day' },
            { from: 1, fromUnit: 'year', toUnit: 'day' }
        ]
    },
    pressure: {
        title: 'Pressure Converter',
        units: {
            pascal: { name: 'Pascal (Pa)', multiplier: 1 },
            kilopascal: { name: 'Kilopascal (kPa)', multiplier: 1000 },
            bar: { name: 'Bar', multiplier: 100000 },
            psi: { name: 'PSI (lb/in²)', multiplier: 6894.757293168 },
            atmosphere: { name: 'Atmosphere (atm)', multiplier: 101325 },
            torr: { name: 'Torr', multiplier: 133.322368 }
        },
        common: [
            { from: 1, fromUnit: 'bar', toUnit: 'psi' },
            { from: 1, fromUnit: 'atmosphere', toUnit: 'psi' },
            { from: 1, fromUnit: 'kilopascal', toUnit: 'psi' },
            { from: 100, fromUnit: 'kilopascal', toUnit: 'bar' }
        ]
    },
    energy: {
        title: 'Energy Converter',
        units: {
            joule: { name: 'Joule (J)', multiplier: 1 },
            kilojoule: { name: 'Kilojoule (kJ)', multiplier: 1000 },
            calorie: { name: 'Calorie (cal)', multiplier: 4.184 },
            kilocalorie: { name: 'Kilocalorie (kcal)', multiplier: 4184 },
            watt_hour: { name: 'Watt-Hour (Wh)', multiplier: 3600 },
            kilowatt_hour: { name: 'Kilowatt-Hour (kWh)', multiplier: 3600000 },
            electronvolt: { name: 'Electronvolt (eV)', multiplier: 1.602176634e-19 },
            btu: { name: 'British Thermal Unit (BTU)', multiplier: 1055.05585 }
        },
        common: [
            { from: 1, fromUnit: 'kilocalorie', toUnit: 'kilojoule' },
            { from: 1, fromUnit: 'kilowatt_hour', toUnit: 'joule' },
            { from: 1, fromUnit: 'btu', toUnit: 'joule' },
            { from: 1000, fromUnit: 'calorie', toUnit: 'kilocalorie' }
        ]
    },
    power: {
        title: 'Power Converter',
        units: {
            watt: { name: 'Watt (W)', multiplier: 1 },
            kilowatt: { name: 'Kilowatt (kW)', multiplier: 1000 },
            horsepower: { name: 'Horsepower (hp)', multiplier: 745.699872 },
            btu_per_hour: { name: 'BTU/Hour', multiplier: 0.29307107 }
        },
        common: [
            { from: 1, fromUnit: 'horsepower', toUnit: 'watt' },
            { from: 1, fromUnit: 'kilowatt', toUnit: 'horsepower' },
            { from: 100, fromUnit: 'watt', toUnit: 'horsepower' },
            { from: 1000, fromUnit: 'btu_per_hour', toUnit: 'watt' }
        ]
    },
    data: {
        title: 'Data Storage Converter',
        units: {
            byte: { name: 'Byte (B)', multiplier: 1 },
            kilobyte: { name: 'Kilobyte (KB)', multiplier: 1024 },
            megabyte: { name: 'Megabyte (MB)', multiplier: 1048576 },
            gigabyte: { name: 'Gigabyte (GB)', multiplier: 1073741824 },
            terabyte: { name: 'Terabyte (TB)', multiplier: 1099511627776 },
            petabyte: { name: 'Petabyte (PB)', multiplier: 1125899906842624 },
            bit: { name: 'Bit (b)', multiplier: 0.125 },
            kilobit: { name: 'Kilobit (Kb)', multiplier: 128 },
            megabit: { name: 'Megabit (Mb)', multiplier: 131072 },
            gigabit: { name: 'Gigabit (Gb)', multiplier: 134217728 }
        },
        common: [
            { from: 1, fromUnit: 'gigabyte', toUnit: 'megabyte' },
            { from: 1, fromUnit: 'megabyte', toUnit: 'kilobyte' },
            { from: 1, fromUnit: 'terabyte', toUnit: 'gigabyte' },
            { from: 1, fromUnit: 'gigabit', toUnit: 'megabit' }
        ]
    },
    angle: {
        title: 'Angle Converter',
        units: {
            degree: { name: 'Degree (°)', multiplier: 1 },
            radian: { name: 'Radian (rad)', multiplier: 57.2957795131 },
            gradian: { name: 'Gradian (grad)', multiplier: 0.9 },
            turn: { name: 'Turn', multiplier: 360 }
        },
        common: [
            { from: 180, fromUnit: 'degree', toUnit: 'radian' },
            { from: 90, fromUnit: 'degree', toUnit: 'radian' },
            { from: 1, fromUnit: 'radian', toUnit: 'degree' },
            { from: 1, fromUnit: 'turn', toUnit: 'degree' }
        ]
    }
};

// ========================================
// UNIT CONVERTER CLASS
// ========================================
class UnitConverter {
    constructor() {
        this.currentCategory = 'length';
        this.fromValue = 1;
        this.fromUnit = null;
        this.toUnit = null;

        this.initializeElements();
        this.attachEventListeners();
        this.loadCategory('length');
    }

    initializeElements() {
        this.categoryBtns = document.querySelectorAll('.category-btn');
        this.categoryTitle = document.getElementById('categoryTitle');
        this.fromValueInput = document.getElementById('fromValue');
        this.toValueInput = document.getElementById('toValue');
        this.fromUnitSelect = document.getElementById('fromUnit');
        this.toUnitSelect = document.getElementById('toUnit');
        this.swapBtn = document.getElementById('swapBtn');
        this.formulaText = document.getElementById('formulaText');
        this.conversionsGrid = document.getElementById('conversionsGrid');
    }

    attachEventListeners() {
        // Category buttons
        this.categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.loadCategory(category);
            });
        });

        // Input value
        this.fromValueInput.addEventListener('input', () => {
            this.convert();
        });

        // Unit selects
        this.fromUnitSelect.addEventListener('change', () => {
            this.convert();
        });

        this.toUnitSelect.addEventListener('change', () => {
            this.convert();
        });

        // Swap button
        this.swapBtn.addEventListener('click', () => {
            this.swapUnits();
        });
    }

    loadCategory(category) {
        this.currentCategory = category;
        const data = conversionData[category];

        // Update active button
        this.categoryBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // Update title
        this.categoryTitle.textContent = data.title;

        // Populate unit selects
        this.populateUnitSelects(data.units);

        // Load common conversions
        this.loadCommonConversions(data.common);

        // Perform initial conversion
        this.convert();
    }

    populateUnitSelects(units) {
        this.fromUnitSelect.innerHTML = '';
        this.toUnitSelect.innerHTML = '';

        const unitKeys = Object.keys(units);

        unitKeys.forEach((key, index) => {
            const option1 = document.createElement('option');
            option1.value = key;
            option1.textContent = units[key].name;
            this.fromUnitSelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = key;
            option2.textContent = units[key].name;
            this.toUnitSelect.appendChild(option2);

            // Set default units
            if (index === 0) this.fromUnit = key;
            if (index === 1) this.toUnit = key;
        });

        // Set second unit as default for 'to' select
        if (unitKeys.length > 1) {
            this.toUnitSelect.selectedIndex = 1;
        }
    }

    convert() {
        const value = parseFloat(this.fromValueInput.value) || 0;
        const fromUnit = this.fromUnitSelect.value;
        const toUnit = this.toUnitSelect.value;

        const data = conversionData[this.currentCategory];

        let result;

        // Special handling for temperature
        if (this.currentCategory === 'temperature') {
            result = data.convert(value, fromUnit, toUnit);
        } else {
            // Standard multiplier-based conversion
            const fromMultiplier = data.units[fromUnit].multiplier;
            const toMultiplier = data.units[toUnit].multiplier;
            result = value * fromMultiplier / toMultiplier;
        }

        // Update result
        this.toValueInput.value = this.formatResult(result);

        // Update formula
        this.updateFormula(value, fromUnit, toUnit, result);
    }

    formatResult(value) {
        if (Math.abs(value) < 0.000001 && value !== 0) {
            return value.toExponential(6);
        } else if (Math.abs(value) > 1000000) {
            return value.toExponential(6);
        } else {
            return parseFloat(value.toFixed(8)).toString();
        }
    }

    updateFormula(fromValue, fromUnit, toUnit, result) {
        const data = conversionData[this.currentCategory];
        const fromName = data.units[fromUnit].name.split(' ')[0];
        const toName = data.units[toUnit].name.split(' ')[0];

        this.formulaText.textContent = `${fromValue} ${fromName} = ${this.formatResult(result)} ${toName}`;
    }

    swapUnits() {
        const tempUnit = this.fromUnitSelect.value;
        const tempValue = this.fromValueInput.value;

        this.fromUnitSelect.value = this.toUnitSelect.value;
        this.toUnitSelect.value = tempUnit;
        this.fromValueInput.value = this.toValueInput.value;

        this.convert();
    }

    loadCommonConversions(commonList) {
        this.conversionsGrid.innerHTML = '';

        const data = conversionData[this.currentCategory];

        commonList.forEach(item => {
            const { from, fromUnit, toUnit } = item;

            let result;
            if (this.currentCategory === 'temperature') {
                result = data.convert(from, fromUnit, toUnit);
            } else {
                const fromMultiplier = data.units[fromUnit].multiplier;
                const toMultiplier = data.units[toUnit].multiplier;
                result = from * fromMultiplier / toMultiplier;
            }

            const fromName = data.units[fromUnit].name;
            const toName = data.units[toUnit].name;

            const itemEl = document.createElement('div');
            itemEl.className = 'conversion-item';
            itemEl.innerHTML = `
                <span class="conversion-from">${from} ${fromName}</span>
                <span class="conversion-equals">=</span>
                <span class="conversion-to">${this.formatResult(result)} ${toName}</span>
            `;

            // Click to load this conversion
            itemEl.addEventListener('click', () => {
                this.fromUnitSelect.value = fromUnit;
                this.toUnitSelect.value = toUnit;
                this.fromValueInput.value = from;
                this.convert();
            });

            this.conversionsGrid.appendChild(itemEl);
        });
    }
}

// ========================================
// INITIALIZE CONVERTER
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    window.unitConverter = new UnitConverter();
});