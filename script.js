const nums = [8, 9, 82, 1 ,99, 7];

function maxValue(arr) {
    let max = arr[0];

    for(let i = 1; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};

console.log(maxValue(nums));
