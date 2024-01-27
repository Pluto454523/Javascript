// ให้นักศึกษา เขียน function เพื่อหาจุดสูงสุด (Peak element) ของ Array ที่กำหนดให้ 
// โดยจะต้อง return ค่า index ของจุดสูงสุดทั้งหมด ถ้ามีมากกว่า 1 จุดสูงสุด ให้ return ทุก index ที่เป็นจุดสูงสุดทั้งหมด 
// ถ้าไม่มีจุดสูงสุดให้ return ค่าเป็น Array ว่าง

// const nums1 = [3, 2, 3, 1] ; --> [0,2]
// const nums2 = [1, 2, 1, 3, 5, 6, 4]; --> [1,5]
// const nums3 = [1, 2, 1, 4, 5, 6, 4, 7]; --> [1,5,7]

// ❯ node findPeak.js
// Peak element index of : 3,2,3,1 -> 0,2
// Peak element index of : 1,2,1,3,5,6,4 -> 1,5
// Peak element index of : 1,2,1,4,5,6,4,7 -> 1,5,7

function findAllPeakElements(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let preNum = nums[i-1] ? nums[i-1] : 0
        let nextNum = nums[i+1] ? nums[i+1] : 0
        if (nums[i] > preNum && nums[i] > nextNum) {
            result.push(i)
        }
    }
    return result
}

// Test the function
const nums1 = [3, 2, 3, 1];
const nums2 = [1, 2, 1, 3, 5, 6, 4];
const nums3 = [1, 2, 1, 4, 5, 6, 4, 7];

console.log(`Peak element index of : ${nums1} -> ${findAllPeakElements(nums1)}`);
console.log(`Peak element index of : ${nums2} -> ${findAllPeakElements(nums2)}`);
console.log(`Peak element index of : ${nums3} -> ${findAllPeakElements(nums3)}`);

module.exports = findAllPeakElements;
