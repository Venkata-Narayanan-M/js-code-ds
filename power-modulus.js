// function optimumPow(a, n, d) {
//   if (a === 0) return 0;
//   if (n === 0) return 1;
//   if (a < 0) return (d - (Math.abs(a) % d)) % d;

//   let halfPow = optimumPow(a, Math.floor(n / 2), d);
//   let halfAns = (((halfPow % d) * halfPow) % d) % d;

//   if (n % 2 === 0) {
//     return halfAns;
//   }

//   return (((halfAns % d) * Math.abs(a)) % d) % d;
// }

// function pow(a, n) {
//   if (n === 0) return 1;

//   let halfPow = pow(a, Math.floor(n / 2));
//   let halfAns = halfPow * halfPow;

//   if (n % 2 === 0) {
//     return halfAns;
//   }

//   return halfAns * a;
// }

function powHelp(A, B, C) {
    console.log({ A, B, C });
    if (A === 0n || A === 1n) return A % C;
    if (B === 0) return 1;
    // if (B === 1) return A % C;
    // if (B === 2) return ((A % C) * (A % C)) % C;

    let halfPow = BigInt(powHelp(A, Math.floor(B / 2), C));
    let halfAns = BigInt(((halfPow % C) * (halfPow % C)) % C);

    if (B % 2 === 0) {
        return halfAns;
    }
    return ((A % C) * halfAns) % C;
}

function gfgPow(A, B, C) {
    let ans = powHelp(BigInt(A), B, BigInt(C));
    if (ans < 0) {
        return (ans % C) + C;
    }
    return parseInt(ans);
}

console.clear();
// console.log(gfgPow(2132, 0, 12));
console.log(gfgPow(0, 0, 1));
// console.log(gfgPow(2, 3, 3));
// console.log(gfgPow(67790475, 13522204, 98794224));
