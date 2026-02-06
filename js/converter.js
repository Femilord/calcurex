// ========================================
// CONVERTER.JS - Unit Conversion Calculator
// ========================================

const ConverterApp = {
    units: {
        length: {
            'meter': 1,
            'kilometer': 0.001,
            'centimeter': 100,
            'millimeter': 1000,
            'mile': 0.000621371,
            'yard': 1.09361,
            'foot': 3.28084,
            'inch': 39.3701,
            'nautical mile': 0.000539957
        },
        weight: {
            'kilogram': 1,
            'gram': 1000,
            'milligram': 1000000,
            'pound': 2.20462,
            'ounce': 35.274,
            'metric ton': 0.001,
            'stone': 0.157473,
            'carat': 5000
        },
        temperature: {
            'celsius': 'special',
            'fahrenheit': 'special',
            'kelvin': 'special'
        },
        area: {
            'square meter': 1,
            'square kilometer': 0.000001,
            'square centimeter': 10000,
            'square mile': 3.861e-7,
            'square yard': 1.19599,
            'square foot': 10.7639,
            'square inch': 1550,
            'acre': 0.000247105,
            'hectare': 0.0001
        },
        volume: {
            'liter': 1,
            'milliliter': 1000,
            'cubic meter': 0.001,
            'cubic centimeter': 1000,
            'gallon': 0.264172,
            'quart': 1.05669,
            'pint': 2.11338,
            'cup': 4.22675,
            'fluid ounce': 33.814
        },
        speed: {
            'meters per second': 1,
            'kilometers per hour': 3.6,
            'miles per hour': 2.23694,
            'feet per second': 3.28084,
            'knot': 1.94384
        },
        time: {
            'second': 1,
            'minute': 0.0166667,
            'hour': 0.000277778,
            'day': 0.0000115741,
            'week': 0.00000165344,
            'month': 3.80517e-7,
            'year': 3.17098e-8
        },
        data: {
            'byte': 1,
            'kilobyte': 0.001,
            'megabyte': 0.000001,
            'gigabyte': 1e-9,
            'terabyte': 1e-12,
            'bit': 8,
            'kilobit': 0.008,
            'megabit': 0.000008
        },
        energy: {
            'joule': 1,
            'kilojoule': 0.001,
            'calorie': 0.239006,
            'kilocalorie': 0.000239006,
            'watt-hour': 0.000277778,
            'kilowatt-hour': 2.77778e-7,
            'BTU': 0.000947817
        },
        pressure: {
            'pascal': 1,
            'kilopascal': 0.001,
            'bar': 0.00001,
            'atmosphere': 0.00000986923,
            'psi': 0.000145038,
            'torr': 0.00750062,
            'mmHg': 0.00750062
        }
    },

    init() {
        console.log('ConverterApp initializing...');
        
        // Wait a bit to ensure DOM is fully loaded
        setTimeout(() => {
            const typeSelect = document.getElementById('conv-type');
            const fromUnit = document.getElementById('conv-from-unit');
            const toUnit = document.getElementById('conv-to-unit');
            const fromValue = document.getElementById('conv-from-value');
            
            console.log('Elements found:', {
                typeSelect: !!typeSelect,
                fromUnit: !!fromUnit,
                toUnit: !!toUnit,
                fromValue: !!fromValue
            });
            
            if (typeSelect && fromUnit && toUnit && fromValue) {
                this.changeType();
                this.setupInputListeners();
                console.log('ConverterApp initialized successfully');
            } else {
                console.error('Required elements not found!');
            }
        }, 100);
    },

    setupInputListeners() {
        const fromInput = document.getElementById('conv-from-value');
        if (fromInput) {
            // Remove any existing listeners
            fromInput.removeEventListener('input', this.handleInput);
            fromInput.removeEventListener('keypress', this.handleKeypress);
            
            // Add new listeners
            fromInput.addEventListener('input', () => this.convert());
            fromInput.addEventListener('keypress', (e) => {
                const char = String.fromCharCode(e.which);
                if (!/[\d.e\-]/.test(char)) {
                    e.preventDefault();
                }
            });
            
            console.log('Input listeners setup complete');
        }
    },

    changeType() {
        const type = document.getElementById('conv-type');
        const fromUnit = document.getElementById('conv-from-unit');
        const toUnit = document.getElementById('conv-to-unit');
        const fromValue = document.getElementById('conv-from-value');
        const toValue = document.getElementById('conv-to-value');

        if (!type || !fromUnit || !toUnit) {
            console.error('Elements not found in changeType');
            return;
        }

        const selectedType = type.value;
        console.log('Changing type to:', selectedType);

        // Clear existing options
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';

        // Get units for the selected type
        const unitsForType = this.units[selectedType];
        
        if (!unitsForType) {
            console.error('No units found for type:', selectedType);
            return;
        }

        // Populate dropdowns
        Object.keys(unitsForType).forEach((unit, index) => {
            const option1 = document.createElement('option');
            option1.value = unit;
            option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            fromUnit.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = unit;
            option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            toUnit.appendChild(option2);
        });

        // Set different default selections for from and to
        if (toUnit.options.length > 1) {
            toUnit.selectedIndex = 1;
        }

        // Clear input values
        if (fromValue) fromValue.value = '';
        if (toValue) toValue.value = '';

        console.log('Type changed. From units:', fromUnit.options.length, 'To units:', toUnit.options.length);
    },

    convert() {
        const type = document.getElementById('conv-type');
        const fromUnit = document.getElementById('conv-from-unit');
        const toUnit = document.getElementById('conv-to-unit');
        const fromValueInput = document.getElementById('conv-from-value');
        const toValueInput = document.getElementById('conv-to-value');

        if (!type || !fromUnit || !toUnit || !fromValueInput || !toValueInput) {
            console.error('Elements not found in convert');
            return;
        }

        const fromValue = parseFloat(fromValueInput.value);

        if (isNaN(fromValue) || fromValueInput.value === '') {
            toValueInput.value = '';
            return;
        }

        const selectedType = type.value;
        const fromUnitValue = fromUnit.value;
        const toUnitValue = toUnit.value;

        let result;

        if (selectedType === 'temperature') {
            result = this.convertTemperature(fromValue, fromUnitValue, toUnitValue);
        } else {
            const fromFactor = this.units[selectedType][fromUnitValue];
            const toFactor = this.units[selectedType][toUnitValue];
            
            if (fromFactor === undefined || toFactor === undefined) {
                console.error('Conversion factors not found');
                return;
            }
            
            result = fromValue / fromFactor * toFactor;
        }

        // Format the result
        toValueInput.value = result.toFixed(8).replace(/\.?0+$/, '');
        
        console.log('Conversion:', fromValue, fromUnitValue, '→', result, toUnitValue);
    },

    convertTemperature(value, from, to) {
        let celsius;

        // Convert to Celsius first
        if (from === 'celsius') {
            celsius = value;
        } else if (from === 'fahrenheit') {
            celsius = (value - 32) * 5 / 9;
        } else if (from === 'kelvin') {
            celsius = value - 273.15;
        }

        // Convert from Celsius to target unit
        if (to === 'celsius') {
            return celsius;
        } else if (to === 'fahrenheit') {
            return celsius * 9 / 5 + 32;
        } else if (to === 'kelvin') {
            return celsius + 273.15;
        }

        return celsius;
    },

    swap() {
        const fromUnit = document.getElementById('conv-from-unit');
        const toUnit = document.getElementById('conv-to-unit');
        const fromValue = document.getElementById('conv-from-value');
        const toValue = document.getElementById('conv-to-value');

        if (!fromUnit || !toUnit || !fromValue || !toValue) {
            console.error('Elements not found in swap');
            return;
        }

        // Swap units
        const tempUnit = fromUnit.value;
        fromUnit.value = toUnit.value;
        toUnit.value = tempUnit;

        // Swap values
        const tempValue = fromValue.value;
        fromValue.value = toValue.value;
        toValue.value = tempValue;

        // Recalculate
        this.convert();
        
        console.log('Units swapped');
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Content Loaded');
        ConverterApp.init();
    });
} else {
    // DOM already loaded
    console.log('DOM already loaded');
    ConverterApp.init();
}