function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];

    let middle = Math.floor((low + high) / 2);
    if (arr[middle] === num) return arr[middle];

    if (middle > 0 && arr[middle - 1] <= num && num < arr[middle]) return arr[middle - 1];

    if (num < arr[middle]) return findFloor(arr, num, low, middle - 1);

    return findFloor(arr, num, middle + 1, high);
}

module.exports = findFloor