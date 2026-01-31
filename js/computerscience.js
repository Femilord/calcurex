// ========================================
// COMPUTERSCIENCE.JS - Computer Science Tools
// ========================================

const ComputerScienceApp = {
    init() {
        this.changeType();
    },

    changeType() {
        const type = document.getElementById('cs-type').value;
        const inputsContainer = document.getElementById('cs-inputs');

        if (!inputsContainer) return;

        inputsContainer.innerHTML = '';

        const inputConfigs = {
            'number-system': ['Number', 'From Base (2-36)', 'To Base (2-36)'],
            'binary-operations': ['First Binary Number', 'Second Binary Number', 'Operation (+, -, *, /)'],
            'boolean': ['Expression A (0 or 1)', 'Expression B (0 or 1)', 'Operation (AND, OR, XOR, NAND, NOR)'],
            'bitwise': ['First Number', 'Second Number', 'Operation (&, |, ^, <<, >>)'],
            'subnet': ['IP Address (e.g. 192.168.1.0)', 'Subnet Mask (e.g. /24)'],
            'color': ['Color Value (HEX or RGB)'],
            'ascii': ['Text or ASCII Code']
        };

        const inputs = inputConfigs[type] || [];
        inputs.forEach((input, i) => {
            const div = document.createElement('div');
            div.className = 'input-row';
            div.innerHTML = `
                <label for="cs-input-${i}">${input}:</label>
                <input type="text" id="cs-input-${i}" placeholder="Enter value">
            `;
            inputsContainer.appendChild(div);
        });

        const resultContainer = document.getElementById('cs-result');
        if (resultContainer) resultContainer.textContent = '';
    },

    calculate() {
        const type = document.getElementById('cs-type').value;
        const resultContainer = document.getElementById('cs-result');
        if (!resultContainer) return;

        let result = '';

        try {
            switch (type) {
                case 'number-system':
                    const num = document.getElementById('cs-input-0').value;
                    const fromBase = parseInt(document.getElementById('cs-input-1').value);
                    const toBase = parseInt(document.getElementById('cs-input-2').value);
                    const decimal = parseInt(num, fromBase);
                    result = `
                        <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Result: ${decimal.toString(toBase).toUpperCase()} (base ${toBase})</p>
                        <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Operation: Base conversion from base ${fromBase} to base ${toBase}</p>
                    `;
                    break;

                case 'binary-operations':
                    const bin1 = parseInt(document.getElementById('cs-input-0').value, 2);
                    const bin2 = parseInt(document.getElementById('cs-input-1').value, 2);
                    const op = document.getElementById('cs-input-2').value.trim();
                    let binResult;
                    let opName;
                    switch (op) {
                        case '+': binResult = bin1 + bin2; opName = 'Addition'; break;
                        case '-': binResult = bin1 - bin2; opName = 'Subtraction'; break;
                        case '*': binResult = bin1 * bin2; opName = 'Multiplication'; break;
                        case '/': binResult = Math.floor(bin1 / bin2); opName = 'Division'; break;
                    }
                    result = `
                        <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Decimal: ${binResult}, Binary: ${binResult.toString(2)}</p>
                        <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Operation: Binary ${opName}</p>
                    `;
                    break;

                case 'boolean':
                    const a = parseInt(document.getElementById('cs-input-0').value);
                    const b = parseInt(document.getElementById('cs-input-1').value);
                    const boolOp = document.getElementById('cs-input-2').value.toUpperCase();
                    let boolResult;
                    switch (boolOp) {
                        case 'AND': boolResult = a & b; break;
                        case 'OR': boolResult = a | b; break;
                        case 'XOR': boolResult = a ^ b; break;
                        case 'NAND': boolResult = !(a & b) ? 1 : 0; break;
                        case 'NOR': boolResult = !(a | b) ? 1 : 0; break;
                    }
                    result = `
                        <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Result: ${boolResult}</p>
                        <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Operation: ${boolOp} gate (A ${boolOp} B)</p>
                    `;
                    break;

                case 'bitwise':
                    const n1 = parseInt(document.getElementById('cs-input-0').value);
                    const n2 = parseInt(document.getElementById('cs-input-1').value);
                    const bitOp = document.getElementById('cs-input-2').value.trim();
                    let bitResult;
                    let bitOpName;
                    switch (bitOp) {
                        case '&': bitResult = n1 & n2; bitOpName = 'AND'; break;
                        case '|': bitResult = n1 | n2; bitOpName = 'OR'; break;
                        case '^': bitResult = n1 ^ n2; bitOpName = 'XOR'; break;
                        case '<<': bitResult = n1 << n2; bitOpName = 'Left Shift'; break;
                        case '>>': bitResult = n1 >> n2; bitOpName = 'Right Shift'; break;
                    }
                    result = `
                        <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Result: ${bitResult} (Binary: ${bitResult.toString(2)})</p>
                        <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Operation: Bitwise ${bitOpName} (${n1} ${bitOp} ${n2})</p>
                    `;
                    break;

                case 'subnet':
                    const ip = document.getElementById('cs-input-0').value;
                    const mask = parseInt(document.getElementById('cs-input-1').value.replace('/', ''));
                    const hosts = Math.pow(2, 32 - mask) - 2;
                    result = `
                        <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Available Hosts: ${hosts}, Network: ${ip}/${mask}</p>
                        <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Formula: Hosts = 2^(32 - mask) - 2</p>
                    `;
                    break;

                case 'color':
                    const color = document.getElementById('cs-input-0').value.trim();
                    if (color.startsWith('#')) {
                        const r = parseInt(color.slice(1, 3), 16);
                        const g = parseInt(color.slice(3, 5), 16);
                        const b = parseInt(color.slice(5, 7), 16);
                        result = `
                            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">RGB: rgb(${r}, ${g}, ${b})</p>
                            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Conversion: HEX to RGB</p>
                        `;
                    } else if (color.startsWith('rgb')) {
                        const rgb = color.match(/\d+/g);
                        const hex = '#' + rgb.map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
                        result = `
                            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">HEX: ${hex.toUpperCase()}</p>
                            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Conversion: RGB to HEX</p>
                        `;
                    }
                    break;

                case 'ascii':
                    const input = document.getElementById('cs-input-0').value;
                    if (isNaN(input)) {
                        result = `
                            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">ASCII Codes: ${Array.from(input).map(c => c.charCodeAt(0)).join(', ')}</p>
                            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Conversion: Text to ASCII</p>
                        `;
                    } else {
                        result = `
                            <p style="color: #3b82f6; font-size: 1.2em; font-weight: bold;">Character: ${String.fromCharCode(parseInt(input))}</p>
                            <p style="color: #6b7280; margin-top: 10px; font-style: italic;">Conversion: ASCII to Character</p>
                        `;
                    }
                    break;
            }

            resultContainer.innerHTML = result || '<p style="color: #ef4444;">Invalid input</p>';
            resultContainer.style.color = '#3b82f6';
        } catch (e) {
            resultContainer.textContent = 'Error in calculation';
            resultContainer.style.color = '#ef4444';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ComputerScienceApp.init();
});