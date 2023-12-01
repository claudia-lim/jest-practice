const {calculateAge, calculateTax, greet} = require('../functions')

describe('Tests for calculateAge', () => {
    test('test if returns false when given invalid date', () => {
        const result = calculateAge('not a date')
        expect(result).toBe(false)
    })
    test('test if returns false age if date in future given', () => {
        const result = calculateAge('2050-08-27')
        expect(result).toBe(false)
    })
    test('test if returns correct age when valid dob given', () => {
        const result = calculateAge('1989-08-27')
        expect(result).toBe(34)
    })
})

describe('Tests for calculateTax', () => {
    test('test if returns 0 when salary of 0 given', () => {
        const result = calculateTax(0)
        expect(result).toBe(0)
    })
    test('test if returns 0 for salary of 1000', () => {
        const result = calculateTax(1000)
        expect(result).toBe(0)
    })
    test('return correct amount of tax for salary of 40000', () => {
        const result = calculateTax(40000)
        expect(result).toBe(1875)
    })
    test('return correct amount of tax for salary of 75000', () => {
        const result = calculateTax(75000)
        expect(result).toBe(7875)
    })
    test('return 0 when given invalid salary', () => {
        const result = calculateTax('-5')
        expect(result).toBe(0)
    })
})

describe('Tests for greet', () => {
    test('correct return when given valid name without weather', () => {
        const result = greet('Claud', false)
        expect(result).toBe('Hi Claud.')
    })
    test('correct return when given no name without weather option', () => {
        const result = greet('', false)
        expect(result).toBe('Hi .')
    })
    test('correct return when given no name with weather option', () => {
        const result = greet('')
        expect(result).toMatch(/Hi . It is/)
    })
    test('correct return when given name and no second parameter', () => {
        const result = greet('Claud')
        expect(result).toMatch(/Hi Claud. It is/)
    })
    test('malformed test, first parameter as array, no weather option', () => {
        function result () {
            greet({}, false)
        }
        expect(result).toThrow(TypeError)
    })
    test('check correct error message if given invalid first parameter', () => {
        function result () {
            greet({}, false)
        }
        expect(result).toThrow('Name must be a string')
    })
    test('malformed test, give non boolean weather option parameter', () => {
        function result () {
            greet('Claud', 'true')
        }
        expect(result).toThrow(TypeError)
    })
    test('check correct error message if given invalid second parameter', () => {
        function result() {
            greet('Claud', 'true')
        }
        expect(result).toThrow('showWeather must be boolean')
    })
})
