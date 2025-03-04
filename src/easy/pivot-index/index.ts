// Time Complexity: O(n), as we iterate through the array once
// Space Complexity: O(1), as we create only a variable to store the left sum and right sum that is don't depend on the input size

export const pivotIndex = (nums: number[]): number => {
    let leftSum = 0;
    let rightSum = nums.reduce((total, num) => total + num, 0);
    
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        
        if (leftSum === rightSum) return i;
        
        leftSum += nums[i];
    }
    
    return -1;
}