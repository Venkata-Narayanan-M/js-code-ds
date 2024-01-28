function towerOfHanoi(N, src, dest, int) {
    if (N === 1) return 1;

    let x = towerOfHanoi(N - 1, src, int, dest);
    let y = towerOfHanoi(1, src, dest, int);
    let z = towerOfHanoi(N - 1, int, dest, src);

    return x + y + z;
}

console.log(towerOfHanoi(15, "A", "B", "C"));