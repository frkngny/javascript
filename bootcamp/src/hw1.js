// rpime numbers
function findPrime(...numbers) {
    var isPrime = {}
    for (let j = 0; j < numbers.length; j++) {
        var num = numbers[j];
        for (let i = 2; i < num; i++) {
            var flag = true
            if (num % i == 0){
                flag = false
                break;
            }
        }
        isPrime[num] = flag
    }
    return isPrime
}

var whichIsPrime = findPrime(3,5,8,13,21,7,24)
console.log(whichIsPrime)

// friend numbers
function friendNumbers(num1, num2) {
    var sumOfDividers1 = sumDividers(findDividers(num1))
    var sumOfDividers2 = sumDividers(findDividers(num2))

    if (sumOfDividers1 == num2 && sumOfDividers2 == num1){
        console.log(num1 + " and " + num2 + " are friend numbers.")
    } else{
        console.log(num1 + " and " + num2 + " are NOT friends")
    }

}

function findDividers(number) {
    var allDividers = []
    for (let i = 0; i < number; i++) {
        if (number % i == 0){
            allDividers.push(i)
        }
    }
    return allDividers
}

function sumDividers(dividers) {
    var total = 0
    for (let i = 0; i < dividers.length; i++) {
        total += dividers[i];
    }
    return total
}

friendNumbers(220, 284)

// perfecto numbero :)
function perfectNumbers(maxNum) {
    var perfecto = []
    for (let num = 1; num < maxNum; num++) {
        var total = 0
        for (let j = 1; j < num; j++) {
            if (num % j == 0){
                total += j
            }
        }
        if (total == num){
            perfecto.push(num)
        }
    }
    return perfecto
}
var perfectos = perfectNumbers(1000)
console.log(perfectos)

// prime numbers
function primeNumbers(maxNum) {
    var primes = []
    for (let num = 0; num < maxNum; num++) {
        var flag = false
        for (let i = 2; i < num; i++) {
            flag = true
            if (num % i == 0){
                flag = false
                break
            }
        }
        if (flag==true){
            primes.push(num)
        }
    }
    return primes
}
var primeros = primeNumbers(1000)
console.log(primeros)