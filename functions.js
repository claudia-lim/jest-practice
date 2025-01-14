
/*
 * Must provide DOB in YYYY-MM-DD format
 */
module.exports.calculateAge = function calculateAge(dob) {
    const dobDate = new Date(dob)
    if (dobDate.toString() === 'Invalid Date') {
        return false
    }
    const today = new Date()
    let age = today.getFullYear() - dobDate.getFullYear()
    let months = today.getMonth() - dobDate.getMonth()
    if (months < 0 || (months === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    if (age < 0) return false
    return age;
}

module.exports.calculateTax = function calculateTax(salary) {
    const taxBrackets = [
        {
            amount: 12500,
            percentage: 0
        },
        {
            amount: 17500,
            percentage: 0.05
        },
        {
            amount: 20000,
            percentage: 0.1
        },
        {
            percentage: 0.2
        }
    ]
    let bracket = 0
    let tax = 0
    while (salary > 0) {
        if (bracket > 2 || salary <= taxBrackets[bracket].amount) {
            tax += salary * taxBrackets[bracket].percentage
        } else {
            tax += taxBrackets[bracket].amount * taxBrackets[bracket].percentage
        }
        salary -= taxBrackets[bracket].amount
        bracket++
    }
    return tax
}

module.exports.greet = function greet(name, showWeather = true) {
    if (typeof name !== "string") {
        throw new TypeError('Name must be a string')
    }
    if (typeof showWeather !== "boolean") {
        throw new TypeError('showWeather must be boolean')
    }
        let weather = ''
        if (showWeather) {
            const weatherOptions = [
                'It is sunny today!',
                'It is a bit chilly today.',
                'It is raining today.',
                'It is snowing.'
            ]
            weather = ' ' + weatherOptions[Math.floor(Math.random() * weatherOptions.length)]
        }
        return 'Hi ' + name + '.' + weather
}
