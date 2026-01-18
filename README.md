# Temperature Converter Website

A modern, responsive temperature converter web application that supports conversions between Celsius, Fahrenheit, and Kelvin.

## Features

✅ **Temperature Input** - Enter any temperature value with real-time validation
✅ **Multiple Unit Support** - Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K)
✅ **Flexible Conversion** - Convert from any unit to any other unit
✅ **Input Validation** - Ensures valid number input and prevents negative Kelvin values
✅ **Modern UI** - Beautiful gradient design with smooth animations
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Quick Actions** - Convert with button click or press Enter key
✅ **Reset Function** - Easily clear and start a new conversion

## Files Structure

```
pro2/
├── index.html      (HTML structure)
├── styles.css      (Styling and animations)
├── script.js       (Conversion logic and interactivity)
└── README.md       (This file)
```

## How to Use

1. **Enter Temperature Value** - Type a number in the input field
2. **Select Source Unit** - Choose which unit you're converting FROM (Celsius, Fahrenheit, or Kelvin)
3. **Select Target Unit** - Choose which unit you're converting TO
4. **Click Convert** - Press the "Convert" button or press Enter
5. **View Result** - The converted temperature appears in the result box
6. **Reset** - Click "Reset" to clear and start over

## Conversion Formulas Used

- **Celsius to Fahrenheit**: (C × 9/5) + 32
- **Celsius to Kelvin**: C + 273.15
- **Fahrenheit to Celsius**: (F - 32) × 5/9
- **Fahrenheit to Kelvin**: (F - 32) × 5/9 + 273.15
- **Kelvin to Celsius**: K - 273.15
- **Kelvin to Fahrenheit**: (K - 273.15) × 9/5 + 32

## Validation Rules

- Input must be a valid number
- Kelvin values cannot be negative (absolute zero = 0 K)
- Empty input will show an error message

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Implemented

### Core Requirements
✅ Input field with number validation
✅ Unit selection (radio buttons for both source and target units)
✅ Convert button
✅ Result display area

### Bonus Features
✅ Kelvin conversion support
✅ Smooth animations and transitions
✅ Error messages for invalid input
✅ Enter key support for quick conversion
✅ Reset button to clear form
✅ Responsive mobile design
✅ Beautiful gradient UI

## Getting Started

Simply open `index.html` in your web browser to start using the Temperature Converter!

No installation or dependencies required - this is a standalone HTML/CSS/JavaScript application.

## Example Conversions

- 0°C = 32°F = 273.15 K
- 100°C = 212°F = 373.15 K
- 68°F = 20°C = 293.15 K
- 298.15 K = 25°C = 77°F
