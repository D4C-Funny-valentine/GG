const calculateEven = (number = 0) => {
    return number % 2 === 0;
}

const isDecimal = (number) => {
    return number % 1 !== 0;
}

export {
    calculateEven,
    isDecimal
}