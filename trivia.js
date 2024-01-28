function sumOfDigits(A) {
    if (A === 0) return 0;

    return (A % 10) + sumOfDigits(Math.floor(A / 10));
}

function magicNumber(A) {
    let sum = sumOfDigits(A);
    if (sum < 10) return sum;

    return magicNumber(sum);

}

function findAthFibonacci(A) {
    if (A <= 1) return A;

    return findAthFibonacci(A - 1) + findAthFibonacci(A - 2);
}

function factorial(A) {
    if (A === 0) return 1;

    return (A * factorial(A - 1));
}

function reverseString(A) {
    if (A.length === 1) return A[0];

    return A[A.length - 1] + reverseString(A.substring(0, A.length - 1));
}

console.log(reverseString("scaleracademy"));