// Get all DOM elements
const temperatureInput = document.getElementById('temperature');
const fromUnitRadios = document.getElementsByName('fromUnit');
const toUnitRadios = document.getElementsByName('toUnit');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');
const resultContainer = document.getElementById('resultContainer');
const resultValue = document.getElementById('resultValue');
const errorMessage = document.getElementById('errorMessage');

// Conversion functions
const conversions = {
    celsiusToFahrenheit: (c) => (c * 9/5) + 32,
    celsiusToKelvin: (c) => c + 273.15,
    fahrenheitToCelsius: (f) => (f - 32) * 5/9,
    fahrenheitToKelvin: (f) => (f - 32) * 5/9 + 273.15,
    kelvinToCelsius: (k) => k - 273.15,
    kelvinToFahrenheit: (k) => (k - 273.15) * 9/5 + 32
};

// Unit display names
const unitDisplayNames = {
    celsius: '°C',
    fahrenheit: '°F',
    kelvin: 'K'
};

// Get selected units
function getSelectedUnits() {
    let fromUnit, toUnit;
    
    for (let radio of fromUnitRadios) {
        if (radio.checked) {
            fromUnit = radio.value;
            break;
        }
    }
    
    for (let radio of toUnitRadios) {
        if (radio.checked) {
            toUnit = radio.value;
            break;
        }
    }
    
    return { fromUnit, toUnit };
}

// Validate input
function validateInput(value) {
    const num = parseFloat(value);
    
    if (value.trim() === '') {
        return { isValid: false, message: 'Please enter a temperature value' };
    }
    
    if (isNaN(num)) {
        return { isValid: false, message: 'Please enter a valid number' };
    }
    
    const { fromUnit } = getSelectedUnits();
    if (fromUnit === 'kelvin' && num < 0) {
        return { isValid: false, message: 'Kelvin cannot be negative' };
    }
    
    return { isValid: true, message: '' };
}

// Convert temperature
function convertTemperature() {
    const inputValue = temperatureInput.value;
    const { fromUnit, toUnit } = getSelectedUnits();
    
    // Validate input
    const validation = validateInput(inputValue);
    if (!validation.isValid) {
        errorMessage.textContent = validation.message;
        resultContainer.style.display = 'none';
        return;
    }
    
    errorMessage.textContent = '';
    const temperature = parseFloat(inputValue);
    let convertedTemp;
    
    // Same unit conversion
    if (fromUnit === toUnit) {
        convertedTemp = temperature;
    } else {
        // Convert through intermediate unit (Celsius)
        let celsius;
        
        // Convert to Celsius first
        if (fromUnit === 'celsius') {
            celsius = temperature;
        } else if (fromUnit === 'fahrenheit') {
            celsius = conversions.fahrenheitToCelsius(temperature);
        } else if (fromUnit === 'kelvin') {
            celsius = conversions.kelvinToCelsius(temperature);
        }
        
        // Convert from Celsius to target unit
        if (toUnit === 'celsius') {
            convertedTemp = celsius;
        } else if (toUnit === 'fahrenheit') {
            convertedTemp = conversions.celsiusToFahrenheit(celsius);
        } else if (toUnit === 'kelvin') {
            convertedTemp = conversions.celsiusToKelvin(celsius);
        }
    }
    
    // Display result with proper rounding
    const roundedTemp = Math.round(convertedTemp * 100) / 100;
    resultValue.textContent = `${roundedTemp} ${unitDisplayNames[toUnit]}`;
    resultContainer.style.display = 'block';
}

// Reset form
function resetForm() {
    temperatureInput.value = '';
    errorMessage.textContent = '';
    resultContainer.style.display = 'none';
    
    // Reset to default units
    fromUnitRadios[0].checked = true;
    toUnitRadios[1].checked = true;
    
    temperatureInput.focus();
}

// Event listeners
convertBtn.addEventListener('click', convertTemperature);
resetBtn.addEventListener('click', resetForm);

// Allow conversion on Enter key
temperatureInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});

// Clear error message on input
temperatureInput.addEventListener('input', () => {
    if (errorMessage.textContent) {
        errorMessage.textContent = '';
    }
});

// Initialize focus
temperatureInput.focus();
