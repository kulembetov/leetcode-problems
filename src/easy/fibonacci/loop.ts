// time complexity: O(n), due to the function iterates through a loop to find a fibonacci number only once
// space complexity: O(1), the amount of memory does not depend on the input size

export const fibonacci = (num: number): number => {
	if (num <= 1) return num;

	let prev = 0;
	let curr = 1;

	for (let i = 2; i <= num; i++) {
		const next = curr + prev;
		prev = curr;
		curr = next;
	}
	return curr;

}