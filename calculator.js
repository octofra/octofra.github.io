function calculate() {
    let numerator1 = parseInt(document.getElementById("numerator1").value);
    let denominator1 = parseInt(document.getElementById("denominator1").value);
    let numerator2 = parseInt(document.getElementById("numerator2").value);
    let denominator2 = parseInt(document.getElementById("denominator2").value);
    let operation = document.getElementById("operation").value;

    let result;

    if (operation === "add") {
        result = addFractions(numerator1, denominator1, numerator2, denominator2);
    } else if (operation === "subtract") {
        result = subtractFractions(numerator1, denominator1, numerator2, denominator2);
    } else if (operation === "multiply") {
        result = multiplyFractions(numerator1, denominator1, numerator2, denominator2);
    } else if (operation === "divide") {
        result = divideFractions(numerator1, denominator1, numerator2, denominator2);
    }

    document.getElementById("result").innerHTML = result;
}

function addFractions(numerator1, denominator1, numerator2, denominator2) {
    let resultNumerator = (numerator1 * denominator2) + (numerator2 * denominator1);
    let resultDenominator = denominator1 * denominator2;
    let gcd = greatestCommonDivisor(resultNumerator, resultDenominator);
    return simplifyFraction(resultNumerator / gcd, resultDenominator / gcd);
}

function subtractFractions(numerator1, denominator1, numerator2, denominator2) {
    let resultNumerator = (numerator1 * denominator2) - (numerator2 * denominator1);
    let resultDenominator = denominator1 * denominator2;
    let gcd = greatestCommonDivisor(resultNumerator, resultDenominator);
    return simplifyFraction(resultNumerator / gcd, resultDenominator / gcd);
}

function multiplyFractions(numerator1, denominator1, numerator2, denominator2) {
    let resultNumerator = numerator1 * numerator2;
    let resultDenominator = denominator1 * denominator2;
    let gcd = greatestCommonDivisor(resultNumerator, resultDenominator);
    return simplifyFraction(resultNumerator / gcd, resultDenominator / gcd);
}

function divideFractions(numerator1, denominator1, numerator2, denominator2) {
    let resultNumerator = numerator1 * denominator2;
    let resultDenominator = denominator1 * numerator2;
    let gcd = greatestCommonDivisor(resultNumerator, resultDenominator);
    return simplifyFraction(resultNumerator / gcd, resultDenominator / gcd);
}

function greatestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
}

function simplifyFraction(numerator, denominator) {
    if (denominator === 1) {
        return numerator.toString();
    }
    return numerator.toString() + "/" + denominator.toString();
}
