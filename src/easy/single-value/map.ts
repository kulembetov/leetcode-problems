// time complexity: O(n), where n is the lengtho of the input array
// space complexity: 0(n), directly proportional to the number of unique elements in the array

const singleNumber = (nums: number[]): number => {
	const frequencyMap = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		let count = frequencyMap.get(nums[i]) || 0;
		frequencyMap.set(nums[i], count + 1);
	}

	for (let [num, count] of frequencyMap) {
		if (count === 1) {
			return num;
		}
	}
	return 0;
}