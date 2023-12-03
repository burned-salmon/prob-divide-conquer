function findRotatedIndex(arr, num) {
    // find pivot
    let pivot = 0;
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) pivot = 0;
    let start = 0
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] > arr[middle + 1]) pivot = middle + 1
        else if (arr[start] <= arr[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1);
    }
}

function binarySearch(arr, num, start, end) {
    if (arr.length === 0) return -1;
    if (num < arr[start] || num > arr[end]) return -1;

    while (start <= end) {
        var middle = Math.floor((start + end) / 2);
        if (arr[middle] === num) {
            return middle;
        } else if (num < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex