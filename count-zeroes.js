function countZeroes(arr, low = 0, high = arr.length - 1) {
    if (arr[high] === 1) return 0;

    if (high >= low) {
        let middle = low + Math.floor((high - low) / 2);
        if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
            return arr.length - middle;
        }
        else if (arr[middle] === 1) {
            return countZeroes(arr, middle + 1, high);
        }
        return countZeroes(arr, low, middle - 1);
    }
    return -1;
}

module.exports = countZeroes