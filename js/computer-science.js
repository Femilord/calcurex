// ========================================
// COMPUTER SCIENCE CALCULATORS
// ========================================

const csCalculators = {
    'number-systems': {
        title: 'Number System Conversions',
        calculators: {
            decimalToBinary: {
                name: 'Decimal to Binary',
                formula: 'Divide by 2, record remainders',
                inputs: [
                    { id: 'decimal', label: 'Decimal Number', symbol: 'Dec', unit: '' }
                ],
                calculate: (inputs) => parseInt(inputs.decimal).toString(2),
                resultUnit: 'Binary',
                explanation: 'Converts decimal (base 10) to binary (base 2). Repeatedly divide by 2 and record remainders from bottom to top.'
            },
            binaryToDecimal: {
                name: 'Binary to Decimal',
                formula: 'Sum of (digit × 2^position)',
                inputs: [
                    { id: 'binary', label: 'Binary Number', symbol: 'Bin', unit: '' }
                ],
                calculate: (inputs) => parseInt(inputs.binary, 2),
                resultUnit: 'Decimal',
                explanation: 'Converts binary (base 2) to decimal (base 10). Each digit represents a power of 2.'
            },
            decimalToHex: {
                name: 'Decimal to Hexadecimal',
                formula: 'Divide by 16, use 0-9,A-F',
                inputs: [
                    { id: 'decimal', label: 'Decimal Number', symbol: 'Dec', unit: '' }
                ],
                calculate: (inputs) => parseInt(inputs.decimal).toString(16).toUpperCase(),
                resultUnit: 'Hexadecimal',
                explanation: 'Converts decimal to hex (base 16). Uses digits 0-9 and letters A-F for values 10-15.'
            },
            hexToDecimal: {
                name: 'Hexadecimal to Decimal',
                formula: 'Sum of (digit × 16^position)',
                inputs: [
                    { id: 'hex', label: 'Hex Number (0-9, A-F)', symbol: 'Hex', unit: '' }
                ],
                calculate: (inputs) => parseInt(inputs.hex, 16),
                resultUnit: 'Decimal',
                explanation: 'Converts hexadecimal (base 16) to decimal. A=10, B=11, C=12, D=13, E=14, F=15.'
            },
            decimalToOctal: {
                name: 'Decimal to Octal',
                formula: 'Divide by 8, record remainders',
                inputs: [
                    { id: 'decimal', label: 'Decimal Number', symbol: 'Dec', unit: '' }
                ],
                calculate: (inputs) => parseInt(inputs.decimal).toString(8),
                resultUnit: 'Octal',
                explanation: 'Converts decimal to octal (base 8). Uses digits 0-7 only.'
            },
            binaryToHex: {
                name: 'Binary to Hexadecimal',
                formula: 'Group 4 bits = 1 hex digit',
                inputs: [
                    { id: 'binary', label: 'Binary Number', symbol: 'Bin', unit: '' }
                ],
                calculate: (inputs) => parseInt(inputs.binary, 2).toString(16).toUpperCase(),
                resultUnit: 'Hexadecimal',
                explanation: 'Converts binary to hex. Group binary digits in fours from right, each group = one hex digit.'
            }
        }
    },
    'data-storage': {
        title: 'Data Storage & Memory',
        calculators: {
            bitsToBytes: {
                name: 'Bits to Bytes',
                formula: 'Bytes = Bits / 8',
                inputs: [
                    { id: 'bits', label: 'Bits', symbol: 'b', unit: 'bits' }
                ],
                calculate: (inputs) => inputs.bits / 8,
                resultUnit: 'Bytes',
                explanation: '1 byte = 8 bits. Bits are the smallest unit of data (0 or 1), bytes group 8 bits together.'
            },
            bytesToKB: {
                name: 'Bytes to Kilobytes',
                formula: 'KB = Bytes / 1024',
                inputs: [
                    { id: 'bytes', label: 'Bytes', symbol: 'B', unit: 'bytes' }
                ],
                calculate: (inputs) => inputs.bytes / 1024,
                resultUnit: 'KB',
                explanation: '1 KB = 1024 bytes (binary: 2^10). Computing uses base-2, not base-10.'
            },
            kbToMB: {
                name: 'Kilobytes to Megabytes',
                formula: 'MB = KB / 1024',
                inputs: [
                    { id: 'kb', label: 'Kilobytes', symbol: 'KB', unit: 'KB' }
                ],
                calculate: (inputs) => inputs.kb / 1024,
                resultUnit: 'MB',
                explanation: '1 MB = 1024 KB. Each step up multiplies by 1024 (2^10).'
            },
            mbToGB: {
                name: 'Megabytes to Gigabytes',
                formula: 'GB = MB / 1024',
                inputs: [
                    { id: 'mb', label: 'Megabytes', symbol: 'MB', unit: 'MB' }
                ],
                calculate: (inputs) => inputs.mb / 1024,
                resultUnit: 'GB',
                explanation: '1 GB = 1024 MB. Common for RAM and storage capacities.'
            },
            downloadTime: {
                name: 'Download Time Calculator',
                formula: 'Time = FileSize / Speed',
                inputs: [
                    { id: 'fileSize', label: 'File Size', symbol: 'Size', unit: 'MB' },
                    { id: 'speed', label: 'Speed', symbol: 'Mbps', unit: 'Mbps' }
                ],
                calculate: (inputs) => (inputs.fileSize * 8) / inputs.speed,
                resultUnit: 'seconds',
                explanation: 'Calculates download time. Converts MB to Mb (×8) then divides by speed. 1 MB = 8 Mb.'
            },
            addressableMemory: {
                name: 'Addressable Memory (n-bit)',
                formula: '2^n bytes',
                inputs: [
                    { id: 'bits', label: 'Address Bits', symbol: 'n', unit: 'bits' }
                ],
                calculate: (inputs) => Math.pow(2, inputs.bits) / 1024 / 1024,
                resultUnit: 'MB',
                explanation: 'With n address bits, you can address 2^n unique memory locations. Result shown in MB.'
            }
        }
    },
    algorithms: {
        title: 'Algorithm Complexity',
        calculators: {
            bigOConstant: {
                name: 'O(1) - Constant Time',
                formula: 'Operations = 1 (regardless of n)',
                inputs: [
                    { id: 'n', label: 'Input Size', symbol: 'n', unit: 'items' }
                ],
                calculate: (inputs) => 1,
                resultUnit: 'operations',
                explanation: 'Constant time: operations don\'t increase with input size. Best case scenario. Examples: array access, hash table lookup.'
            },
            bigOLinear: {
                name: 'O(n) - Linear Time',
                formula: 'Operations = n',
                inputs: [
                    { id: 'n', label: 'Input Size', symbol: 'n', unit: 'items' }
                ],
                calculate: (inputs) => inputs.n,
                resultUnit: 'operations',
                explanation: 'Linear time: operations grow directly with input. Examples: linear search, simple loops.'
            },
            bigOQuadratic: {
                name: 'O(n²) - Quadratic Time',
                formula: 'Operations = n²',
                inputs: [
                    { id: 'n', label: 'Input Size', symbol: 'n', unit: 'items' }
                ],
                calculate: (inputs) => Math.pow(inputs.n, 2),
                resultUnit: 'operations',
                explanation: 'Quadratic time: operations grow with square of input. Examples: bubble sort, nested loops.'
            },
            bigOLogarithmic: {
                name: 'O(log n) - Logarithmic Time',
                formula: 'Operations = log₂(n)',
                inputs: [
                    { id: 'n', label: 'Input Size', symbol: 'n', unit: 'items' }
                ],
                calculate: (inputs) => Math.log2(inputs.n),
                resultUnit: 'operations',
                explanation: 'Logarithmic time: halves problem size each step. Very efficient. Examples: binary search, balanced tree operations.'
            },
            bigONLogN: {
                name: 'O(n log n) - Linearithmic',
                formula: 'Operations = n × log₂(n)',
                inputs: [
                    { id: 'n', label: 'Input Size', symbol: 'n', unit: 'items' }
                ],
                calculate: (inputs) => inputs.n * Math.log2(inputs.n),
                resultUnit: 'operations',
                explanation: 'Linearithmic time: efficient sorting complexity. Examples: merge sort, quick sort (average case), heap sort.'
            },
            sortingComparison: {
                name: 'Sorting Comparisons (worst case)',
                formula: 'Comparisons ≈ n²/2',
                inputs: [
                    { id: 'items', label: 'Items to Sort', symbol: 'n', unit: 'items' }
                ],
                calculate: (inputs) => Math.pow(inputs.items, 2) / 2,
                resultUnit: 'comparisons',
                explanation: 'Worst-case comparisons for simple sorting (bubble, selection). Better algorithms use O(n log n).'
            }
        }
    },
    networking: {
        title: 'Networking & IP',
        calculators: {
            subnetHosts: {
                name: 'Usable Hosts in Subnet',
                formula: 'Hosts = 2^(32-prefix) - 2',
                inputs: [
                    { id: 'prefix', label: 'Subnet Prefix', symbol: 'CIDR', unit: '/bits' }
                ],
                calculate: (inputs) => Math.pow(2, 32 - inputs.prefix) - 2,
                resultUnit: 'hosts',
                explanation: 'Calculates usable hosts in a subnet. Subtract 2 for network and broadcast addresses. /24 = 254 hosts.'
            },
            subnetMask: {
                name: 'Subnet Mask from CIDR',
                formula: 'Convert prefix to dotted decimal',
                inputs: [
                    { id: 'cidr', label: 'CIDR Prefix', symbol: '/n', unit: '' }
                ],
                calculate: (inputs) => {
                    const mask = -1 << (32 - inputs.cidr);
                    return ((mask >>> 24) & 0xFF) + '.' +
                        ((mask >>> 16) & 0xFF) + '.' +
                        ((mask >>> 8) & 0xFF) + '.' +
                        (mask & 0xFF);
                },
                resultUnit: '',
                explanation: 'Converts CIDR notation (/24) to dotted decimal (255.255.255.0). Used for subnet configuration.'
            },
            bandwidth: {
                name: 'Bandwidth (bits per second)',
                formula: 'Bandwidth = DataSize / Time',
                inputs: [
                    { id: 'dataSize', label: 'Data Size', symbol: 'Data', unit: 'MB' },
                    { id: 'time', label: 'Time', symbol: 'Time', unit: 's' }
                ],
                calculate: (inputs) => (inputs.dataSize * 8) / inputs.time,
                resultUnit: 'Mbps',
                explanation: 'Calculates bandwidth in Mbps. Converts MB to Mb (×8) and divides by time in seconds.'
            },
            latency: {
                name: 'Network Latency (RTT)',
                formula: 'RTT = 2 × (Distance / Speed)',
                inputs: [
                    { id: 'distance', label: 'Distance', symbol: 'D', unit: 'km' },
                    { id: 'speed', label: 'Signal Speed', symbol: 'v', unit: 'km/s' }
                ],
                calculate: (inputs) => (2 * inputs.distance / inputs.speed) * 1000,
                resultUnit: 'ms',
                explanation: 'Round-Trip Time: time for signal to travel there and back. Light in fiber ≈ 200,000 km/s.'
            }
        }
    },
    cryptography: {
        title: 'Cryptography & Security',
        calculators: {
            passwordEntropy: {
                name: 'Password Entropy (bits)',
                formula: 'Entropy = Length × log₂(CharSetSize)',
                inputs: [
                    { id: 'length', label: 'Password Length', symbol: 'L', unit: 'chars' },
                    { id: 'charset', label: 'Character Set Size', symbol: 'N', unit: 'chars' }
                ],
                calculate: (inputs) => inputs.length * Math.log2(inputs.charset),
                resultUnit: 'bits',
                explanation: 'Measures password strength. 26=lowercase, 52=+uppercase, 62=+digits, 94=+symbols. 80+ bits = strong.'
            },
            bruteForceTime: {
                name: 'Brute Force Attack Time',
                formula: 'Time = (CharSet^Length) / (Attempts/sec)',
                inputs: [
                    { id: 'charset', label: 'Character Set', symbol: 'N', unit: 'chars' },
                    { id: 'length', label: 'Password Length', symbol: 'L', unit: 'chars' },
                    { id: 'speed', label: 'Attempts/Second', symbol: 'Rate', unit: '/s' }
                ],
                calculate: (inputs) => Math.pow(inputs.charset, inputs.length) / inputs.speed / 86400 / 365,
                resultUnit: 'years',
                explanation: 'Time to try all combinations. Modern GPUs: billions/sec. Longer passwords = exponentially longer.'
            },
            hashCollisions: {
                name: 'Hash Collision Probability',
                formula: 'Birthday paradox: ~√(2×HashSpace)',
                inputs: [
                    { id: 'bits', label: 'Hash Bits', symbol: 'n', unit: 'bits' }
                ],
                calculate: (inputs) => Math.sqrt(2 * Math.pow(2, inputs.bits)),
                resultUnit: 'hashes',
                explanation: '50% collision chance after ~√(hash space) attempts. SHA-256 (256 bits) = 2^128 attempts needed.'
            }
        }
    },
    bitwise: {
        title: 'Bitwise Operations',
        calculators: {
            bitwiseAND: {
                name: 'Bitwise AND',
                formula: 'Result = A & B',
                inputs: [
                    { id: 'a', label: 'Number A', symbol: 'A', unit: '' },
                    { id: 'b', label: 'Number B', symbol: 'B', unit: '' }
                ],
                calculate: (inputs) => inputs.a & inputs.b,
                resultUnit: 'decimal',
                explanation: 'AND: both bits must be 1 to result in 1. Used for masking bits. Binary: 1010 & 1100 = 1000.'
            },
            bitwiseOR: {
                name: 'Bitwise OR',
                formula: 'Result = A | B',
                inputs: [
                    { id: 'a', label: 'Number A', symbol: 'A', unit: '' },
                    { id: 'b', label: 'Number B', symbol: 'B', unit: '' }
                ],
                calculate: (inputs) => inputs.a | inputs.b,
                resultUnit: 'decimal',
                explanation: 'OR: either bit can be 1 to result in 1. Used for setting bits. Binary: 1010 | 1100 = 1110.'
            },
            bitwiseXOR: {
                name: 'Bitwise XOR',
                formula: 'Result = A ^ B',
                inputs: [
                    { id: 'a', label: 'Number A', symbol: 'A', unit: '' },
                    { id: 'b', label: 'Number B', symbol: 'B', unit: '' }
                ],
                calculate: (inputs) => inputs.a ^ inputs.b,
                resultUnit: 'decimal',
                explanation: 'XOR: bits must be different to result in 1. Used for toggling, encryption. Binary: 1010 ^ 1100 = 0110.'
            },
            leftShift: {
                name: 'Left Shift (×2^n)',
                formula: 'Result = Value << n',
                inputs: [
                    { id: 'value', label: 'Value', symbol: 'V', unit: '' },
                    { id: 'positions', label: 'Positions', symbol: 'n', unit: 'bits' }
                ],
                calculate: (inputs) => inputs.value << inputs.positions,
                resultUnit: 'decimal',
                explanation: 'Left shift multiplies by 2^n. Each shift left = ×2. Example: 5 << 2 = 20 (5×4).'
            },
            rightShift: {
                name: 'Right Shift (÷2^n)',
                formula: 'Result = Value >> n',
                inputs: [
                    { id: 'value', label: 'Value', symbol: 'V', unit: '' },
                    { id: 'positions', label: 'Positions', symbol: 'n', unit: 'bits' }
                ],
                calculate: (inputs) => inputs.value >> inputs.positions,
                resultUnit: 'decimal',
                explanation: 'Right shift divides by 2^n (integer division). Each shift right = ÷2. Example: 20 >> 2 = 5 (20÷4).'
            }
        }
    },
    graphics: {
        title: 'Graphics & Display',
        calculators: {
            pixelCount: {
                name: 'Total Pixels',
                formula: 'Pixels = Width × Height',
                inputs: [
                    { id: 'width', label: 'Width', symbol: 'W', unit: 'px' },
                    { id: 'height', label: 'Height', symbol: 'H', unit: 'px' }
                ],
                calculate: (inputs) => inputs.width * inputs.height,
                resultUnit: 'pixels',
                explanation: 'Total pixels in display or image. 1920×1080 = 2,073,600 pixels (Full HD).'
            },
            aspectRatio: {
                name: 'Aspect Ratio',
                formula: 'Ratio = Width / Height',
                inputs: [
                    { id: 'width', label: 'Width', symbol: 'W', unit: 'px' },
                    { id: 'height', label: 'Height', symbol: 'H', unit: 'px' }
                ],
                calculate: (inputs) => inputs.width / inputs.height,
                resultUnit: ':1',
                explanation: 'Width-to-height ratio. 1920/1080 = 1.778 (16:9). 1920/1200 = 1.6 (16:10).'
            },
            imageSize: {
                name: 'Image File Size (uncompressed)',
                formula: 'Size = Width × Height × ColorDepth',
                inputs: [
                    { id: 'width', label: 'Width', symbol: 'W', unit: 'px' },
                    { id: 'height', label: 'Height', symbol: 'H', unit: 'px' },
                    { id: 'depth', label: 'Bits per Pixel', symbol: 'BPP', unit: 'bits' }
                ],
                calculate: (inputs) => (inputs.width * inputs.height * inputs.depth) / 8 / 1024 / 1024,
                resultUnit: 'MB',
                explanation: 'Uncompressed image size. 24-bit = RGB (8 bits each). 32-bit = RGBA (includes alpha).'
            },
            frameRate: {
                name: 'Frame Data Rate',
                formula: 'Rate = Pixels × FPS × ColorDepth',
                inputs: [
                    { id: 'width', label: 'Width', symbol: 'W', unit: 'px' },
                    { id: 'height', label: 'Height', symbol: 'H', unit: 'px' },
                    { id: 'fps', label: 'Frames/Second', symbol: 'FPS', unit: 'fps' },
                    { id: 'depth', label: 'Bits/Pixel', symbol: 'BPP', unit: 'bits' }
                ],
                calculate: (inputs) => (inputs.width * inputs.height * inputs.fps * inputs.depth) / 1024 / 1024 / 8,
                resultUnit: 'MB/s',
                explanation: 'Data rate for video. 1080p@60fps@24bit = ~373 MB/s uncompressed. Compression reduces drastically.'
            }
        }
    },
    performance: {
        title: 'Performance Metrics',
        calculators: {
            cpuUtilization: {
                name: 'CPU Utilization',
                formula: 'Utilization = (BusyTime / TotalTime) × 100',
                inputs: [
                    { id: 'busyTime', label: 'Busy Time', symbol: 'T_busy', unit: 's' },
                    { id: 'totalTime', label: 'Total Time', symbol: 'T_total', unit: 's' }
                ],
                calculate: (inputs) => (inputs.busyTime / inputs.totalTime) * 100,
                resultUnit: '%',
                explanation: 'Percentage of time CPU is actively working. 100% = fully utilized, 0% = idle.'
            },
            throughput: {
                name: 'System Throughput',
                formula: 'Throughput = Tasks / Time',
                inputs: [
                    { id: 'tasks', label: 'Tasks Completed', symbol: 'N', unit: 'tasks' },
                    { id: 'time', label: 'Time Period', symbol: 'T', unit: 's' }
                ],
                calculate: (inputs) => inputs.tasks / inputs.time,
                resultUnit: 'tasks/s',
                explanation: 'Number of tasks completed per unit time. Higher = better performance.'
            },
            cacheHitRatio: {
                name: 'Cache Hit Ratio',
                formula: 'Hit Ratio = Hits / (Hits + Misses)',
                inputs: [
                    { id: 'hits', label: 'Cache Hits', symbol: 'H', unit: 'requests' },
                    { id: 'misses', label: 'Cache Misses', symbol: 'M', unit: 'requests' }
                ],
                calculate: (inputs) => (inputs.hits / (inputs.hits + inputs.misses)) * 100,
                resultUnit: '%',
                explanation: 'Percentage of requests served from cache. Higher = faster. Good caches: 90%+.'
            },
            speedup: {
                name: 'Parallel Speedup',
                formula: 'Speedup = T_serial / T_parallel',
                inputs: [
                    { id: 'serial', label: 'Serial Time', symbol: 'T_s', unit: 's' },
                    { id: 'parallel', label: 'Parallel Time', symbol: 'T_p', unit: 's' }
                ],
                calculate: (inputs) => inputs.serial / inputs.parallel,
                resultUnit: 'x faster',
                explanation: 'How much faster parallel execution is. 4x speedup = runs in 1/4 the time.'
            }
        }
    }
};

// ========================================
// COMPUTER SCIENCE CALCULATOR CLASS
// ========================================
class ComputerScienceCalculator {
    constructor() {
        this.currentCategory = 'number-systems';
        this.currentCalculator = null;

        this.initializeElements();
        this.attachEventListeners();
        this.loadCategory('number-systems');
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
        const data = csCalculators[category];

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

        const data = csCalculators[this.currentCategory];
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
                    <input type="text" 
                           class="cs-input" 
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
            const value = document.getElementById(input.id).value;
            // For number systems, keep as string if not purely numeric
            if (this.currentCategory === 'number-systems') {
                inputs[input.id] = value;
            } else {
                const numValue = parseFloat(value);
                if (isNaN(numValue)) {
                    allValid = false;
                }
                inputs[input.id] = numValue;
            }
        });

        if (!allValid && this.currentCategory !== 'number-systems') {
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
        if (typeof value === 'string') {
            return value;
        }
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
// INITIALIZE CS CALCULATOR
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    window.csCalculator = new ComputerScienceCalculator();
});