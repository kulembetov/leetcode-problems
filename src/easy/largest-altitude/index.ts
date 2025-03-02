export const largestAltitude = (gain: number[]): number => {
    let max = 0;
    let current = 0;

    for (let i of gain) {
        current += i;
        max = Math.max(max, current);
    }

    return max;
}