// Time Complexity: O(n), as we are iterating through the array once
// Space Complexity: O(n), as we are storing the frequency of each element in a map

export const findUnique = (arr: number[]): boolean => {
    const frequencyMap = new Map<number, number>();

    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const occurences = Array.from(frequencyMap.values());
    const uniqueOccurrences = new Set(occurences);

    return occurences.length === uniqueOccurrences.size;
}
